import { connectDB } from "../lib/db"
import Key from "../models/Key"

function generateKey() {
  return Math.random().toString(36).substring(2, 10).toUpperCase()
  }

  export default async function handler(req, res) {
    await connectDB()

      const newKey = generateKey()

        await Key.create({
            key: newKey,
                device: null,
                    createdAt: Math.floor(Date.now() / 1000),
                        used: false
                          })

                            res.json({ key: newKey })
                            }