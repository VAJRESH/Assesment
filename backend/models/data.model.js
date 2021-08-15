const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    c_name: { type: String, trim: true, max: 32, required: true },
    c_batch_no: { type: String, required: true },
    d_expiry_date: { type: Date, required: true },
    n_balance_qty: { type: Number, required: true },
    c_packaging: { type: String, trim: true, required: true },
    c_unique_code: { type: String, required: true },
    c_schemes: { type: String, trim: true },
    n_mrp: { type: Number, required: true },
    c_manufacturer: { type: String, trim: true, required: true },
    hsn_code: { type: Number, required: true },
  },
  {
    timestamps: true,
    collection: "data",
  }
);

module.exports = mongoose.model("Data", dataSchema);
