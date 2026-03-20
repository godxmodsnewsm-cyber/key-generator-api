let keys = [];

export default function handler(req, res) {
  const key = "GODX-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    keys.push({
        key: key,
            used: false,
                createdAt: Date.now()
                  });

                    res.status(200).json({ key: key });
                    }