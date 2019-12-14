#include<iostream>
#include<unordered_map>
using namespace std;

void findPairs(int arr[],int arrLength,int sum){
    unordered_map<int,int> PairMap;
    int diff=0;
    for(int i=0;i<arrLength;i++){
        PairMap[arr[i]]=0;
    }

    for(int i=0;i<arrLength;i++){
        diff=sum-arr[i];
        if(PairMap.find(diff)!=PairMap.end()){
            cout<<"\n Pair is "<<arr[i]<< " "<<diff;
        }
    }
}

int main(){
    int arr[]={1,2,3,4,5,7};
    int l=sizeof(arr)/sizeof(int);
    findPairs(arr,6,6);
    
}