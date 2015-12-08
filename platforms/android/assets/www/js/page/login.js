define(function(require, exports, module){
	require('jquery');
	var username = '';
	var password = '';
	
	function Login() {
		var that = this;
		$('#login').click(function() {
			that.login();
		});
	}
	
	module.exports = Login;
	
	Login.prototype.login = function() {
		alert("登录失败");
	}
	
	Login.prototype._verify = function() {
		return this;
	}
	
	Login.prototype._verifyUsername = function() {
		return this;
	}
	
	Login.prototype._verifyPassword = function() {
		return this;
	}
});
