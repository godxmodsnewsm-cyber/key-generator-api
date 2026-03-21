import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Connect DB
if (!mongoose.connections[0].readyState) {
    await mongoose.connect(MONGODB_URI);
    }

    // Schema
    const KeySchema = new mongoose.Schema({
        key: String,
            device: String,
                used: Boolean,
                    createdAt: Date
                    });

                    const Key = mongoose.models.Key || mongoose.model("Key", KeySchema);

                    // Key generator
                    function generateKey() {
                        return Math.random().toString(36).substring(2, 10);
                        }

                        export default async function handler(req, res) {
                            try {
                                    const newKey = generateKey();

                                            await Key.create({
                                                        key: newKey,
                                                                    device: null,
                                                                                used: false,
                                                                                            createdAt: new Date()
                                                                                                    });

                                                                                                            res.status(200).json({ key: newKey });

                                                                                                                } catch (err) {
                                                                                                                        console.error(err);
                                                                                                                                res.status(500).json({ error: "Server error" });
                                                                                                                                    }
                                                                                                                                    }