import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({

    tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tenant",
        required: true
    },

    invoiceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Invoice",
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    paymentDate: {
        type: Date,
        default: Date.now
    },

    paymentMethod: {
        type: String,
        enum: ["Cash", "UPI", "Bank Transfer", "Other"],
        default: "Cash"
    },

    receivedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Landlord"
    },

    note: {
        type: String,
        default: ""
    }

}, { timestamps: true });


const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;