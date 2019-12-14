#include<iostream>
#include <bits/stdc++.h> 
using namespace std;
vector<int> arr;
bool firstLast=true;
void MaxHeap(int element){
    if(element==0){
        
    }

    else{
        int parent=(element-1)/2;
        if(arr[element]>arr[parent]){
            cout<<"\n swapping two elements "<<arr[element] << " and "<<arr[parent];
            swap(arr[element],arr[parent]);
            MaxHeap(parent);
        }
    }

    
}

void Delete(int i,int length){
    int l;
    l=length;
    if(i==0){
            cout<<"\n The length is : "<<length;    
            swap(arr[i],arr[length]);
        
        cout<<"\n last element is "<<arr[length];
        l=l-1;
        
    }
    cout<<" sdjfsdlj"<<length;
    int element;
    
        
    
    int left=i*2+1;
    
    int right=i*2+2;
    cout<<"\n LEft and right index is "<<left<<" "<<right;
    if((left<l) && (right<l)){
        if(arr[left]>arr[right]){
            if(arr[left]>arr[i]){
                swap(arr[left],arr[i]);
                cout<<"\n Left and top swapped \n";
                Delete(left,l);
            }
        }
        else{
            if(arr[right]>arr[i]){
                swap(arr[i],arr[right]);
                cout<<"\n Right and top swapped \n";
                Delete(right,l);
            }
        }
    }
    else if(left<l){
        swap(arr[i],arr[left]);
        cout<<"\n Only left node was there \n ";
    }
}


int main(){
    
    int k=arr.size();
    int len;
    cout<<"\nThe size is "<<k;
    cout<<"\nEnter the size of the array \n";
    cin>>len;
    int ele;
    for(int i=0;i<len;i++){
        cout<<"\nEnter the elements: \n";
        cin>>ele;
        arr.push_back(ele);
    }

    cout<<"\n Length is "<<len;
    for(int i=0;i<len;i++){
        cout<<"Inside call";
        //cout<<" "<<arr.at(i);
        MaxHeap(i);
        
        
    }
    cout<<"\n The elements in array are fsdfsfddf:  ";
    for(int i=0;i<len;i++){
        cout<<"  Cool   "<<arr.at(i);
    }
    for(int i=0;i<len;i++){
        firstLast=true;
        cout<<"\n Passed index : "<<len-i-1;
        Delete(0,len-i-1);
        if(i==2){
            cout<< "\n  Coo  "<<arr[len-1]<<" "<<arr[len-2]<<" "<< arr[len-3] << " \n";
        }
        cout<< " after sorting "<< arr[len-i-1];
    }

    cout<<"\n Sorted elements are :  ";
    for(int i=0;i<len;i++){
        cout<<" "<<arr.at(i);
    }
    
}

