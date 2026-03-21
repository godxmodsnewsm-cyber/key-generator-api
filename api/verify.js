require("../lib/db");
const Key = require("../models/Key");

module.exports = async (req, res) => {

    const { key, device } = req.body;

        if (!key) {
                return res.json({ success: false, message: "Key missing" });
                    }

                        const foundKey = await Key.findOne({ key });

                            if (!foundKey) {
                                    return res.json({ success: false, message: "Invalid key" });
                                        }

                                            // अगर पहले use हो चुकी है
                                                if (foundKey.used && foundKey.device !== device) {
                                                        return res.json({ success: false, message: "Key already used on another device" });
                                                            }

                                                                // पहली बार use
                                                                    if (!foundKey.used) {
                                                                            foundKey.used = true;
                                                                                    foundKey.device = device;
                                                                                            await foundKey.save();
                                                                                                }

                                                                                                    return res.json({ success: true, message: "Key valid ✅" });
                                                                                                    };