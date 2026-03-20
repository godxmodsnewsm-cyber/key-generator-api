let keys = [];

export default function handler(req, res) {
  let newKey = Math.random().toString(36).substring(2, 10);

    keys.push({
        key: newKey,
            time: Date.now()
              });

                res.json({ key: newKey });
                }