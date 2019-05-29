// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function (a) 
	{
		var a=4;
		if (a%3==0)
		{
			console.log("true")
		}
		else
		{
			console.log("false")
		}
};
isDivisibleBy3()

// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var celsToFahr = function (c)
	 {
	 	var c=34;
	 	var d=c*9;
	 	var e=d/5;
	 	var f=e+32;
	 	console.log(f)
};
celsToFahr()




var fahrToCels = function (s)
 {
 	var s=76;
 	var n=s-32;
 	var h=n*5;
 	var l=h/9
 	console.log(l)
};
fahrToCels()


// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236


var randUpTo=function(a)
	{

		console.log(Math.floor(Math.random(a)*10)) 
	};
	randUpTo()
	
// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.

var randBetween=function(b,c)
	{
		var b=3;
		var c=8;
		var d=Math.random()*(c-b)+b;
		console.log(Math.floor(d))

	};
	randBetween()

// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
//var isSuit = function () {
//};
/*var isSuit = function (a)  
	{
		var a="bindu"
		if((a=="clubs")||(a=="diamonds")||(a=="hearts")||(a=="spades"))
		{
			console.log("true")
		}
		else
		{
			console.log("false")
		}

};
//isSuit()*/
var isSuit=function(b)
{
	var b="hEaRts"
	var c=["clubs","diamonds","hearts","spades"]
	var temp=0;
	for(var i=0;i<c.length;i++)
	{
		if((b==c[i])||(c[i]==b.toUpperCase())||(c[i]==b.toLowerCase()))
		{
			temp=1;

		}
	}
	if(temp==1)
		console.log("true")
	else
		console.log("false")
	
		
};
isSuit()

// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false

var isRank = function (b)
{
	var b="seven";
	var temp=0;
	var a=["two", "three", "four", "five", "six", "seven", "eight","nine", "ten", "jack", "queen", "king","ace"]
	for(var i=0;i<=a.length;i++)
	{
	 	if(a[i]==b)
	 	{
	 		temp=1;
	 	}
	 }
	 if(temp==1)
	 	console.log("true")
	 else
	 	console.log("false")
};
isRank()

// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
//var isCard = function () {
//};
/*var isSuit=function(a)
	{
		//var b="spades";
		var c=["clubs","diamonds","hearts","spades"];
		var temp=0;
		for(var i=0;i<c.length;i++)
		{
			if((c[i]==a)||(c[i]==a.toUpperCase())||(c[i]==a.toLowerCase()))
				temp=1;
		}
		if(temp==1)
			return true
		else
			return false
	};
	var isRank=function(s)
	{
		var t=0;
		var l=["two","three","four","five","six","seven","eight","nine","ten","jack","king","ace","queen"];
		for(var j=0;j<l.length;j++)
		{
			if(l[j]==s)
				t=7;
		}
		if(t==7)
			return true
		else
			return false
	};*/
	var isCard=function(rank,suit)
	{
		var m=isRank(rank);
		var n=isSuit(suit);
		if(m==true&&n==true)
			console.log("true")
		else
			console.log("false") 
	};
	isCard("bindu","spades")

// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).

var isCapitalized = function (a)
	 {
	 	var a="bindu"
	 	var b=a.split("")
	 	if(b[0]==b[0].toUpperCase())
	 	console.log("true")
	 else
	 	console.log("false")

};
isCapitalized()

// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item

var getHTMLText = function (a)
	 {
	 	var a="<p>this is paragraph</p>"
	 	var b=a.indexOf(">")
	 	var c=a.lastIndexOf("<")
	 	var d=a.slice(b+1,c)
	 	console.log(d)
	 	
};
getHTMLText()

// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.

var isHTMLElement = function (a)
	 {
	 	var a="<p>this is a paragraph</p>"
	 	var b=a.indexOf(">")
	 	var c=a.lastIndexOf("<")
	 	var d=a.slice(0,b+1)
	 	var e=a.slice(c,a.length)
	 	if(d[0]==e[0]&&d[1]!=e[1]&&d[1]==e[2])
	 		console.log("true")
	 	else
	 		console.log("false")


};
isHTMLElement()