import mongoose from "mongoose";

const landlordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true
    },

    mobile: {
      type: String,
      required: true
    },

    profilePhoto: {
      type: String,
      default: ""
    },

    role: {
      type: String,
      default: "landlord"
    }
  },
  { timestamps: true }
);

const Landlord = mongoose.model("Landlord", landlordSchema);

export default Landlord;