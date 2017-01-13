function Role(option){
	var game = document.querySelector(".game");
	this.name = option.name;
	this.english = option.english;
	this.description = option.description;
	this.blood =option.blood;
	this.init = function(){
		this.create();
	}
	this.create = function(){
		var dom = document.createElement("div");
		var _this = this;
		dom.className = "role "+ this.english;
		dom.onclick = function(){
			Game.battleFilde[0] = _this;
			if(Game.battleFilde[1]){
				Game.battleFilde[1].role.attack(Game.battleFilde[1].skill,Game.battleFilde[0]);
				Game.battleFilde=[];
				_this.showBlood.classList.add("drop");
				var t = setTimeout(function(){
					clearTimeout(t);
					_this.showBlood.classList.remove("drop");
					_this.showBlood.innerHTML = "";
				},1000)
			}
			console.log(Game.battleFilde);


		};
		var name = document.createElement("h1");
		name.appendChild(document.createTextNode(this.name));
		dom.appendChild(name);
		var bloodMeter = document.createElement("div");
		bloodMeter.className = "bloodMeter";
		this.meter = document.createElement("div");
		this.meter.className = "meter";
		bloodMeter.appendChild(this.meter);
		this.showBlood = document.createElement("div");
		this.showBlood.className = "showBlood";
		dom.appendChild(this.showBlood);
		dom.appendChild(bloodMeter);
		dom.appendChild(this.addA("A"));
		dom.appendChild(this.addQ("Q"));
		dom.appendChild(this.addW("W"));
		dom.appendChild(this.addE("E"));
		dom.appendChild(this.addR("R"));
		game.appendChild(dom);
		console.log(dom);
	};
	this.attack = function(skill,towards){
		this.name === towards.name || towards.hurt(this[skill]());
	};
	this.hurt = function(_blood){
		var blood = this.blood;
		this.blood = blood - _blood>0 ? blood - _blood : 0;
		this.meter.style.width = this.blood + "%";
		this.showBlood.innerHTML = _blood;
	};
	this.A = function(){
		return 10;
	};
	this.Q= function(){
		return 30;
	};
	this.W = function(){
		return 15;
	};
	this.E = function(){
		return 20;
	};
	this.R = function(){
		return 50;
	};
	this.setBtnAction = function(text){
		var btn = document.createElement("a")
		var _this = this;
		console.log(_this);
		btn.appendChild(document.createTextNode(text));
		btn.onclick = function(e){
			//阻止事件的冒泡
			e.stopPropagation();
			Array.from(this.parentNode.childNodes).map(function(list){
				list.classList.remove("current");
			});
			this.classList.add("current");
			Game.battleFilde[1] = {
				role : _this,
				skill : text,
			};
		};
		return btn;
	};
	this.addA = function(text){
		return this.setBtnAction(text);
	};
	this.addQ = function(text){
	return this.setBtnAction(text);
	};
	this.addW = function(text){
	return this.setBtnAction(text);
	};
	this.addE = function(text){
		return this.setBtnAction(text);
	};
	this.addR = function(text){
		return this.setBtnAction(text);
	};	
	this.init();
};
var RoleSet = {
	roleInfo : {
		Darius : {
			english : "darius",
			name : "德莱厄斯",
			description : "诺克萨斯之手",
			blood : 100,
		},
		Garen : {
			english : "garen",
			name : "盖伦",
			description : "德玛西亚之力",
			blood : 100,
		},
	},
	Darius : function(option){
		Role.call(this,option);
	},
	Garen : function(option){
		Role.call(this,option);
	},
};
var Game = {
	role : [],
	battleFilde : [],
	init : function(role){
		for(var i =0,roleLen = role.length;i<roleLen;i++){
			this.role.push(new RoleSet[role[i]](RoleSet.roleInfo[role[i]]));
		}
	}
};
var startGame = document.querySelector(".startGame");
var game = document.createElement("div");
game.className = "game";
startGame.onclick = function(){
	startGame.innerText = "";
	document.body.appendChild(game);
	game.innerText = "solo";
	Game.init(["Darius","Garen"]);
};

