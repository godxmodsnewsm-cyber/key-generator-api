export default function handler(req, res) {
      res.status(200).json({
          key: "GODX-" + Math.random().toString(36).substr(2, 8).toUpperCase()
            });
            }