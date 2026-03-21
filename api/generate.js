import mongoose from "mongoose";

// MongoDB URI (Vercel env से आएगा)
const MONGODB_URI = process.env.MONGODB_URI;

// Schema
const KeySchema = new mongoose.Schema({
  key: String,
    device: String,
      used: Boolean,
        createdAt: {
            type: Date,
                default: Date.now,
                  },
                  });

                  // Model (duplicate error avoid)
                  const KeyModel =
                    mongoose.models.Key || mongoose.model("Key", KeySchema);

                    // DB connect function
                    async function connectDB() {
                      if (mongoose.connections[0].readyState) return;
                        await mongoose.connect(MONGODB_URI);
                        }

                        // API handler
                        export default async function handler(req, res) {
                          await connectDB();

                            if (req.method === "GET") {
                                const newKey = Math.random().toString(36).substring(2, 10);

                                    await KeyModel.create({
                                          key: newKey,
                                                device: "unknown",
                                                      used: false,
                                                          });

                                                              return res.status(200).json({
                                                                    success: true,
                                                                          key: newKey,
                                                                              });
                                                                                }

                                                                                  return res.status(405).json({ message: "Method not allowed" });
                                                                                  }