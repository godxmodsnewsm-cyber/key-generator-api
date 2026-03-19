const express = require("express");
const app = express();

const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
  });

  // Key generate API
  app.get("/get-key", (req, res) => {
    const key = "KEY-" + Math.random().toString(36).substr(2, 8).toUpperCase();
      res.json({
          status: "success",
              key: key
                });
                });

                // Verify key
                app.get("/verify", (req, res) => {
                  const userKey = req.query.key;

                    if (!userKey) {
                        return res.json({ status: "error", message: "No key provided" });
                          }

                            if (userKey.startsWith("KEY-")) {
                                return res.json({ status: "valid" });
                                  } else {
                                      return res.json({ status: "invalid" });
                                        }
                                        });

                                        app.listen(PORT, () => {
                                          console.log(`Server running on port ${PORT}`);
                                          });