require(["./src/hello.js", "./src/bye.js"], function(hello, bye) {
	hello.sayHello();
	bye.sayBye();
});
