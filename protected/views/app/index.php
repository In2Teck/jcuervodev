<?php

          $userid = Yii::app()->facebook->getUser(); 
         $loginUrl = Yii::app()->facebook->getLoginUrl();

          echo $userid."<br>";
         if($userid){
         	$results = Yii::app()->facebook->api('/me'); 
           // print_r($results);
         }else{
         	         echo '<a href="'.$loginUrl.'" >cambios </a> ';

         }
?>