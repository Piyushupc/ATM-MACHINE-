
class ATMMachine:
    def __init__(self, initial_balance=0):
        self.balance = initial_balance
    
    def check_balance(self):
        return f"Your current balance is ${self.balance:.2f}"
    
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return f"${amount:.2f} deposited successfully. {self.check_balance()}"
        else:
            return "Invalid deposit amount. Please try again."
    
    def withdraw(self, amount):
        if amount <= 0:
            return "Invalid withdrawal amount. Please try again."
        elif amount > self.balance:
            return "Insufficient funds. Please try again."
        else:
            self.balance -= amount
            return f"${amount:.2f} withdrawn successfully. {self.check_balance()}"
    
def main():
    atm = ATMMachine(100)  # Initial balance is set to $100
    print("Welcome to the ATM Machine!")
    
    while True:
        print("\nPlease choose an option:")
        print("1. Check Balance")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. Exit")
        
        choice = input("Enter your choice: ")
        
        if choice == '1':
            print(atm.check_balance())
        elif choice == '2':
            amount = float(input("Enter the amount to deposit: "))
            print(atm.deposit(amount))
        elif choice == '3':
            amount = float(input("Enter the amount to withdraw: "))
            print(atm.withdraw(amount))
        elif choice == '4':
            print("Thank you for using the ATM. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
