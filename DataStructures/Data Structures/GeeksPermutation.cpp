// C++ program to print all  
// permutations with duplicates allowed  
#include <bits/stdc++.h> 
using namespace std; 
  
  
// Function to print permutations of string  
// This function takes three parameters:  
// 1. String  
// 2. Starting index of the string  
// 3. Ending index of the string.  
void permute(string a, int l, int r)  
{  
     cout<<"for l is "<<l<<" "<<"and r is : "<<r<<" "<<a.substr(0,l)<<endl;
    // Base case  
    if (l == r)  
        cout<<"inside l and r equal"<<a<<endl;  
    else
    {  
        // Permutations made  
        for (int i = l; i <= r; i++)  
        {  
            
           
            // Swapping done  
            swap(a[l], a[i]);  
  
            // Recursion called  
            permute(a, l+1, r);  
  
            //backtrack  
            // swap(a[l], a[i]);  
        }  
    }  
}  
  
// Driver Code  
int main()  
{  
    string str = "ABC";  
    cout<<"The substring is "<<str.substr(0,1)<<endl;
    int n = str.size();  
    permute(str, 0, n-1);  
    return 0;  
}  
  