#include<stdio.h>
int main(){
    int n, a=0 ,b=1,next;
    printf("enter number:");
    scanf("%d",&n);

    for(int i=1; i<=n; ++i){
        printf("%d", a);
        next = a+b;
        a = b;
        b = next;
    }
    printf("\n");
    return 0;
}