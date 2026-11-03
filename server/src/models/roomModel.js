const roomSchema = new mongoose.Schema({
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
        required: true
    },

    roomNumber: {
        type: String,
        required: true
    },

    floor: {
        type: Number,
        default: 0
    },

    roomType: {
        type: String,
        enum: ["Single", "Double", "Shared"],
        default: "Single"
    },

    monthlyRent: {
        type: Number,
        required: true
    },

    maintenance: {
        type: Number,
        default: 0
    },

    status: {
        type: String,
        enum: ["Vacant", "Occupied", "Maintenance"],
        default: "Vacant"
    }

}, { timestamps: true });