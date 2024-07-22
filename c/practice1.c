#include<stdio.h>


int myfun() {
    printf("Hello world\n");


    myotherfun();
}
 
int myotherfun() {
    printf("Hello another world");
}


#include<string.h>
int main() {
//     char str[] = "Hello";
// int i;
//     for(i=0;i<sizeof(str);i++) {
// printf("%c\n",str[i]);
// char str1[]= "Hello";
// char str2[] = "Hello";

// printf("%d",strcmp(str1 ,str2));

myfun();
    

    return 0;
}