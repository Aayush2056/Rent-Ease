import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
      required: true
    },

    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true
    },

    bills: [
      {
        billType: {
          type: String,
          required: true
        },
        amount: {
          type: Number,
          required: true,
          min: 0
        }
      }
    ],

    currentBill: {
      type: Number,
      required: true
    },

    previousDue: {
      type: Number,
      default: 0
    },

    totalAmount: {
      type: Number,
      required: true
    },

    paidAmount: {
      type: Number,
      default: 0
    },

    remainingAmount: {
      type: Number,
      required: true
    },

    month: {
      type: Number,
      required: true
    },

    year: {
      type: Number,
      required: true
    },

    dueDate: {
      type: Date,
      required: true
    },

    status: {
      type: String,
      enum: ["Paid", "Unpaid", "Partial"],
      default: "Unpaid"
    }
  },
  { timestamps: true }
);

invoiceSchema.index(
  { tenantId: 1, month: 1, year: 1 },
  { unique: true }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;