#include<iostream>
#include <bits/stdc++.h> 
#include<string.h>
  
using namespace std; 
int k=0;
void permuation(string str,int no,int last){
  k=k+1;
  // cout<<"\n kllkjdgkj"<<str << " no is "<<no << " and last is "<<last;
  // cout<<"\n cool \n";
  if(no==last){
    // cout<<"\n Inside \n";
    cout<<"\n"<<str<<" no is "<<no<<" and last is "<<last;
  }
  else{
    
    //cout<<"\n Else block \n";
    for(int i=no;i<=last;i++){
      
        cout<<"\n "<<str.substr(0,no+1)<<" i is "<<i<<" and no is "<<no;
      
        
        swap(str[i],str[no]);
        permuation(str,no+1,last);
        //swap(str[i],str[no]);


        // str[i]=str[i]+str[no];
        // str[no]=str[i]-str[no];
        // str[i]=str[i]-str[no];

    }
  }
  
}

int main(){
  string st="ABC";
  permuation(st,0,st.size()-1);
  cout<<"\n k value is "<<k;
}