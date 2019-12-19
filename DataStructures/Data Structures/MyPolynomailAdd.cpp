#include<iostream>
#include<bits/stdc++.h>

using namespace std;

struct node{
    int coeff;
    int pow;
    struct node *next;
};

class Polynomail{
    private:
        node *head1,*head2;
    public:
        Polynomail(){
            head1=NULL;
            head2=NULL;
        }

    struct node* createNode(int coeff,int pow){
        struct node *temp=(struct node*)malloc(sizeof(struct node));
        temp->coeff=coeff;
        temp->pow=pow;
        temp->next=NULL;

        return temp;
    }
    public:
        void insertVal(int coeff,int pow,int position){
            struct node *head;
            if(position==1){
                head=head1;
            }
            else{
                head=head2;
            }
            if(head==NULL){
                 head=createNode(coeff,pow);
                if(position==1){
                    head1=head;
                }
                else{
                    head2=head;
                }
                cout<<"\n inside first head null for postion"<<position;
               
            }
            else{
                 struct node *current=head;
                while(current->next!=NULL){
                    current=current->next;
                }
                current->next=createNode(coeff,pow);
            }
            
        }


        void showValue(int postion){
            
           struct node *head;
            if(postion==1){
                head=head1;
            }
            else{
                head=head2;
            }
            struct node *current=head;
            if(current==NULL){
                cout<<"No element";
            }
            while(current!=NULL){
                cout<<current->coeff<<"x"<<current->pow;
                if(current->next!=NULL){
                    cout<<"+";
                }
                current=current->next;
            }
        }

        void polySum(){
            struct node *current1,*current2;
            current1=head1;
            current2=head2;
            int i,j;
            
            cout<<"\n The sum is : ";
            while(current1!=NULL && current2!=NULL){
                i=current1->pow;
                j=current2->pow;
                if(i==j){
                    cout<<current1->coeff+current2->coeff<<"x"
                    <<current2->pow;
                    if(current1->next!=NULL || current2->next!=NULL){
                        cout<<"+";
                    }
                    current1=current1->next;
                    current2=current2->next;
                }
                else if((i>j)){
                    cout<<current1->coeff<<"x"<<current1->pow;
                    // cout<<" 1>2 ";
                    if(current1->next!=NULL || current2->next!=NULL){
                        cout<<"+";
                    }
                    current1=current1->next;
                }

                else{
                    cout<<current2->coeff<<"x"<<current2->pow;
                    // cout<<" 1<2 ";
                    if(current1->next!=NULL || current2->next!=NULL){
                        cout<<"+";
                    }
                    current2=current2->next;
                }
            }

            while(current1!=NULL){
                cout<<current1->coeff<<"x"<<current1->pow;
                if(current1->next!=NULL){
                        cout<<"+";
                    }
                current1=current1->next;
            }

             while(current2!=NULL){
                cout<<current2->coeff<<"x"<<current2->pow;
                if(current2->next!=NULL){
                        cout<<"+";
                    }
                current2=current2->next;
            }
        }
};


int main(){
    Polynomail poly;
    poly.insertVal(5,2,1);
    poly.insertVal(4,1,1);
    poly.insertVal(2,0,1);

    poly.insertVal(5,1,2);
    poly.insertVal(5,0,2);

    cout<<"\n First poly is : ";
    poly.showValue(1);

    cout<<"\n Second poly is : ";
    poly.showValue(2);

    poly.polySum();
}