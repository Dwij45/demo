#include<stdio.h>

void even1(int a){
    if(a%2==0)
        printf("%d is even number\n", a);
    else
        printf("%d is odd number\n", a);
}
int main()
{
    printf("Hello World\n");
    even1(11);
    return 0;
}