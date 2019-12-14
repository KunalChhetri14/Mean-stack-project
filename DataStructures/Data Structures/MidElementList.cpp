#include<iostream>
  
using namespace std; 
struct node{
    int data;
    struct node *next;
};

int k=0,i=1;

class MidLinkedList{
    private:
        node *head,*current;

    public:
     MidLinkedList(){
        head=NULL;
        current=NULL;
    }


     void addNode(int n){
        //  cout<<"demo";
         node *temp=(struct node*)malloc(sizeof(struct node));
         temp->data=n;
         temp->next=NULL;
         if(head==NULL){
             head=temp;
            
         }
        
        else
        {
           current=head;
           while(current->next!=NULL){
              // cout<<"the inserted element is "<<temp->data;
               current=current->next;
           } 
           current->next=temp;

        }
        
    }

    void display(){
        current=head;
        while(current!=NULL){
            cout<<"  " << current->data;
            current=current->next;
        }

    }


     void findMidElement(){
         cout<<"cooolsdlfkjsdlkjflksdjf";
            // int total_element=findMid(head);
    }
    // int findMid(struct node *top){
    //     if(top==NULL){
    //         return 0;
    //     }
    //     if(top!=NULL){
    //         k=k+1;
    //         k=k+findMid(top->next);
    //         cout<<"\n k value is "<<k;
    //         i=i+1;

    //     }

    //     if(k/2==i){
    //         cout<<"The middle element no is"<<i;
    //         cout<<"\n Middle element is "<<top->data;
    //     }
    //     return k;
    // }
};


int main(){
    MidLinkedList mid;
    mid.addNode(24);
    mid.addNode(2);
    mid.addNode(232);
    mid.addNode(1);
    mid.addNode(52);
    mid.addNode(34);
    mid.addNode(69);
    mid.display();
    //mid.findMidElement();
}