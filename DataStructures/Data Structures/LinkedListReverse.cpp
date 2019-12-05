#include<iostream>
  
using namespace std; 
  
// main function - 
// where the execution of program begins 

struct node{
    int data;
    struct node *next;
};


class linkedList{
    private:
        node *head,*current;
    
    public:
        linkedList(){
            head=NULL;
            current=NULL;
        }
    void addNode(int element){
        node *temp=new node;
        temp->data=element;
        temp->next=NULL;
        if(head==NULL){
            head=temp;
            cout<<"Head data is "<<head->data;
            cout<<"temp data is "<<temp->data;
        }
        else{
            current=head;
            while(current->next!=NULL){
                current=current->next;
            }
            current->next=temp;
            current=current->next;
            
        }
    }

    void display(){
        current=head;
        while(current!=NULL){
            cout<<"the forward ldksjflksdf element is "<<current->data<<"\n";
            current=current->next;
        }
    }
    //dont call display after this function as it will directly print the elements
    void reverseUsingRecursion(){
        rev(head);
    }

    void rev(struct node *temp){
        if(temp!=NULL){
            rev(temp->next);
            cout<<"Reversed Elements is "<<temp->data<<"\n";
        }
    }

    void reverse(){
        cout<<"\n The reversedf \n";
        current=head;
        node *prev=new node;
        node *temp=new node;
        prev->data=current->data;
        prev->next=NULL;
        current=current->next;
        int count=0;
        //head=prev;
        while(current!=NULL){
            // cout<<"The previos vaue is "<<prev->data<<"\n";
            // cout<<"\n The current vaue is "<<current->data<<"\n";
            temp=current->next;
            current->next=prev;
            prev=current;
            
            current=temp;
            
        }
        head=prev;
        
        
    }
};


int main() 
{ 
    // prints hello world 
    cout<<"Hello World cool \n"; 
    linkedList li;
    li.addNode(1);
    li.addNode(2);
    li.addNode(3);
    li.addNode(4);
    li.reverseUsingRecursion();
//    li.reverse();
//    li.display();
}    