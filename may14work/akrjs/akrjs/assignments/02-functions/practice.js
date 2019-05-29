// (example) Write a function that accepts two number arguments and adds them
// together.
var add = function (a,b) 
	{
		var s=a+b;
		console.log(s)
};
add(1,6)

// Create a function that takes in a cost and a quantity and outputs the total
// pre-tax cost for that quantity of items at the given price. For example
//
//     var preTaxTotal = totalCost(5, 5.99); // 5 items at 5.99
//     //=> 29.950000000000003
var totalCost = function (c,q)
	 {
	 	var c;
	 	var q;
	 	var pretax=c*q;
	 	console.log(pretax)

};
totalCost(5,5.99)


// Write a function that takes a rank and a suit as input, and returns a string
// representation of a card. For example, it should behave as follows
//
//     cardString("ace", "spades");
//     //=> ace of spades
//
//     cardString("queen", "hearts");
//     //=> queen of hearts
var cardString = function (rank,suit)
	 {
	 	var rank;
	 	var suit;
	 	console.log(rank+" "+"of"+" "+suit)
};
cardString("ace","spades")


// Write a function called `openTag` that accepts a tag name and returns an
// opening HTML tag with that tag name. For example,
//
//     openTag("p");
//     //=> <p>
//
//     openTag("div");
//     //=> <div>
var openTag = function (t)
 {
 	var t="div";
 	var a=">";
 	var b="<"
 	if(t.indexOf(a)==-1 && (t.lastIndexOf(b)==-1))
 	{
 		var r=b+t+a

 	}
 	console.log(r)
};
openTag()
var openTag=function(a)
{
	console.log("<"+a+">");
}
openTag("p")

// Similarly, write a function called `closingTag` that returns the closing HTML tag
// with that name.
//
//     closeTag("p");
//     //=> </p>
//
//     closeTag("div");
//     //=> </div>
var closeTag = function (a) 
	{
		var a="div";
		console.log("<"+"/"+a+">")
};
closeTag()

// Write a function called `toTagString` that accepts two inputs: a tag name,
// and the string content, and returns the content tagged with the specified
// string.  For example:
//
//     toTagString("li", "list item 1");
//     //=> <li>list item 1</li>
//
//     // the 'em' tag is for 'emphasis'
//     toTagString("em", "this is important stuff");
//     //=> <em>this is important stuff</em>
//
// Although I won't be testing for this, your code should re-use the functions that
// you created in the previous section.
var toTagString = function (t,s)
	 {
	 	var t="p";
	 	var s="welcome to javascript"
	 	console.log("<"+t+">"+s+"<"+"/"+t+">")

	 };
	 toTagString()
