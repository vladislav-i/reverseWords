//javascript

$(document).ready(function(){
	$("button").click(function(){
		var str=$("#words").val();
		
		var stack = new Stack();
		str= str.split("");
		for (var i in str) {
    		stack.push(str[i]);
		}
		for(str=""; !stack.isEmpty(); str+=stack.pop());
		//add to div tag
		$("div").append(str+" ");
		
	});
	
});


function Stack () {
    var head = null; //set to null to know that it is empty
    //push takes one parameter and returns one parameter
    this.push = function(obj) {
        //brings in an object, create an object locally called node
        var node = {}; //pointed to data storage
        node.data = obj; // obj is a data of node
        node.next = head;
        head = node; //inserted node onto my stack
    };
    
    this.pop = function() {
        var temp = head; //holds value of previous head (nodes)
        head = temp.next;
        return temp.data;
    };
    this.isEmpty = function () {
        return head === null; //if head is null means its empty (return true)
    };
}

