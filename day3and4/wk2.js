
function Graphics(name,describe){
	this.name="graphics";
	function describe(x){
	console.log("x")
    }
	this.describe(name);
}

function Rectangle(name,describe,width,length,area){
	Graphics.call(this,name,describe)
	this.name=rectangle;
	this.area=width*length;
	function describe(x,y){
	console.log("x")
	console.log("y")
    }
	this.describe(name,area);
}
function Square(name,describe,width,length,area){
    Rectangle.call(this,name,describe,width,length,area)
    this.name=square;
    this.area=length*length;
    function diagonal(a){
    	Math.sqrt(a)
    }
    function describe(x,y,z){
    	console.log(x);
    	console.log(y);
    	console.log(z);
    }
    diagonal(area);
    this.describe(name,area,diagonal)
}
