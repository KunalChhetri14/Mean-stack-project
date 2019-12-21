#include<iostream>
#include<algorithm>
#include <bits/stdc++.h> 

using namespace std;


int main(){
   vector<int> v1{10,1,5,3,11,13};
   int length=v1.size();
   make_heap(v1.begin(),v1.end());
    cout<<"After heapify: \n";
   for(int i=0;i<6;i++){
       cout<<" "<<v1.at(i);
   }

   cout<<"\n The front element is: "<<v1.front();
   cout<<"\n The front element is: "<<v1.front();

   v1.push_back(50);
   cout<<"The highest element is : "<<v1.front()<< "\n"; 

   


}