import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    landlordId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Landlord",
      required: true
    },

    propertyName: {
      type: String,
      required: true
    },

    propertyType: {
      type: String,
      enum: ["Residential", "Commercial", "PG"],
      default: "Residential"
    },

    address: {
      type: String,
      required: true
    },

    city: {
      type: String,
      required: true
    },

    state: {
      type: String,
      required: true
    },

    pincode: {
      type: String,
      required: true
    },

    totalRooms: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;