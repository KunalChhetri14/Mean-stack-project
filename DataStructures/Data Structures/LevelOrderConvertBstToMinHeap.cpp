#include<iostream>
#include<algorithm>

#include<bits/stdc++.h>

using namespace std;

struct node {
    struct node *left;
    int data;
    struct node *right;
};

class BST{
    public:
        node *root,*current;
    queue <node*> traversed;
    public:
        BST(){
        root=NULL;
        current=NULL;
    }

    void addElement(int ele){
        node *temp=(struct node*)malloc(sizeof(struct node));
        temp->data=ele;
        temp->left=NULL;
        temp->right=NULL;
        if(root==NULL){
            root=temp;
        }

        else{
            cout<<"\n Inside root : \n";
            current=root;
            while(current!=NULL){
                cout<<"\n current no null :"<<current->data<<"\n";
                if(ele>current->data){
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


    void Inorder(node *present){
        // cout<<"Inoder";
        if(present==NULL){
            // cout<<"Null root";
            return;
        }

        else{
            Inorder(present->left);
            cout<<"  "<<present->data;
            Inorder(present->right);
        }

    }

    void LevelOrder(){
        struct node *temp=root;
        cout<<" \n Level order traversal is : \n";
        traversed.push(temp);
        while(!traversed.empty()){
            current=traversed.front();
            traversed.pop();
            cout<<" "<<current->data;
            if(current->left!=NULL){
                traversed.push(current->left);
            }
            if(current->right!=NULL){
                traversed.push(current->right);
            }
        }
    }

};


int main(){
    BST bs;
    bs.addElement(50);
    bs.addElement(65);
    bs.addElement(23);
    bs.addElement(67);
    bs.addElement(13);
    bs.addElement(23);
    bs.addElement(15);
    bs.addElement(11);
    bs.Inorder(bs.root);
    bs.LevelOrder();

}



