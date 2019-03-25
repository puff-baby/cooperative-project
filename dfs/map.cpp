#include <iostream>
#include <string.h>
using namespace std;

#define MAX 10000
int ori[8][2]={(1,0),(0,-1),(-1,0),(0,1),(1,-1),(-1,-1),(-1,1),(1,1)};
int book[MAX][MAX],num[MAX][3],end_x,end_y,len,max_sum;

void dfs(int start_x,int start_y,int lens,int sum)
{
	int x,y; 
	if(start_x==end_x&&start_y==end_y&&lens==len)
	{
		if(sum>max_sum)
			max_sum=sum;
		return;	
	}
	

	for(int i=0;i<8;i++)
	{
		x=start_x+ori[i][0];
		y=start_y+ori[i][1];
		if(x<0||y<0||x>5||y>5)
			continue;
		if(book[x][y]==0)
		{
			book[x][y]=1;
			if(i>3)
				sum++;//计算经过了多少斜线 
			dfs(x,y,lens+1,sum);
			book[x][y]=0;
		}
	}
	return;
}

int main()
{
	cin>>end_x>>end_y>>len;
//	for(int i=0;i<T;i++)
//		cin>>num[i][0]>>num[i][1]>>num[i][2];
//	for(int i=0;i<T;i++)
	book[0][0]=1;
	dfs(0,0,0,0);
	cout<<"包含的斜线数量为 "<<max_sum<<endl;
	return 0;
}
