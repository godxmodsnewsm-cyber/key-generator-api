require("../lib/db");
const Key = require("../models/Key");

function generateKey() {
    return Math.random().toString(36).substring(2, 10);
    }

    module.exports = async (req, res) => {

        const newKey = generateKey();

            await Key.create({
                    key: newKey,
                            device: null,
                                    used: false,
                                            createdAt: new Date()
                                                });

                                                    res.json({ key: newKey });
                                                    };