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
		sessionStorage.openedIAB = 1;		
		$( ".ext_link" ).click(function() {
			alert( "Handler for .click() called." );
		});
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {		
	
						//alert("Device model: " + device.model);
						//alert("Device : " + device.model);
						//alert("Device id: " + device.uuid);
						//alert("Device version: " + device.version);
						//alert("Device os: " + device.platform );
		window.plugins.uniqueDeviceID.get(success, fail);
			var udid;
			function success(uuid)
			{
				//alert(uuid);
				udid = uuid;
			};
			function fail()
			{
				alert("fail");
			};					
						
		var push = PushNotification.init({
            "android": {
                "senderID": "319064491701"
            },
            "ios": {}, 
            "windows": {} 
        });
        
        push.on('registration', function(data) {
            console.log("registration event");
           // document.getElementById("regId").innerHTML = data.registrationId;
			//alert(data.registrationId);
			var regID = data.registrationId;
			//alert("length"+ regID.length);
            console.log(JSON.stringify(data));
			
			var app_version="1.2.0";
			
			//alert(udid);
			
			var baseUrl = "http://15.27.0.180/cr/z0602/?device="+device.model+"&device_id="+udid+"&device_version="+device.version+"&device_os="+device.platform+"&device_notification_id="+regID+"&app_version="+app_version;;	
			//var baseUrl = "http://202.151.76.196/dev1/?device="+device.model+"&device_id="+udid+"&device_version="+device.version+"&device_os="+device.platform+"&device_notification_id="+regID+"&app_version="+app_version;//+"#no-back-button";	
			//alert("URL: " + baseUrl);
			//var baseUrl = "http://15.27.0.180/wrk/take_care/edit/affinity_rewards.html";
			var ref = cordova.InAppBrowser.open(baseUrl, '_blank', 'location=no,hidden=yes,zoom=no,toolbar=no,suppressesIncrementalRendering=yes,disallowoverscroll=yes');
			var img = document.createElement("img");
			   
			ref.addEventListener("loadstop", function() {
				ref.show();
					//alert("loading stop");
					 //navigator.notification.activityStop();				
				
			}); 
			

			ref.addEventListener("loadstart", closeInAppBrowser);
		
			ref.addEventListener("loaderror", loaderrorcheck)
			function loaderrorcheck(event) {//alert(event.url);
				if(event.url.match("tel:") || event.url.match("mailto:"))
				{	
					execinsideiap1('history.back();location.reload();');
					//ref.addEventListener('loadstart', closeInAppBrowser);
					//ref.addEventListener('loaderror', loaderrorcheck);
				}
				else{
					alert('error: ' + event.message);
				}
			}
			member_id_url="";
			function closeInAppBrowser(event) {
						//alert(window.sessionStorage.getItem("page"));
						//var previousPage = window.sessionStorage.getItem("page");
						//var currentPage = event.url;
						//alert(123);
						//window.sessionStorage.setItem("page",currentPage);
						//alert(window.sessionStorage.getItem("page"));
						
						if (event.url.match("/closeapp")) {
							//alert(event.url.match("/closeapp"));
							ref.close();
						}
						else if(event.url.match("/upload_profile_pic")){
							
							pictureSource = navigator.camera.PictureSourceType;
							destinationType = navigator.camera.DestinationType;
							getPhoto(pictureSource.PHOTOLIBRARY);
							execinsideiap1('history.back();');
						}
						else if (!event.url.match("15.27.0.180") && event.url!="") {//alert(123);
							iap1 = window.open(event.url, "_system",null);
							execinsideiap1('history.back();location.reload();');
							iap1.addEventListener('loadstart', closeInAppBrowser);
							iap1.addEventListener('loaderror', loaderrorcheck);
						}
						 
						
			};	
			function execinsideiap1(pcode) {
				ref.executeScript({
					code: pcode
				}, function() {});
			}
			/***********upload profile pic***********/
			function onPhotoURISuccess(imageURI) {
				uploadPhoto(imageURI);
			}

			function getPhoto(source) {
			    // Retrieve image file location from specified source
				navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
				destinationType: destinationType.FILE_URI,
				sourceType: source });
			  
			}

			function uploadPhoto(imageURI) {
				if (!imageURI) {
					alert('Please select an image first.');
					return;
				}
		
				//set upload options
				var options = new FileUploadOptions();
				options.fileKey = "file";
				options.fileName = imageURI.substr(imageURI.lastIndexOf('/')+1);
				options.mimeType = "image/jpeg";
		
				options.params = {
					//firstname: document.getElementById("firstname").value,
				   // lastname: document.getElementById("lastname").value,
					//workplace: document.getElementById("workplace").value
				}
		
				var ft = new FileTransfer();
				ft.upload(imageURI, encodeURI("http://15.27.0.180/cr/z0602/front_users/upload_profile_pic/"), win, fail, options);
			}

			// Called if something bad happens.
			function onFail(message) {
			  //console.log('Failed because: ' + message);
			  alert('Failed because: ' + message);
			}

			function win(r) {
				console.log("Code = " + r.responseCode);
				console.log("Response = " + r.response);
				//alert("Response =" + r.response);
				console.log("Sent = " + r.bytesSent);
				if(r.response=="success"){
					execinsideiap1('location.reload();');
				}
			}

			function fail(error) {
				alert("An error has occurred: Code = " + error.code);
				//console.log("upload error source " + error.source);
			   // console.log("upload error target " + error.target);
				alert("upload error source " + error.source);
				alert("upload error target " + error.target);
			}
			/***********eof upload profile pic*********************/
			ref.addEventListener('exit', function(event) {			
			if (sessionStorage.openedIAB &&  sessionStorage.openedIAB == 1) {
				sessionStorage.openedIAB = 0;
				navigator.app.exitApp(); 
				}
			});
        });

        push.on('notification', function(data) {
        	console.log("notification event");
            console.log(JSON.stringify(data));
            //alert(data.message);
        });

        push.on('error', function(e) {
            console.log("push error");
        });				
		
		
    }
	
};
