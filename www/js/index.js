/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

define(function(require, exports, module){
	require('jquery');
	function App() {
		//
	}
	module.exports = App;
	
	App.prototype.initialize = function() {
		this.bindEvents();
	}
	
	App.prototype.bindEvents = function() {
		//alert(1);
		//document.addEventListener('deviceready', this.onDeviceReady(this), false);
		
		$('.btn_login').bind('click',function(){
			$.post("http://v2test.jingqubao.com/api_v3/Oauth/login_with_password",
			{phone:$('.txt_uname').val(),
			password:$('.txt_password').val()},
			function(data){
				data = $.parseJSON(data);
				if(data.status == 1) {
					location.href = 'scenics.html';
				} else {
					//navigator.vibrate(1000);
					navigator.notification.alert(data.msg, function(){},"登录 提示");
				}
			});
		});
	}
	
	App.prototype.receivedEvent = function(id) {
		//var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        //console.log('Received Event: ' + id);
        
        //document.getElementsByClassName('received')[0].addEventListener('click', function(){
        //	navigator.vibrate(3000);
        //}, false);
	}
	
	App.prototype.onDeviceReady = function(that) {
		that.receivedEvent('deviceready');
	}
	
	//window['app'] = new App();
	//alert(window['app']);
});

