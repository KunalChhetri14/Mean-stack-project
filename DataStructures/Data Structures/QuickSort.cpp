#include<iostream>
#include<bits/stdc++.h>
#include<algorithm>

using namespace std;

class QuickSortClass{

    int Partition(int low,int high,int arr[]){
        int pivot=arr[low];

        while(low>high){
            int i=low+1;
            int j=high;
            int pivot=arr[low];
            while(arr[i]<=pivot){
                swap(arr[i],arr[j]);          
                i++;
            }

            while(arr[j]>pivot){
                j--;
            }
            if(i<j){
                swap(arr[i],arr[j]);
            }      
    }

    swap(arr[j],arr[low]);
    return j;
    }
};