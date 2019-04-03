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