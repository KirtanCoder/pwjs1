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


switch(n) {
