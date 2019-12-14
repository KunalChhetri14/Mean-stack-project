#include<iostream>
  
using namespace std; 
 
struct node {
    struct node *left;
    int data;
    struct node *right;
};

class BST{
    public:
         node *root,*current;
    public:
        BST(){
            root=NULL;
            current=NULL;
        }

        void Inorder(){
            cout<< "\nINORDER : ";
            InorderImp(root);
        }

        void preOrder(){
            cout<< "\nPREORDER : ";
            preOrderImpl(root);
        }

        void postOrder(){
            cout<< "\nPOST ORDER : ";
            postOrderImpl(root);
        }

        void postOrderImpl(struct node *travel){
            if(travel==NULL){

            }
            else{
                postOrderImpl(travel->left);
                postOrderImpl(travel->right);
                cout<<"\n"<<travel->data;
            }
        }
        void preOrderImpl(struct node *travel){
            if(travel==NULL){

            }
            else{
                cout<<"\n"<<travel->data;
                preOrderImpl(travel->left);
                preOrderImpl(travel->right);
            }
        }
        void InorderImp(struct node *travel){
            
            if(travel==NULL){
                
            }
            else{
                InorderImp(travel->left);
                cout<< "\n The data is"<<travel->data;
                InorderImp(travel->right);

            }
        }

        string deleteLeafElement(int value){
            current=root;
            node *prev=new node;
            prev->left=NULL;
            prev->right=NULL;
            while(current!=NULL){
                if(current->data==value){
                    if(value>prev->data){
                        prev->right=NULL;
                        current=NULL;
                        cout<< "FOUND";
                        return "found";
                    }
                    else
                    {
                        prev->left=NULL;
                        current=NULL;
                        cout<< "FOUND";
                        return "found";
                    }
                }

                else{
                    if(value>current->data){
                        prev=current;
                        current=current->right;
                    }
                    else{
                        prev=current;
                        current=current->left;
                    }

                    }
                }
            }
        

        void addElement(int value){
             node *temp=new node;
             temp->data=value;
             temp->left=NULL;
             temp->right=NULL;
            if(root==NULL){
                root=temp;
                
            }
            else{
                current=root;
               
                while(current){
                    if(value>current->data){
                        if(current->right==NULL){
                            current->right=temp;
                            
                            break;
                        }
                        else{
                            
                            current=current->right;
                            
                        }
                    }

                    else{
                        if(current->left==NULL){
                            current->left=temp;
                            
                            break;
                        }
                        else{
                            
                            current=current->left;
                        }
                    }

                }

            }
        }


};

int main(){
    BST b;
    b.addElement(15);
    b.addElement(10);
    b.addElement(20);
    b.addElement(8);
    b.addElement(12);
    b.addElement(17);
    b.addElement(25);
    b.Inorder();
    b.preOrder();
    b.postOrder();
    string s="Not removed";
    s=b.deleteLeafElement(25);
    cout<< "status is "<<s;
    b.postOrder();
    
    

    return 0;
}