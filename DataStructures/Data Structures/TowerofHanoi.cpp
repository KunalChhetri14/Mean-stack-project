#include<iostream>

using namespace std;

class TowerOfHanoi{
    public:
        void Towers(int n,char src,char aux,char dest){
            if(n==1){
                cout<<"\n Disk is moved from : "<<src<<" to "<<dest;
                return;
            }
            Towers(n-1,src,dest,aux);
            Towers(1,src,aux,dest);
            Towers(n-1,aux,src,dest);
        }   
};

int main(){
    TowerOfHanoi tow;
    tow.Towers(4,'S','A','D');
}

// int main(){
//     TowerOfHanoi tow;
//     //tow.Towers(3,'S','A','D');
   
// }