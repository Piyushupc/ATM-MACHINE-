class ATMMachine {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    checkBalance() {
        return `Your current balance is $${this.balance.toFixed(2)}`;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `${amount.toFixed(2)} deposited successfully. ${this.checkBalance()}`;
        } else {
            return "Invalid deposit amount. Please try again.";
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            return "Invalid withdrawal amount. Please try again.";
        } else if (amount > this.balance) {
            return "Insufficient funds. Please try again.";
        } else {
            this.balance -= amount;
            return `${amount.toFixed(2)} withdrawn successfully. ${this.checkBalance()}`;
        }
    }
}

// Initialize ATM Machine with $100 balance
const atm = new ATMMachine(100);

function updateMessage(message) {
    document.getElementById("message").innerText = message;
}

function checkBalance() {
    updateMessage(atm.checkBalance());
}

function depositMoney() {
    showModal("Enter the amount to deposit:", "deposit");
}

function withdrawMoney() {
    showModal("Enter the amount to withdraw:", "withdraw");
}

function exitATM() {
    updateMessage("Thank you for using the ATM. Goodbye!");
    document.getElementById("atm-actions").style.display = "none";
}

function showModal(message, action) {
    document.getElementById("modal-message").innerText = message;
    document.getElementById("modal-action").setAttribute("data-action", action);
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function performTransaction() {
    const amount = parseFloat(document.getElementById("amount").value);
    const action = document.getElementById("modal-action").getAttribute("data-action");
    let result;

    if (action === "deposit") {
        result = atm.deposit(amount);
    } else if (action === "withdraw") {
        result = atm.withdraw(amount);
    }

    closeModal();
    updateMessage(result);
}
