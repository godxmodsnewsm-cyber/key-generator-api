import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!mongoose.connections[0].readyState) {
  await mongoose.connect(MONGODB_URI);
  }

  const KeySchema = new mongoose.Schema({
    key: String,
      device: String,
        used: Boolean,
          createdAt: Date,
          });

          const Key = mongoose.models.Key || mongoose.model("Key", KeySchema);

          export default async function handler(req, res) {
            try {
                const { key, device } = req.body;

                    if (!key) {
                          return res.status(400).json({ success: false, message: "Key missing" });
                              }

                                  const foundKey = await Key.findOne({ key });

                                      if (!foundKey) {
                                            return res.status(404).json({ success: false, message: "Invalid key" });
                                                }

                                                    if (foundKey.used && foundKey.device !== device) {
                                                          return res.status(403).json({ success: false, message: "Key already used" });
                                                              }

                                                                  // mark as used
                                                                      foundKey.used = true;
                                                                          foundKey.device = device;
                                                                              await foundKey.save();

                                                                                  return res.status(200).json({ success: true, message: "Key verified" });
                                                                                    } catch (err) {
                                                                                        return res.status(500).json({ error: err.message });
                                                                                          }
                                                                                          }