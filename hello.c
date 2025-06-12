#include<stdio.h>

void even1(int a){
    if(a%2==0)
        printf("%d is even number\n", a);
    else
        printf("%d is odd number\n", a);
}
void isprime(int a){
    int i;
    for(i=2; i<=a/2; i++){
        if(a%i==0){
            printf("%d is not a prime number\n", a);
            return;
        }
    }
    printf("%d is a prime number\n", a);
}
int main()
{
    printf("Hello World\n");
    even1(11);
    return 0;
}