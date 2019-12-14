//2,4,10,10,10,18,20
//which 10?
//2,3 or 4   
#include<iostream>
#include<bits/stdc++.h>
#include<algorithm>
using namespace std;


int BinarySearch(vector<int> elements ,int len,int n){
    int mid;
    int low=0;
    int high=len-1;
    while(low<=high){
        mid=(low+high)/2;
        int result=-1;
        if(elements[mid]==n){
            result=mid;
            high=mid-1;
        }
        else if( elements[mid]>n){
            high=mid-1;
        }
        else{
            low=low+1;
        }
    }
}


bool cmp(int a,int b){
    return a>b;
}
int main(){
    vector<int> v1={10,2,4,10,10,20,18};
    sort(v1.begin(),v1.end());
    
    int index=BinarySearch(v1,v1.size(),10);
    cout<<"10 is found at index "<<index;
    int ind=binary_search(v1.begin(),v1.end(),30);
    cout<<" \n using normal new a binarysearch value is "<<ind;

    auto itr=find(v1.begin(),v1.end(),10);
    cout<<" found index is"<< distance(v1.begin(),itr);



}