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
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        
        
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        document.addEventListener("online", function() {
        	alert("I am online");
        }, false);
        document.addEventListener("offline", function() {
        	alert("I am offline");
        }, false);
        /*
        navigator.device.capture.captureAudio(
		    function(mediaFiles) {
			    var i, path, len;
			    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
			        path = mediaFiles[i].fullPath;
			        // do something interesting with the file
			    }
			} ,function(error) {
			    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
			}, {limit:2}
		);
        window.addEventListener("batterystatus", function(info) {
        	alert("level: "+info.level+" isPlugged: "+info.isPlugged);
        }, false);
        var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
        
        navigator.accelerometer.getCurrentAcceleration(function(acceleration){
        	alert('Acceleration X: ' + acceleration.x + '\n' +
	          'Acceleration Y: ' + acceleration.y + '\n' +
	          'Acceleration Z: ' + acceleration.z + '\n' +
	          'Timestamp: '      + acceleration.timestamp + '\n');
        },function(){
        	alert("error");
        });
        navigator.compass.getCurrentHeading(function(heading) {
		    alert('Heading: ' + heading.magneticHeading);
		}, function onError(error) {
		    alert('CompassError: ' + error.code);
		});
		navigator.notification.alert("I am a alert notification",function(){
			alert("finished a alert");
		},'alert title', "alert button");
		navigator.geolocation.getCurrentPosition(function(position) {
		    alert('Latitude: '          + position.coords.latitude          + '\n' +
		          'Longitude: '         + position.coords.longitude         + '\n' +
		          'Altitude: '          + position.coords.altitude          + '\n' +
		          'Accuracy: '          + position.coords.accuracy          + '\n' +
		          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
		          'Heading: '           + position.coords.heading           + '\n' +
		          'Speed: '             + position.coords.speed             + '\n' +
		          'Timestamp: '         + position.timestamp                + '\n');
		},function(error) {
		    alert('code: '    + error.code    + '\n' +
		          'message: ' + error.message + '\n');
		},{ 
			maximumAge: 3000, 
			timeout: 5000, 
			enableHighAccuracy: true });
		*/
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        
        document.getElementsByClassName('received')[0].addEventListener('click', function(){
        	navigator.camera.getPicture(function(imageData) {
		    	alert('success pic');
		    }, function(message) {
		    	alert(message);
		    }, {
	            quality:50,
	            allowEdit:true,
	        });
        }, false);
    },
    onSuccess:function(imageData) {
    	alert('success pic');
    },
    onFail:function(message) {
    	alert(message);
    },
};
