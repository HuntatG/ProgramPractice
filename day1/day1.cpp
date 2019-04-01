
int function(int x[], int y)
{    
	int j,s=0,n=sizeof(x)/sizeof(int);
	for (j = 0; j < n; j++)
		s += y*x[j];
	return s;
}