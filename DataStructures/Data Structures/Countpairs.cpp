#include<iostream>
#include<algorithm>
#include <bits/stdc++.h> 
using namespace std;

int findPair(vector<int> vec){
    int count=0;
    for(int i=0;i<vec.size();i++){
       cout<< "          "<<vec.at(i);
   }
    for(int i=0;i<vec.size()-1;i++){
        int j=1;
        int diff;
       while(vec.at(i+j)-vec.at(i)<=2){
           cout<<"Cool";
           if(vec.at(i+j)-vec.at(i)==2){
               count+=1;
           }
           j+=1;
           
       }
   }
   return count;
}
int main(){
   vector<int> v1={1,7,5,9,2,12,3};
   sort(v1.begin(),v1.end());
   
   int totalPair=findPair(v1);
    cout<<"The total pair is "<<totalPair;

    

   


}