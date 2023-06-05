const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  title: { type: String, required: true, minLength: 3, maxLength: 20 },
  description: { type: String },
  date: { type: Date, default: () => new Date() },
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  categories: [{ type: mongoose.Types.ObjectId, ref: "Category"}] ,//{type:Array},
  status: {
    type: String,
    enum: ["paid", "unpaid", "partially paid", "unknown",'' && 'paid'],
    default:'paid'
  },
  created_at: { type: Date, default: () => new Date(), immutable: true },
  updated_at: { type: Date, default: () => new Date() },
});

const Expense = new mongoose.model("Expense", expenseSchema);

module.exports = Expense;
