#include<iostream>
#include<bits/stdc++.h>


using namespace std;

void NoOfOccurences(int arr[]){
    cout<<"\n Address in main :  "<<arr;
}

int main(){
    int arr1[]={1,1,3,3,5,5,5,5,5,9,9,11};
    cout<<"Address in main :  "<<arr1;
    NoOfOccurences(arr1);
}