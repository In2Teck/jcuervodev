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