const PHONE_PRICE = 99.00;
const TAX = 0.05;
const ACC_PRICE = 9.99;
const SPENDING_THRESHOLD = 1500.00

var bank_balance = 500;
var amount = 0;

function calculateTax() {
  return amount * TAX;
}

function formatPrice() {
  return "$" + amount.toFixed(2);
}

while (amount < bank_balance) {
  amount += PHONE_PRICE;
  while (amount < SPENDING_THRESHOLD) {
    amount += ACC_PRICE;
  }
}

amount += calculateTax();
