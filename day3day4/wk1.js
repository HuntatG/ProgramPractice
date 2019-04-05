function replaceAll(str,x,y)
{  if(typeof(str)=="string")
     { var t =str.indexOf(x);
       if t==-1
          console.log("None") ;
       else
           {while(t!==-1) 
               let str1=str.replace(x,y)
               t=str1.indexOf(x)
            return str1

           }
     }
   else  
        console.log("targe is not a string")

}