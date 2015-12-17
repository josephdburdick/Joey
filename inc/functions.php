<?php

/* USER-AGENTS
================================================== */
function check_user_agent ( $type = NULL ) {
  $user_agent = strtolower ( $_SERVER['HTTP_USER_AGENT'] );
  if ( $type == 'bot' ) {
    if ( preg_match ( "/googlebot|adsbot|yahooseeker|yahoobot|msnbot|watchmouse|pingdom\.com|feedfetcher-google/", $user_agent ) ) {
            return true;
    }
  } else if ( $type == 'browser' ) {
    if ( preg_match ( "/mozilla\/|opera\//", $user_agent ) ) {
            return true;
    }
  } else if ( $type == 'mobile' ) {
    if ( preg_match ( "/phone|iphone|itouch|ipod|symbian|android|htc_|htc-|palmos|blackberry|opera mini|iemobile|windows ce|nokia|fennec|hiptop|kindle|mot |mot-|webos\/|samsung|sonyericsson|^sie-|nintendo/", $user_agent ) ) {
            return true;
    } else if ( preg_match ( "/mobile|pda;|avantgo|eudoraweb|minimo|netfront|brew|teleca|lg;|lge |wap;| wap /", $user_agent ) ) {
            return true;
    }
  }
  return false;
}

function list_dir($dir){
  $files = array();
  if ($handle = opendir($dir)) {
    $blacklist = array('.', '..', '.php', '.DS_Store', 'bg.jpg');
    while (false !== ($file = readdir($handle))) {
        if (!in_array($file, $blacklist)) {
            array_push($files, "$file");
        }

    }
    closedir($handle);
    return $files;
  }  
}

?>