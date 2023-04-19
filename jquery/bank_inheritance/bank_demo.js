class bank{

    balance(n=0)
    {
        console.log("Total Amount",n)
    }
   
}
class Derived extends bank
{
    deposite(n)
    {
        // super(n)
       this.n = this.n + n;
       console.log(this.n)
    }
    withdraw(n)
    {   
        // super(n)
       this.n=this.n - n;
       console.log(this.n)
    }
}

let amt = new Derived(1000);
amt.withdraw(200)
amt.deposite(100)
console.log(amt.balance())