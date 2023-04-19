class Base{
    constructor(n)
    {
        console.log("Inside Base ",n*n)
    }
}
class Derived extends Base
{
    constructor(n)
    {
        super(n)
        console.log("Inside Derived ",n)
    }    
}
let  dObj = new Derived(2);

