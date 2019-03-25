#include <iostream>
using namespace std;
#define MAX 10
int map_x,map_y,end_x,end_y,mins=9999;
int real_map[MAX][MAX],book[MAX][MAX];
int next[4][2]={{1,0},{0,-1},{-1,0},{0,1}};

void dfs(int start_x,int start_y,int step)
{
	int x,y;//֮ǰһֱ�õĲ����start_x��start_y�������޷������ó�������п�������Ϊ�βε���Ч�ڵ����⣬���ͷ�,��step��û�г����⣿���� 
	if(start_x==end_x&&start_y==end_y)
	{
		if(step<mins)
			mins=step;
		return;
	}
	for(int i=0;i<4;i++)
	{
		x=start_x+next[i][0];
		y=start_y+next[i][1];
		if(x<0||y<0||x>map_x-1||y>map_y-1)
			continue;
		if(real_map[x][y]==0&&book[x][y]==0)
		{
			book[x][y]=1;
			dfs(x,y,step+1);
			book[x][y]=0;
		}
	}
	return;
}

int main()
{
	int x,y;
	cin>>map_x>>map_y>>x>>y>>end_x>>end_y;
	cout<<"�����ͼ"<<endl; 
	for(int i=0;i<map_x;i++)
		for(int j=0;j<map_y;j++)
			cin>>real_map[i][j];
	book[x][y]=1;
	dfs(x,y,0);
	cout<<"min is "<<mins<<endl;		
	return 0;
}
