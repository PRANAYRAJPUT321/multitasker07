#include<iostream>
using namespace std;
class Queue
{
    public :
    int queue[100];
    int front;
    int back;
    int size;
    int capacity;
    
    Queue()
    {
        front = -1;
        back = -1;
        size=0;
        capacity=100;
    }
    void enqueue(int val)
    {
     if (size == capacity)
     {
         cout<<"Queue is full"<<endl;
         return;
     }
     if(front == -1)
     {
         back=0;
         front=0;
         queue[0]=val;
     }
     else
     {
         back++;
         queue[back]=val;
     }
     size++;
    }
    int deqeue()
    {
        if(size == 0)
        {
            cout<<"Queue is Empty"<<endl;
            return -1;
        }
        int frontElement=queue[front];
        for(int i=front; i<back; i++)
        {
            queue[i]=queue[i+1];
        }
        size--;
        back--;
        return frontElement;
    }
    void printQueue()
    {
        for(int i=front; i<=back; i++)
        {
          cout<<queue[i]<<" ";  
        }
    }
};
int main()
{
    Queue q;
    q.enqueue(2);
    q.enqueue(4);
    q.enqueue(8) ;
    q.enqueue(12);
    q.printQueue();
    return 0;
}
