import mongoose from "mongoose";

const RentalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tehsilVillage: {
    type: String,
    required: true,
  },
  rentDuration: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  equipmentName: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    required: false,
    default: "Standard Rental",
  },
  dates: {
    type: String,
    required: false,
    default: "TBD",
  },
  status: {
    type: String,
    enum: ["Pending Setup", "Active", "Pending Pickup", "Completed", "Cancelled"],
    default: "Pending Setup",
  },
  totalAmount: {
    type: Number,
    required: false,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Rental = mongoose.models.Rental || mongoose.model("Rental", RentalSchema);

export default Rental;
