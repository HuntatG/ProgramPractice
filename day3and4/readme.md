# 字符串
写一个函数replaceAll(str, x, y)，其逻辑如下

- 首先判断str是否为字符串，如果不是则输出"target is not a string"
- 如果是字符串则判断str中有没有x,如果没有则输出"None"
- 否则向字符串str中的所有x替换为y
- 至少用两种方法实现这个函数

提示：  
替换str的第一个x可以用replace
```
str.replace(x,y)
```
  
切割字符串可以用str.split
```
    'xxx-xxx-xxx'.split('-')
```
  
把数组拼接为字符串可以使用join

```
["I", "am", "a", "hero"].join(" ")
```


# 面向对象

## 写一个图形类Graphics，具体结构如下
| 属性        | 类型   |  作用  |
| :--------:   | :-----:  | :----:  |
| name     | - |   保存该图形的类型，默认为"图形"     |
| describe        |   函数   |   输出name   |

## 写一个长方形类Rectangle，继承自Graphics，具体结构如下
| 属性        | 类型   |  作用  |
| :--------:   | :-----:  | :----:  |
| width     | - |   宽     |
| length        |   -   |   长   |
| area        |   函数   |   返回长方形的面积   |


同时，长方形类Rectangle重写图形类Graphics的name属性，默认设为"长方形"，
重写describe函数，输出name的同时也输出面积


## 写一个正形类Square，继承自Rectangle，具体结构如下
| 属性        | 类型   |  作用  |
| :--------:   | :-----:  | :----:  |
| length        |   -   |   边长   |
| diagonal        |   函数   |   返回正方形对角线长度   |


同时，Square类也要重写Rectangle对应的属性和函数

提示：
输出可以使用console.log()函数
```
    console.log("test")
```

求根号可以使用Math.sqrt()函数
```
    Math.sqrt(4)
```