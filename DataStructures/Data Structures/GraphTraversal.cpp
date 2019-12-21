#include<iostream>
#include <bits/stdc++.h> 

using namespace std;

 vector<vector<int> > vect{ { 1, 1, 1 }, 
                               { 1, 1, 0 }, 
                               { 0, 1, 1 } };

int path=1; 
void findPath(int down,int right){
    bool match=false;
    if(down==2 and right==2){
        cout<<"Path reaced " <<path;
        return;
    }
    else if(down==3 ||right==3){
        cout<<"\n Reached end"<< " down is "<<down<<" and right is "<<right;
        return;
    }
    else{
        if(vect[down][right+1]==1){
            
             cout<<"\n Inside right";
         
            path=path+1;
            cout<<"\nRIght "<<down<<" "<<right+1;
            findPath(down,right+1);
            cout<<"\n Below Right";
        }

        
     if(vect[down+1][right]==1){
         
             cout<<"\n Inside down";
         
            path=path+1;
            cout<<"\n Down"<<down+1<<" "<<right;
            findPath(down+1,right);
        }
    }
       
  

    cout<<"\n The code runs here : "<<down <<" "<<right<<" "<<path;

    
}

int main(){
    findPath(0,0);
}