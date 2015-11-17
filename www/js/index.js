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
		var lasturl='';
		var exturl='';
		member_id='';
		var baseUrl = "http://15.27.0.180/wrk/take_care/pg_tst_sample/"; 
		var baseUrl = "http://15.27.0.180/cr/z0602/?device=iPhone&device_id=12345&device_version=8.1&device_os=Windows&device_notification_id=sf2df13sd2f1sdf&app_version=1.2.0";
		//var baseUrl ="https://www.jamaicangrill.com/index_mobile";
		//var baseUrl ="http://html5demos.com/file-api-simple";
		var iap1 = cordova.InAppBrowser.open(baseUrl, '_blank', 'location=yes,hidden=yes,zoom=no,toolbar=no,suppressesIncrementalRendering=yes,disallowoverscroll=yes,clearcache=yes, clearsessioncache=yes');
		
		iap1.addEventListener("loadstop", function() {
				iap1.show();
		});
		iap1.addEventListener("loadstart", loadstartcheck);
		iap1.addEventListener("loadstop", loadstopcheck);
		iap1.addEventListener("loaderror", loaderrorcheck);
		
		function loaderrorcheck(event) {//alert("out:"+event.url)
				if(event.url.match("tel:") || event.url.match("mailto:"))
				{	//alert(123);
					
					execcssinsideiap1('body{display:none; }');
					//setTimeout(function(){execcssinsideiap1('body{display:none;}');},100);
					execinsideiap1('history.back();');
					setTimeout(function(){execcssinsideiap1('body{display:none;}');},500);
					//execinsideiap1('alert(document.documentElement.innerHTML );');
					//execinsideiap1('alert(document.documentElement.innerHTML );');
					//execcssinsideiap1('div{display:none; }');
					setTimeout(function(){execinsideiap1('location.reload(true);');},500);
					//return ;alert(123);//execinsideiap1('history.back();location.reload();');
					//alert("in:"+event.url); //var js_path='http://15.27.0.180/theme/Front/js/scripts.js';
					//execinsideiap1('setTimeout(function(){alert(123);location.reload();},2000)');
					//iap1 = window.open(event.url, "_system",null);
					//execinsideiap1('history.back();location.reload();location.reload();');
					//iap1.addEventListener('loadstart', closeInAppBrowser);
					//iap1.addEventListener('loaderror', loaderrorcheck);
				}
				else{
					//alert('error: ' + event.message);
				}
		}
		document.addEventListener("resume", onResume, false);

		function onResume() {//alert(JSON.stringify(iap1));
			//execinsideiap1('reloadme();');
			//app.initialize();
			//alert ('app resumed');//iap1.addEventListener("loadstart", loadstartcheck);
			//iap1.close();	
			//app.initialize(); 
			//execinsideiap1('window.location.reload();');
			
			//iap1.addEventListener("loadstart", loadstartcheck);
			if(lasturl){
				//alert("Last URL-"+lasturl);
							
			}
			//iap1.addEventListener("loadstart", loadstartcheck);
			//iap1.removeEventListener("loadstart", function(){});
			//iap1.addEventListener("loadstart", loadstartcheck);
			//iap1.close();
			//execinsideiap1('reloadme();');
		}
		function loadstartcheck(event) {//alert(JSON.stringify(event));
						//if(!event.url.match("device_id"))
						//getPhoto();
						//alert(JSON.stringify(event));
						//alert('out: '+event.url);
						exturl='';
						var extension = event.url.substr(event.url.lastIndexOf('.')+1);
						if(event.url.match("chromewebdata")){
							execinsideiap1('history.back();location.reload();');	
						}
						else if(extension=="pdf" && event.url!=""){//alert(event.url);
							ref = window.open(event.url, "_system",null);
							//execinsideiap1('window.stop();');
							
							execinsideiap1('history.back();location.reload(true);');
							//setTimeout(function(){execinsideiap1('history.back();');},1000);
							//setTimeout(function(){execinsideiap1('location.reload(true);');},2000);
							ref.addEventListener('loadstart', loadstartcheck);
							ref.addEventListener('loaderror', loaderrorcheck);
						}
						else if(event.url.match("upload_profile_pic")){//alert("in: upload_profile_pic");
							var pic_url=event.url;
							pic_url=pic_url.split('/');
							member_id = pic_url[pic_url.length-1];
							//execinsideiap1('location.href="http://15.27.0.180/cr/z0602/front_users/tc_card"');
							//setTimeout(function(){execinsideiap1('history.back();');},500);
							//setTimeout(function(){execinsideiap1('location.reload(true);');},500);
							//setTimeout(function(){
								//pictureSource = navigator.camera.PictureSourceType;
								//destinationType = navigator.camera.DestinationType;
								if(device.platform=="iOS"){
									iap1.close();
									getPhoto();
								}
								else{alert("in else");
									getPhoto();
								}
							//},10000);
							//alert("in: upload_profile_pic");
							
						}
						else if (!event.url.match("15.27.0.180") && event.url!="" && !event.url.match("tel:"))
						{
							//if(event.url!=""){alert('in: '+event.url);}
							//execinsideiap1('');
							//execinsideiap1('return false;'); alert(document.referrer);
							//execinsideiap1('location.href="about:blank";');
							//iap1.loadstop();
							//lasturl=event.url;
							//iap1.show();
							//cordova.exec(successFunction, errorFunction, "window", "open", ['http://apache.org', '_blank', 'location=yes']);
							//window.location.href = event.url;
							ref = window.open(event.url, "_system");
							//alert("window opened");
							execinsideiap1('history.back();location.reload();');
							ref.addEventListener('loadstart', loadstartcheck);
							ref.addEventListener('loaderror', loaderrorcheck);
							//alert(JSON.stringify(iap1));
							//iap1.show();
							//iap1.removeEventListener('loadstart', loadstartcheck);
							//iap1.addEventListener("loadstart", loadstartcheck);
			
							//exturl=event.url;
							
							//iap1.loadstop();
							//alert(event.url);
							//setTimeout(function () {
							//execinsideiap1('history.back();');
							//}, 2000);				
							//return true;	
						}
						
			};
		function loadstopcheck(event){
				if(exturl){
					//iap1.removeEventListener('loadstart', loadstartcheck);
					//execinsideiap1('history.back();');
					//alert(exturl);
					//iap1.show();
					//window.open(exturl, '_system');
					}
					//alert('loadstop done'+event.url);
					
					
				};

		function onPhotoURISuccess(imageURI) {
        	uploadPhoto(imageURI);
    	}


    // A button will call this function
    //
    function getPhoto() {//alert(sourceType);
      // Retrieve image file location from specified source
      /*navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL,
        sourceType: source });*/
	  
	  navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50,
        targetWidth: 600,
        targetHeight: 600,
        destinationType: navigator.camera.DestinationType.DATA_URL,
       sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
						 
    }

    function uploadPhoto(imageURI) {//alert(3);
//alert(imageURI);
        //selected photo URI is in the src attribute (we set this on getPhoto)
        //var imageURI = document.getElementById('smallImage').getAttribute("src");
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
		//alert(imageURI);
        var ft = new FileTransfer();
        //ft.upload(imageURI, encodeURI("http://15.27.0.180/cr/z0602/front_users/upload_profile_pic"), win, fail, options);
		var data;
		alert("test ajax"+member_id);
		
		/*$.ajax({
      		url: 'http://15.27.0.180/cr/z0602/front_users/upload_profile_pic',
      		method: 'post',
      		success: function(response) {//alert(response);
          		//$( "#type_id" ).html( response );
      		},
			error:function() {
				alert('Now working!');                  
			}
   		});*/
		//alert(imageURI);
		
		
		var data;
		data={file:imageURI,member_id:member_id};
		$.ajax({
			type       : "POST",
			url        : 'http://15.27.0.180/cr/z0602/front_users/upload_profile_pic',
			crossDomain: true,
			data: data,
			//dataType   : 'json',
			contentType:"application/x-www-form-urlencoded",
			success    : win,
			error      : fail
    	});		
    }

    // Called if something bad happens.
    function onFail(message) {
      //console.log('Failed because: ' + message);
	  alert('Failed because: ' + message);
	  setTimeout(function(){execcssinsideiap1('body{display:none;}');},100);
		execinsideiap1('history.back();');
		setTimeout(function(){execcssinsideiap1('body{display:none;}');},100);
		setTimeout(function(){execinsideiap1('location.reload(true);');},500);
    }

    function win(r) {
        //console.log("Code = " + r.responseCode);
        //console.log("Response = " + r.response);
       // alert("Response =" + r.response); 
       // console.log("Sent = " + r.bytesSent);
		//if(r.response=="success"){
			if(device.platform=="iOS"){
				reopenIAB();	
			}
			else{
				execinsideiap1('history.back();');
				setTimeout(function(){execinsideiap1('location.reload(true);');},500);
			}
		//}
    }

    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        //console.log("upload error source " + error.source);
       // console.log("upload error target " + error.target);
		alert("upload error source " + error.source);
        alert("upload error target " + error.target);
			if(device.platform=="iOS"){
				reopenIAB();	
			}
			else{
				setTimeout(function(){execcssinsideiap1('body{display:none;}');},100);
				execinsideiap1('history.back();');
				setTimeout(function(){execcssinsideiap1('body{display:none;}');},100);
				setTimeout(function(){execinsideiap1('location.reload(true);');},500);
			}
    }
	function reopenIAB(){
		var iap1 = cordova.InAppBrowser.open('http://15.27.0.180/cr/z0602/?device=iPhone&device_id=12345&device_version=8.1&device_os=Windows&device_notification_id=sf2df13sd2f1sdf&app_version=1.2.0&jump_to=front_users/tc_card', '_blank', 'location=yes,hidden=yes,zoom=no,toolbar=no,suppressesIncrementalRendering=yes,disallowoverscroll=yes,clearcache=yes, clearsessioncache=yes');
		iap1.addEventListener("loadstop", function() {
				iap1.show();
		});
		iap1.addEventListener("loadstart", loadstartcheck);
		iap1.addEventListener("loadstop", loadstopcheck);
		iap1.addEventListener("loaderror", loaderrorcheck);
	}
			   	
		function execinsideiap1(pcode) {
			//alert('execinsideiap1');
			iap1.executeScript({
				code: pcode
			}, function(
				
			) {
				//alert('code executed');
				//alert("Image Element Successfully Hijacked");
			});
		}
		function execcssinsideiap1(pcode) {
			//alert(pcode);
			iap1.insertCSS({
				code: pcode
			}, function(
				
			) {
				//alert('code executed');
				//alert("Image Element Successfully Hijacked");
			});
		}
			
			
			
			
			
		
		
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');
		
        console.log('Received Event: ' + id);
    },
    openNativeAppWindow: function(data) {
        window.open(data, '_system');
    }
};
