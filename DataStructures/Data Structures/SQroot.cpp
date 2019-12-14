#include<iostream>

using namespace std;

int sqrt(int no,int min,int max,int count){
    int guess=(min+max)/2;
    if((guess*guess)==no){
        cout<<"Number found at "<<count;
    }

    else if(guess*guess>no){
        sqrt(no,min,guess,count+1);
    }

    else{
        sqrt(no,min+1,guess,count+1);
    }
}

int main(){
    int x=sqrt(100,1,100,0);
}