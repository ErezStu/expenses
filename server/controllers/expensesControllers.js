const User = require("../models/UserModel.js");
const Expense = require("../models/ExpenseModel.js");

// GET THE EXPENSES BY USERID
const getExpensesByUserID = async (req, res, next) => {
  try {
    const userID = await User.findById(req.params.userID);
    const expenses = await Expense.find({
      _id: { $in: userID.expenses },
    });
    res.json({ expenses });
  } catch (err) {
    next(err);
  }
};

// CREATE EXPENSE FOR THE USER
const createExpense = async (req, res, next) => {
  try {
    const { title, price, date, category } = req.body;

    const { userID } = req.params;

    const newExpense = new Expense({
      title,
      price,
      date,
      category,
    });

    const expense = await Expense.create(newExpense);

    const user = await User.findById(userID);

    user.expenses.push(expense);

    await user.save();

    res.status(201).json(expense);
  } catch (err) {
    next(err);
  }
};

const deleteExpenseById = async (req, res, next) => {
  try {
    const { eid } = req.params;
    const { userID } = req.params;

    const expense = await Expense.findByIdAndDelete(eid);

    if (!expense) {
      return res.status(400).json({ message: "Unable to find this expense" });
    }

    await User.findByIdAndUpdate({ _id: userID }, { $pull: { expenses: eid } });

    res.status(202).json({ message: `ההוצאה "${expense.title}" נמחקה` });
  } catch (err) {
    next(err);
  }
};

exports.getExpensesByUserID = getExpensesByUserID;
exports.createExpense = createExpense;
exports.deleteExpenseById = deleteExpenseById;
