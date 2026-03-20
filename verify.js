let keys = [];

export default function handler(req, res) {
  const { key } = req.query;

    let found = keys.find(k => k.key === key);

      if (!found) {
          return res.json({ status: false });
            }

              let now = Date.now();
                let diff = (now - found.time) / 1000;

                  if (diff > 3600) {
                      return res.json({ status: false });
                        }

                          return res.json({ status: true });
                          }