import crypto from "crypto"
import { connectDB } from "../lib/db"
import Key from "../models/Key"

export default async function handler(req, res) {
  await connectDB()
  
    const { game, user_key, serial } = req.body
    
      if (game !== "PUBG") {
          return res.json({ status: false, reason: "Invalid Game" })
            }
            
              const keyData = await Key.findOne({ key: user_key })
              
                if (!keyData) {
                    return res.json({ status: false, reason: "Invalid Key" })
                      }
                      
                        // ❗ ONE TIME USE
                          if (keyData.used) {
                              return res.json({ status: false, reason: "Key Expired" })
                                }
                                
                                  // 🔐 DEVICE LOCK
                                    if (keyData.device && keyData.device !== serial) {
                                        return res.json({ status: false, reason: "Device Mismatch" })
                                          }
                                          
                                            if (!keyData.device) {
                                                keyData.device = serial
                                                  }
                                                  
                                                    // 🔥 C++ MATCH TOKEN
                                                      const auth = `PUBG-${user_key}-${serial}-Vm8Lk7Uj2JmsjCPVPVjrLa7zgfx3uz9E`
                                                        const token = crypto.createHash("md5").update(auth).digest("hex")
                                                        
                                                          // ❗ USE → EXPIRE
                                                            keyData.used = true
                                                              await keyData.save()
                                                              
                                                                return res.json({
                                                                    status: true,
                                                                        data: {
                                                                              token: token,
                                                                                    rng: Math.floor(Date.now() / 1000)
                                                                                        }
                                                                                          })
                                                                                          }                                                         }