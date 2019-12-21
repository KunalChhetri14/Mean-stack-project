#include<iostream>
#include<iterator>
using namespace std;

class StringDuplicateCheck{
    public:
    string naiveMethod(string str){
        string::iterator it;
        string::iterator inner;
        cout<<"cool3";
        for(it=str.begin();it<str.end();it++){
            for(inner=it+1;inner<str.end();inner++){
                // cout<<"\n "<<*it<<"  ,  "<<*inner;
                if(*it==*inner){
                    cout<<"\n The element matched is : "<<*it;
                }
            }
        }
        
        
    }
};

int main(){
    StringDuplicateCheck st;
    st.naiveMethod("Kunul");
}