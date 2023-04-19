#include<iostream>
using namespace std;
class saving
{
    int bal;

    public:
        saving()
        {
            bal = 10000;
        }
        void s_dep(int n)
        {
            bal += n;
        }
        void s_with(int n)
        {
            bal -= n;
        }
        int s_show()
        {
            return bal;
        }
};

class current : public saving
{
    int bal;

    public:
        current()
        {
            bal = 50000;
        }
        void c_dep(int n)
        {
            bal += n;
        }
        void c_with(int n)
        {
            bal -= n;
        }
        int c_show()
        {
            return bal;
        }
};

class bank : public current
{
    public:

    bank()
    {
        cout<<"\t\t Welcome Message....."<<endl;
        cout<<"\t\t-----------------------"<<endl;
    }

    ~bank()
    {
        cout<<"\t\t---------------------------"<<endl;
        cout<<"\t\t\t Thank you...... "<<endl;
    }

};
int main()
{
    bank b;
    int ch,a,amt;

    cout<<"\n1.Saving \n2.Current \n";
    cout<<"Enter Type :";
    cin>>ch;

    cout<<"\n1.Deposite";
    cout<<"\n2.Withdraw";
    cout<<"\n3.Show Balance";
    cout<<"\n0.Exit";

    while(a != 0)
    {
        cout<<"\n\t Enter choice :";
        cin>>a;

        switch(a)
        {
            case 1:
                cout<<"Enter Amount for Deposite :";
                cin>>amt;

                if(ch == 1)
                    b.s_dep(amt);
                else
                    b.c_dep(amt);
            
                break;

             case 2:
                cout<<"Enter Amount for Withdraw :";
                cin>>amt;

                if(ch == 1)
                    b.s_with(amt);
                else
                    b.c_with(amt);
            
                break;

            case 3:
                if(ch == 1)
                    cout<<"Your Saving account balance :"<<b.s_show();
                
                else
                    cout<<"Your Current account balance : "<<b.c_show();

                break;

            case 0:
                break;

            default:
                cout<<"Wrong choice enter....";
                break;
        }
    }

}