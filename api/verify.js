import crypto from "crypto";

export default async function handler(req, res) {
    try {
            if (req.method !== "POST") {
                        return res.status(405).json({
                                        status: false,
                                                        reason: "Method not allowed"
                                                                    });
                                                                            }

                                                                                    const { user_key, serial } = req.body;

                                                                                            if (!user_key || !serial) {
                                                                                                        return res.json({
                                                                                                                        status: false,
                                                                                                                                        reason: "Missing parameters"
                                                                                                                                                    });
                                                                                                                                                            }

                                                                                                                                                                    // 🔥 TEST DATABASE (बाद में DB लगा देंगे)
                                                                                                                                                                            const VALID_KEYS = ["TEST123", "GODXMOD"];

                                                                                                                                                                                    if (!VALID_KEYS.includes(user_key)) {
                                                                                                                                                                                                return res.json({
                                                                                                                                                                                                                status: false,
                                                                                                                                                                                                                                reason: "Invalid key"
                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                            // ⏳ Expiry check (demo)
                                                                                                                                                                                                                                                                    const currentTime = Math.floor(Date.now() / 1000);

                                                                                                                                                                                                                                                                            // 🔐 Token generate (C++ जैसा)
                                                                                                                                                                                                                                                                                    let auth = "PUBG-" + user_key + "-" + serial + "-Vm8Lk7Uj2JmsjCPVPVjrLa7zgfx3uz9E";
                                                                                                                                                                                                                                                                                            let token = crypto.createHash("md5").update(auth).digest("hex");

                                                                                                                                                                                                                                                                                                    return res.json({
                                                                                                                                                                                                                                                                                                                status: true,
                                                                                                                                                                                                                                                                                                                            data: {
                                                                                                                                                                                                                                                                                                                                            token: token,
                                                                                                                                                                                                                                                                                                                                                            rng: currentTime
                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                                                                                                                                    } catch (err) {
                                                                                                                                                                                                                                                                                                                                                                                            return res.status(500).json({
                                                                                                                                                                                                                                                                                                                                                                                                        status: false,
                                                                                                                                                                                                                                                                                                                                                                                                                    reason: err.message
                                                                                                                                                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                }