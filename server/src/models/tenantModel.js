import mongoose from "mongoose";

const tenantSchema = new mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true
    },

    name: {
      type: String,
      required: true
    },

    age: {
      type: Number,
      required: true
    },

    profession: {
      type: String,
      required: true
    },

    mobile: {
      type: String,
      required: true
    },

    hometown: {
      type: String,
      required: true
    },

    photo: {
      type: String,
      default: ""
    },

    // Production mein encrypted value ya masked details rakhein.
    aadhaarNumber: {
      type: String,
      select: false
    },

    joiningDate: {
      type: Date,
      required: true
    },

    status: {
      type: String,
      enum: ["Active", "Vacated"],
      default: "Active"
    },
    billingDetails: {
    rentDueDay: {
        type: Number,
        default: 1
    },

    whatsappNumber: {
        type: String,
        required: true
    },

    whatsappConsent: {
        type: Boolean,
        default: false
    },

    billingEnabled: {
        type: Boolean,
        default: true
    }
}
  },
  { timestamps: true }
);

const Tenant = mongoose.model("Tenant", tenantSchema);

export default Tenant;