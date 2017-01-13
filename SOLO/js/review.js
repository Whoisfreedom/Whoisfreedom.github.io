// function People(option){
// 	this.name = option.name;
// 	this.say = function(){
// 		console.log(this.name);
// 	};
// 	this.createPet = function(name,type){
// 		this.name = name;
// 		this.type = type;
// 	};
// };
// var a = new People({
// 	name : "a",
// });
// var b = new People({
// 	name : "b",
// });
// a.pet = new a.createPet("little a","tiger");
// b.pet = new b.createPet("little b","cat")
// console.log(a);
// var _People = {
// 	name : "a",
// 	say : function(){
// 		console.log(this.name);
// 	}
// };
// _People.say();
// function sky(option){
// 	this.color = option.color;
// 	this.area = option.area;
// 	this.createThing = function(name,color){
// 		this.name = name;
// 		this.color = color;
// 	}
// }
// var c = new sky({
// 	color : "blue",
// 	area : "big",
// });
// c.oneThing = new c.createThing("sun","red");
// console.log(c);
// var People = {
// 	name : "a",
// 	pet : function(option){
// 		this.name = option.name;
// 		this.type = option.type;
// 	}
// };
// People.pet = new People.pet({
// 	name : "little a ",
// 	type : "tiger",
// });
// console.log(People);
function Game(option){
	this.name = option.name;
	this.company = option.company;
	this.play = function(){
		console.log(this.name + ":I can play");
	}
};
function LOL(option){
	this.player = option.player;
	Game.call(this,option);
};
var lol = new LOL({
	name : "LOL",
	company : "ROIT",
	player : "pupil",
});
var game = new Game({
	name : "game",
	company : "game company",
});
console.log(game);
console.log(lol);
