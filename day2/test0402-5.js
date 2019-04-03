function judge(x)
{    
	var a=[1];
	if(x.constructor === Array){   
		let s=0;
    	for(var i in x){
    		s+=x[i];
    	}
    	return s;
    }
    else if(typeof(x)=='string'){
       	return "this is a string";
   	}else if(typeof(x)=='function'){
   	    return x;	
   	}
}