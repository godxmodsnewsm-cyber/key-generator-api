let keys = [];

export default function handler(req, res) {
  const { key } = req.query;

    const found = keys.find(k => k.key === key);

      if (!found) {
          return res.json({ status: "invalid" });
            }

              if (found.used) {
                  return res.json({ status: "used" });
                    }

                      // 1 hour expiry
                        if (Date.now() - found.createdAt > 3600000) {
                            return res.json({ status: "expired" });
                              }

                                found.used = true;

                                  res.json({ status: "valid" });
                                  }