<?php 


   $userid = Yii::app()->facebook->getUser(); 
         $loginUrl = Yii::app()->facebook->getLoginUrl();

          echo $userid."<br>";
         if($userid){

          $accesToken = Yii::app()->facebook->getAccessToken();
          $results = Yii::app()->facebook->api('/me?access_token=' . $accesToken);
          //$results = Yii::app()->facebook->api('/me'); 
           print_r($results);
         }else{
                   echo '<a href="'.$loginUrl.'" >cambios </a> ';

         }




?>


<script>


window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
        appId      : '342733185828640', // App ID from the App Dashboard
        channelUrl : 'http://apps.t2omedia.com.mx/php2/fbyii/index.php/app/login', // Channel File for x-domain communication
        status     : true, // check the login status upon init?
        cookie     : true, // set sessions cookies to allow your server to access the session?
        xfbml      : true  // parse XFBML tags on this page?
    });    
};

(function(d, debug){
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
    ref.parentNode.insertBefore(js, ref);
}(document, /*debug*/ false));
</script>