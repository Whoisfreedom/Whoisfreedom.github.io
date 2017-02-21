function setRem(){
				document.documentElement.style.fontSize = window.innerWidth/16 + "px";				
			}
			window.onresize = function(){
				setRem();
			};
			setRem();
			