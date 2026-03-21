import mongoose from "mongoose";

const KeySchema = new mongoose.Schema({
  key: String,
    device: String,
      used: Boolean,
        createdAt: Date,
        });

        export default mongoose.models.Key || mongoose.model("Key", KeySchema);