/* JPEGCam v1.0.9 *//* Webcam library for capturing JPEG images and submitting to a server *//* Copyright (c) 2008 - 2009 Joseph Huckaby <jhuckaby@goldcartridge.com> *//* Licensed under the GNU Lesser Public License *//* http://www.gnu.org/licenses/lgpl.html *//* Usage:
	<script language="JavaScript">
		document.write( webcam.get_html(320, 240) );
		webcam.set_api_url( 'test.php' );
		webcam.set_hook( 'onComplete', 'my_callback_function' );
		function my_callback_function(response) {
			alert("Success! PHP returned: " + response);
		}
	</script>
	<a href="javascript:void(webcam.snap())">Take Snapshot</a>
*/// Everything is under a 'webcam' Namespace
var protocol=location.protocol.match(/https/i)?"https":"http";window.webcam={version:"1.0.9",ie:!!navigator.userAgent.match(/MSIE/),callback:null,swf_url:protocol+"://memegenerator.in2teck.com/js/webcam.swf",shutter_url:protocol+"://memegenerator.in2teck.com/js/shutter.mp3",api_url:protocol+"://memegenerator.in2teck.com/index.php/CaraWeb/SaveFoto",loaded:!1,quality:80,shutter_sound:!0,stealth:!1,hooks:{onLoad:null,onComplete:null,onError:null},set_hook:function(e,t){if(typeof this.hooks[e]=="undefined")return alert("Hook type not supported: "+e);this.hooks[e]=t},fire_hook:function(e,t){if(this.hooks[e]){typeof this.hooks[e]=="function"?this.hooks[e](t):typeof this.hooks[e]=="array"?this.hooks[e][0][this.hooks[e][1]](t):window[this.hooks[e]]&&window[this.hooks[e]](t);return!0}return!1},set_api_url:function(e){this.api_url=e},set_swf_url:function(e){this.swf_url=e},get_html:function(e,t,n,r){n||(n=e);r||(r=t);var i="",s="shutter_enabled="+(this.shutter_sound?1:0)+"&shutter_url="+escape(this.shutter_url)+"&width="+e+"&height="+t+"&server_width="+n+"&server_height="+r;this.ie?i+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+this.protocol+'://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+e+'" height="'+t+'" id="webcam_movie" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+this.swf_url+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+s+'"/></object>':i+='<embed id="webcam_movie" src="'+this.swf_url+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+e+'" height="'+t+'" name="webcam_movie" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+s+'" />';this.loaded=!1;return i},get_movie:function(){if(!this.loaded)return alert("ERROR: Movie is not loaded yet");var e=document.getElementById("webcam_movie");e||alert("ERROR: Cannot locate movie 'webcam_movie' in DOM");return e},set_stealth:function(e){this.stealth=e},snap:function(e,t,n){t&&this.set_hook("onComplete",t);e&&this.set_api_url(e);typeof n!="undefined"&&this.set_stealth(n);this.get_movie()._snap(this.api_url,this.quality,this.shutter_sound?1:0,this.stealth?1:0)},freeze:function(){this.get_movie()._snap("",this.quality,this.shutter_sound?1:0,0)},upload:function(e,t){t&&this.set_hook("onComplete",t);e&&this.set_api_url(e);this.get_movie()._upload(this.api_url)},reset:function(){this.get_movie()._reset()},configure:function(e){e||(e="camera");this.get_movie()._configure(e)},set_quality:function(e){this.quality=e},set_shutter_sound:function(e,t){this.shutter_sound=e;this.shutter_url=t?t:protocol+"://memegenerator.in2teck.com/js/shutter.mp3"},flash_notify:function(e,t){switch(e){case"flashLoadComplete":this.loaded=!0;this.fire_hook("onLoad");break;case"error":this.fire_hook("onError",t)||alert("JPEGCam Flash Error: "+t);break;case"success":this.fire_hook("onComplete",t.toString());break;default:alert("jpegcam flash_notify: "+e+": "+t)}}};