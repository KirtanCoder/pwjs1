// So i am creating a bank program using c language 

#include<stdio.h>

int withdrawmoney(int money);
int deposit(int deposit);



int main() {
int money=0;
int addmon;
int n;

printf(".......Welcome to uco bank......\n");
printf("......select option....\n");
printf("1.Withdraw Money.\n");
printf("2.Deposit Money\n");
printf("3.Balance\n");
printf("4.Exit");
scanf("%d",&n);

if(n==1) {
    int amount;
    printf("Enter amount ........\n");
    scanf("%d",&amount);
    money=money-amount;
    printf("Your Current Balance is %d",money);
}
if(n==2) {
    int amount;
    printf("Enter amount to add.....\n");
    scanf("%d",&amount);

    money = money+amount;
    printf("Your current balance is %d",money);
}

if(n==3) {
    printf("Your current balance is %d",money);
}

return 0;
}