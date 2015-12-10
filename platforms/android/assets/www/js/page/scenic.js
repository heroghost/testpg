define(function(require, exports, module) {
	require('jquery');
	
	function Scenic() {alert(OAuth);
		this.bindEvents();
		this.getScenics();
	}
	
	module.exports = Scenic;
	
	
	
	Scenic.prototype.bindEvents = function() {
		$('.buy').click(function() {
			//
		});
	}
	
	Scenic.prototype.buy = function() {
		//OAuth.initialize()
	}
	
	Scenic.prototype.getScenics = function() {
		var that = this;
		$.post("http://v2test.jingqubao.com/api_v3/Scenic/get_scenic_by_area",
		{
			area_id:110100
		},
		function(data) {
			data = $.parseJSON(data);
			var template = that.getScenicTemplate();
			if(data.status == 1) {
				for(var i in data.data.scenic) {
					var li = "";
					var scenic = data.data.scenic[i];
					li = template.replace("{title}", scenic.scenic_region_name);
					li = li.replace("{id}",scenic.rid);
					$('.scenics').append(li);
				}
				
				$('.buy').click(function(data){
					alert($(this).data('id'));
				});
			} else {
				navigator.notification.alert(data.msg);
			}
		});
	}
	
	Scenic.prototype.getScenicTemplate = function() {
		return "<li><span>{title}</span><span><button class='buy' data-id='{id}'>购买</button></span></li>";
	}
	
});
