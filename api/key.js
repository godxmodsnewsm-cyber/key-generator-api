export default function handler(req, res) {
      res.status(200).json({
          message: "API working 🔥",
              key: Math.random().toString(36).substring(2, 10)
                });
                }