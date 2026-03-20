import mongoose from "mongoose"

const KeySchema = new mongoose.Schema({
  key: String,
    device: String,
      createdAt: Number,
        used: Boolean
        })

        export default mongoose.models.Key || mongoose.model("Key", KeySchema)