import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
      const client = new MongoClient(process.env.MONGODB_URI);
          await client.connect();

              const db = client.db("test"); // अपना DB name डाल
                  const collection = db.collection("keys");

                      const key = Math.random().toString(36).substring(2, 10);

                          await collection.insertOne({
                                key: key,
                                      used: false,
                                            createdAt: new Date()
                                                });

                                                    res.status(200).json({ key });
                                                      } catch (error) {
                                                          console.log(error);
                                                              res.status(500).json({ error: "Server error" });
                                                                }
                                                                }