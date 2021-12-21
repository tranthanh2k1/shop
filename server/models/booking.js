const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookingSchema = new Schema(
  {
    code_bill: {
      type: String,
    },
    name: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    phone: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    repair_time: {
      type: Date,
      // min: "1987-09-28",
      // required: true,
    },
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    correction_time: {
      type: String,
      // required: true,
    },
    description_error: {
      type: String,
      // required: true,
    },
    exact_error: String,
    image_desc_error: String,
    total_price: {
      type: String,
      default: "",
    },
    payment_method: {
      type: String,
      enum: ["unpaid", "paid"],
      default: "unpaid",
    },
    status: {
      type: String,
      enum: [
        "Wait for confirmation",
        "Confirm",
        "Get laptop",
        "Fixing",
        "Successful fix",
        "Cancellation of booking",
      ],
    },
    service_id: {
      type: mongoose.Types.ObjectId,
      ref: "Service",
    },
    updated_confirm: {
      type: Date,
      default: null,
    },
    updated_fixing: {
      type: Date,
      default: null,
    },
    updated_success: {
      type: Date,
      default: null,
    },
    updated_cancel: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
