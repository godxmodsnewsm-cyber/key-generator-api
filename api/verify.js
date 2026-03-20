export default function handler(req, res) {
      const { key } = req.query;

        if (!key) {
            return res.status(400).json({ status: "no key" });
              }

                return res.status(200).json({ status: "valid" });
                }