$("body").ready(function() {
    function abs(num) {
        if (num < 0) { return - num; }
        return num;
    }

    function Account(balance, input, deposit, withdraw) {
        this.els = {
            balance: balance,
            withdraw: withdraw,
            deposit: deposit,
            input: input,
        };
        this.balance = 0;
    }
    Account.prototype.deposit = function(self) {
        var amount = parseFloat(self.els.input.val());
        if (amount > 0) {
            self.balance += amount;
            self.els.balance.html("$" + self.balance);
        }
    };

    function Accounts(checking, savings) {
        this.checking = checking;
        this.savings = savings;
    }
    Accounts.prototype.drawRemainder = function(amount, account, self) {
        if (!self) self = this;
        remaining = self[account].balance - amount;
        if (remaining < 0) { return abs(remaining); }
        return 0;
    };
    Accounts.prototype.protectOverdraft = function(amount, account, self) {
        var alternate = "checking";
        if (account === "checking") { alternate = "savings"; }
        var remains1 = this.drawRemainder(amount, account, self), remains2;
        if (remains1 > 0) {
            remains2 = this.drawRemainder(remains1, alternate, self);
            if (remains2 > 0) {
                console.log("Not enough money combined in", account, "and",
                            alternate, "to withdraw", amount);
                return false;
            } else {
                self[account].balance -= amount-remains1;
                self[account].els.balance.html("$" + self[account].balance);
                self[alternate].balance -= remains1;
                self[alternate].els.balance.html("$" + self[alternate].balance);
                console.log(amount-remains1, "withdrawn from", account, "\n",
                            remains1, "withdrawn from", alternate);
            }
        } else {
            console.log(amount, "withdrawn from", account);
            self[account].balance -= amount;
            self[account].els.balance.html("$" + self[account].balance);
        }
    };
    Accounts.prototype.withdraw = function(account, self) {
        var amount = parseFloat(self[account].els.input.val());
        if (amount < 0) { 
            console.log("Must withdraw a positive number");
            return false;
        }
        this.protectOverdraft(amount, account, self);
    };
    var inputs = $(".account input[placeholder=\"enter an amount\"]");
    var deposits = $(".account input[value=Deposit]");
    var withdraws = $(".account input[value=Withdraw]");
    var balances = $("div .balance");
    var checking = new Account(balances.eq(0), inputs.eq(0),
                               deposits.eq(0), withdraws.eq(0));
    var savings = new Account(balances.eq(1), inputs.eq(1),
                              deposits.eq(1), withdraws.eq(1));
    var accts = new Accounts(checking, savings);
    var acctNames = ["checking", "savings"];
    var name, i;
    accts.checking.els.deposit.on("click", function() {
        accts.checking.deposit(accts.checking);
    });
    accts.savings.els.deposit.on("click", function() {
        accts.savings.deposit(accts.savings);
    });
    accts.checking.els.withdraw.on("click", function() {
        accts.withdraw("checking", accts);
    });
    accts.savings.els.withdraw.on("click", function() {
        accts.withdraw("savings", accts);
    });
});
