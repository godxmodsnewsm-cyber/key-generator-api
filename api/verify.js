 const crypto = require("crypto");

app.post("/connect", (req, res) => {
    const { user_key, serial } = req.body;
    
        const SECRET = "Vm8Lk7Uj2JmsjCPVPVjrLa7zgfx3uz9E";
        
            // ❌ key check (example)
                if (user_key !== "TEST123") {
                        return res.json({
                                    status: false,
                                                reason: "Invalid Key"
                                                        });
                                                            }
                                                            
                                                                // ⏳ expiry check (example)
                                                                    let expired = false; // यहाँ DB logic डालना
                                                                    
                                                                        if (expired) {
                                                                                return res.json({
                                                                                            status: false,
                                                                                                        reason: "Key Expired"
                                                                                                                });
                                                                                                                    }
                                                                                                                    
                                                                                                                        // 🔐 TOKEN generate
                                                                                                                            const auth = `PUBG-${user_key}-${serial}-${SECRET}`;
                                                                                                                                const token = crypto.createHash("md5").update(auth).digest("hex");
                                                                                                                                
                                                                                                                                    res.json({
                                                                                                                                            status: true,
                                                                                                                                                    data: {
                                                                                                                                                                token: token,
                                                                                                                                                                            rng: Math.floor(Date.now() / 1000)
                                                                                                                                                                                    }
                                                                                                                                                                                        });
                                                                                                                                                                                        });                                                                                                                    ]);