

var tabs = function(tabs,panes,event){
	var tab = $(tabs);
	var panes = $(panes);
	var num = 0;
	tab.each(function(index){ 
		$(this).on(event,function(){
			$(this).removeClass("bgG").addClass("bgR");
			$(this).siblings().addClass("bgG");
			if(index === num){
				return false;
			}else{
				var th = panes[index];
				num = index;
				$(th).fadeIn();
				$(th).siblings().fadeOut();
				$(th).removeClass("bgG").addClass("bgR");
				$(th).siblings().addClass("bgG");
			}
		})
	})
}

tabs("#tabs li","#panes li","mouseover");