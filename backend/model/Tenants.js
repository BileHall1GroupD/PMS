const mongoose = require("mongoose");

const TenantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tell: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property", // Reference to the Property collection
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tenant", TenantSchema);
