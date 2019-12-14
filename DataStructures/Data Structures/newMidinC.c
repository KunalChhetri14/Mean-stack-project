#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

void addNode(int n);
void display();
void findMidElement();


struct node{
    int data;
    struct node *next;
};struct node *head=NULL,*current=NULL;

int findMid(struct node *top);
int k=0,i=-1;


        

    
    //  MidLinkedList(){
    //     head=NULL;
    //     current=NULL;
    // }


     void addNode(int n){
        //  cout<<"demo";
         struct node *temp=(struct node*)malloc(sizeof(struct node));
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
            printf("   %d",current->data);
            current=current->next;
        }

    }


     void findMidElement(){
        // cout<<"cooolsdlfkjsdlkjflksdjf";
            int total_element=findMid(head);
    }
    int findMid(struct node *top){
        if(top==NULL){
            return k;
        }
        if(top!=NULL){
            k=k+1;
            k=findMid(top->next);
            // cout<<"\n k value is "<<k;
            i=i+1;
            // cout<<"\n i value is "<<i;
            

        }

        if(k/2==i){
            if(k%2!=0){
                //printf("\n The middle index no is %d",i);
                printf("\n Middle element is %d",top->data);
            }
            else{
                printf("\n The middle element no is %d  and %d",top->next->data,top->data);
            }
            
        }
        return k;
    }



int main(){
    
    addNode(24);
    addNode(2);
    addNode(232);
    addNode(1);
    addNode(52);
    addNode(34);
    addNode(69);
    addNode(45);
    addNode(623);
    //addNode(23);
    display();
    
    findMidElement();
}