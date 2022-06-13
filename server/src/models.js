import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Data", dataSchema);
