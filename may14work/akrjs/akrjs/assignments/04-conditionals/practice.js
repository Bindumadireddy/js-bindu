// We'll consider a password's strength to be "strong" if it is at least 10
// characters long. If it's between 7 and 10 characters long, we'll consider it to
// have "medium" strength, and if it's less than 7 characters, we'll say it is a
// "weak" password. Write a function that accepts as input a potential password and
// returns either "weak", "medium" or "strong" depending on its length.
//
//     passwordStrength("hello");
//     //=> weak
//
//     passwordStrength("longerpassword");
//     //=> strong
//
//     passwordStrength("helloone");
//     //=> medium
var strong=function(a)
	{
		var a="bindusri";
		if(a.length>=10)
			console.log("strong")
		else if(7<=a.length<10)
			console.log("medium")
		else if(a.length<=7)
			console.log("weak")
	};
	strong()
// A year is a leap year if it is divisible by 4, unless it is also divisible by
// 100 in which case it is not a leap year unless it is also divisible by
// 400. Phew. Got that? Good. Write a function that accepts a number and outputs
// true if the number is a leap year, false if not.
//
//      isLeapYear(1988);
//      //=> true
//
//      isLeapYear(2001);
//      //=> false
//
//      isLeapYear(1800);
//      //=> false
//
//      isLeapYear(2000);
//      //=> true
//
// It should also throw an error if the input is not a number.
//
//      isLeapYear("hello");
//      //=> THAT'S NOT A NUMBER!
//var isLeapYear = function () {
//};
var leap=function(a)
	{
		var a=2000;
		if(((a%400)==0 )||((a%4)==0)&&((a%100)!=0))
		{
			console.log("is a leap year")
		}
		else 
			console.log("not a leap year")
		

	};
	leap()


// Write a function that accepts three strings and input, and returns the one
// that would come earliest in the dictionary.
//
//      firstInDictionary("rhino", "aardvark", "zebra");
//      //=> aardvark
//
//      firstInDictionary("whale", "zebra", "yak");
//      //=> whale
//
//      firstInDictionary("whale", "zebra", "aardvark");
//      //=> aardvark
//
// It should throw an error string if any of the arguments are not strings.
//
//      firstInDictionary("whale", 5, 10);
//      //=> ALL THREE ARGS MUST BE STRINGS!
//var firstInDictionary = function () {
//};
var firstInDictionary = function (a)
	 {
	 	var a=["madireddy","bindu","sri"];
	 	//var d=a.split("");
	 	//var e=b.split("");
	 	//var f=c.split("");
	 	var g=a.sort()
	 	
	 		
	 			console.log(g[0])
	 	};
	 	
	 	firstInDictionary()




// Write a function that extracts a tag from a string representing an HTML
// element, but throws an error if the string is not an HTML element. You may reuse
// one of your functions from the previous section (or, better yet, see if you can
// remember how to re-write it).
//
//     getTagName("<p>this is a paragraph</p>");
//     //=> p
//
//     getTagName("<p>this is wrong</div>");
//     //=> Error: Not an HTML Element!
//var getTagName = function () {
//};
var getTagName = function (a) 
{
	var a="<p>this is a paragraph</div>";
	var b=a.indexOf(">");
	var c=a.lastIndexOf("<")
	var d=a.slice(0,b+1);
	var e=a.slice(c,a.length);
	if(d[0]==e[0] && d[1]!=e[1] && d[1]==e[2])
	/*var d=b.slice(1,b);
	var e=c.slice(c+2,-1)
	if((a.slice(d))==(a.slice(e)))
	{
		console.log(a.slice(d))
	}*/
	console.log(a.slice(1,b))
	else
		console.log("Not an HTML Element")
};
getTagName()



// Re-implement our improveTweet function so it can generate any of lol, omg,
// lmao, and rofl.
//var improveTweet = function () {
//};
var improveTweet = function (a) 
{
	var a="hai how are you";
	var random=Math.floor(Math.random()*3);
	var exp;
	if(random==0)
	{
		exp="lol"
	}
	else if(random==1)
	{
		exp="omg";
	}
	else
		exp="rolf";

console.log(exp)
};
improveTweet()



// Write a function called `isQuestion` that returns true if the input is a
// string and it ends in a question mark. We'll use this function in the next
// practice problem.
//var isQuestion = function () {
//};
var isQuestion = function (a)
	 {
	 	var a="bindu?";
	 
	 	var c=a.charAt(a.length-1);
	 	if(typeof(a)=="string"&&c=="?")
	 		console.log("true")
	 	
	 	else
	 		console.log("false")
};
isQuestion()





// The Magic 8 Ball is a classic toy that allows you to ask a yes/no
// question and it responds with a random answer. Most of the time (at least half)
// it responds with a "positive" answer, about a quarter of the time it responds
// with a "neutral" answer, and about a quarter of the time it responds with a
// "negative" answer. You can read more about the Magic 8 Ball toy (and see it's
// actual responses) on Wikipedia.
//
// Write a function that simulates the Magic 8 Ball by generating a random
// number. Try to make it match the probabilities of the real toy.
//
//     magic8Ball("Will people like this problem?");
//     //=> Very doubtful
//
//     magic8Ball("Do people like these videos?");
//     //=> My reply is no
//
//     // throw an error if there's no question mark at the end
//     // use your isQuestion function from the previous question
//     magic8Ball("you suck");
//     //=> THAT DOESN'T SOUND LIKE A QUESTION!
//
//     magic8Ball("Is this a question?");
//     //=> Signs point to yes
//var magic8Ball = function () {
//};
var magic8Ball = function (a) {
	var r=Math.floor(Math.random()*3)
	
	var exp;
	if(r==0)
		exp="Very doubtful"
	else if(r==1)
		exp="my reply is no"
	else
		exp="Signs point to yes"
	if(a.charAt(a.length-1)=="?")
	{
		console.log(exp)

	}
	else
		console.log("does not sounds like a question")

};
magic8Ball("Is this a question?")



// Suppose we wanted to randomly interject "-lol-" or "-omg-" into a random
// place in a string. For example:
//
//     randomInterject("this is a tweet");
//     //=> this is -omg- a tweet
//
// Notice that it may break into the middle of words as well.
//
//     randomInterject("hilarious, I'm having a great day");
//     //=> hil-lol-arious, I'm having a great day");
//
// This is a little tricky, so here are some tips. It may be helpful to break down
// this problem into two steps. First, you may want to write a function called
// interjection that accepts a number and two strings -- the interjection and the
// actual string.
//
//     interjectAt("interjection", 5, "hello world!");
//     //=> hello-interjection- world!
//
//     interjectAt("lol", 0, "this is a tweet");
//     //=> -lol-this is a tweet
//
//     interjectAt("omg", 15, "hello");
//     //=> the string doesn't have that many letters!
//
//     interjectAt(5, "omg", "hello");
//     //=> expected first arg to be a string, second arg to be a number and third arg to be a string
//
// You can interject by using two slices. For instance:
//
//     var str = "hello world!";
//     var beginning = str.slice(0,5);
//     var end = str.slice(5,str.length);
//     var strWithInterjection = beginning + "-lol-" + end;
//
// You just have to generalize this to an arbitrary index and wrap it in a function.
//var interjectAt = function () {
//};
var interjectAt = function (a) {
	var e;
	
	var r=Math.floor(Math.random()*15)
	var ran=Math.floor(Math.random()*2)
	if(ran==0)
		e="lol"
	else
		e="omg"
	for(var i=0;i<=a.length;i++)
	{
		var s=a.slice(0,r)
		var en=a.slice(r,a.length)
		if(ran<a.length){
			console.log(s+"-"+e+"-"+en)
		}
		else
			console.log("string does not have that many elements")


	}
};
interjectAt("this is a tweets")



// Now that you have a robust function to do your interjection, your actual
// `randomInterjection` function consists of generating a random message and a
// random location within the string, and then calling into the `interjectAt`
// function with the appropriate arguments.
var randomInterject = function () {
};







