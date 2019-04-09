# 计算器
写一个函数calc，功能是可以求出输入的算式的运算结果（带优先级），使用逆波兰算法。

```
	function calc(x){
		return xxx
	}

```

提示：
- 如果对于算法有不懂的可以参考自行参考百度
- 栈的标准实现可以使用如下：
```
//顺序栈的JS实现 这里直接使用了JS内置的Array对象  
function ArrayStack(){  
    var arr = [];  
        //压栈操作  
    this.push = function(element){  
        arr.push(element);  
    }  
        //退栈操作  
    this.pop = function(){  
        return arr.pop();  
    }  
        //获取栈顶元素  
    this.top = function(){  
        return arr[arr.length-1];  
    }  
        //获取栈长  
    this.size = function(){  
        return arr.length;  
    }  
        //清空栈  
    this.clear = function(){  
        arr = [];  
        return true;  
    }  
  
    this.toString = function(){  
        return arr.toString();  
    }  
} 
```
