<?php
date_default_timezone_set("Asia/Atyrau");
$date = date('m/d/Y h:i', time());
$botToken = '2124596652:AAE5Jw_4-b1k6SVN837NryiIEY045kqim9g';
$eventType = $_GET['eventType'];
$apiDomain = "https://api.telegram.org/bot$botToken/";
if ($eventType == "setScore") {
    $name = $_GET['playerName'];
    $score = $_GET['score'];
    $quizTitle = $_GET['quizTitle'];
    $quizID = $_GET['quizID'];
    $questionCount = $_GET['questionCount'];
    $chatID = $_GET['chatID'];

    $message = urlencode("<pre>$date</pre><br><b>$quizTitle ($quizID)</b><br><b>$name</b> - <b>$questionCount</b> сұрақтың <b>$score</b> сұрағына жауап берді.");

    $apiDomain.="sendMessage?chat_id=$chatID&text=$message&parse_mode=HTML"

    file_get_contents($apiDomain);
};
?>