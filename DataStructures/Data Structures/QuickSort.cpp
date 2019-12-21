#include<iostream>
#include<bits/stdc++.h>
#include<algorithm>

using namespace std;

class QuickSortClass{

    public:
    void QuickSort(int low,int high,int arr[]){
        cout<<"Acessibnle";
        while(low<high){
            cout<<"sdlkfjl";
            int k=Partition(low,high,arr);
            cout<<"\n THe partition is : "<<k;
            QuickSort(low,k-1,arr);
            QuickSort(k+1,high,arr);
        }
    }

    int Partition(int low,int high,int arr[]){
        int pivot=arr[low];
        int key;
        int i=low+1;
            int j=high;

        cout<<"inside partition";
        cout<<"\n The low and high value is : "<<low<< " : "<<high;
        while(i<j){
            cout<<"Inside while";
            cout<<"\n I and j value is : "<<i <<"  "<<j<<"\n";
            while(arr[i]<=pivot){
                cout<<"CHecking if bigger than pivot";
                if(i>=high){
                    break;
                }         
                i++;
                cout<<"\n after increment";
            }

            while(arr[j]>pivot){
                cout<<"CHecking if smaller than pivot";
                if(j<=low){
                    break;
                }
                j--;
                
            }
            if(i<j){
                cout<<"\nSwapped \n";
                swap(arr[i],arr[j]);
            }
                 
    }
    cout<<"\n OUtside sldkjf \n";
    swap(arr[j],arr[low]);
    cout<<"\n THe key return is "<<j;
    return j;
    }
};

int main(){
    QuickSortClass qs;
    int arr[]={4,2,6,2};
    int size=sizeof(arr)/sizeof(int);
    cout<<"The size is "<<size;
    qs.QuickSort(0,size-1,arr);
     cout<<"\n The elemenets are: \n";
    for(int i=0;i<size;i++){
       cout<<" "<<arr[i];
    }
}