<?php 


$userid = Yii::app()->facebook->getUser(); 
$loginUrl = Yii::app()->facebook->getLoginUrl();

      if($userid){
            $results = Yii::app()->facebook->api('/me'); 
            print_r($results);
      }else{


      }

?>


<!DOCTYPE html>
<html xmlns:fb="http://www.facebook.com/2008/fbml">
  <body>
   <a href="<?php echo $loginUrl; ?>">link</a>
  </body>
</html>
