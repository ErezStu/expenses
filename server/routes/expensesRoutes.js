const express = require("express");
const router = express.Router();

const { verifyToken } = require("../helpers/verifyToken.js");
const ExpensesController = require("../controllers/expensesControllers.js");

router.get("/:userID", verifyToken, ExpensesController.getExpensesByUserID);
router.post("/:userID", verifyToken, ExpensesController.createExpense);
router.delete(
  "/:eid/:userID",
  verifyToken,
  ExpensesController.deleteExpenseById
);

module.exports = router;
