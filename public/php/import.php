<?php 
if(isset($_POST['import']))
$title = $_POST['title'];
$timeValue = $_POST['time_value'];
$answerMixing = $_POST['answermixing'];
$deadline = $_POST['deadline'];
$syllabus = $_POST['syllabus'];

if ($syllabus != '') {
    $about = 'true';
} else {
    $about = 'false';
};

$questions = '';


    if ( isset( $_FILES['userfile'] ) ){
        $csv_file = $_FILES['userfile']['tmp_name'];
        if ( ! is_file( $csv_file ) )
        exit('File not found.');
        $numb = '1';
        if (($handle = fopen($csv_file, "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                $question = $data[0];
                $option1 = $data[1];
                $option2 = $data[2];
                $option3 = $data[3];
                $option4 = $data[4];
                $option5 = $data[5];
                $suc = $data[6];
                if ($suc == '1') {
                    $answer = $option1;
                } elseif ($suc == '2') {
                    $answer = $option2;
                } elseif ($suc == '3') {
                    $answer = $option3;
                } elseif ($suc == '4') {
                    $answer = $option4;
                } elseif ($suc == '5') {
                    $answer = $option5;
                };
                
                

                $questions = $questions ."
                {
                    numb: $numb,
                    question: '$question',
                    answer: '$answer',
                    options: ['$option1','$option2','$option3','$option4','$option5']
                }
                ";
                
                if ($numb != 0 && $data[0] != '') {
                    $questions=$questions.",";
                };
                $numb++;
            };
            fclose($handle);
            
        };   
    };
    $qc = $numb-1;
$quizData = "
var title = '$title'; 
var questionCount = $qc; 
var timeValue = ".$timeValue.";
var answerMixing = ".$answerMixing.";
var deadLine = false;
var about = ".$about.";
let syllabus = '".$syllabus."';

showDetail();

let questions = [
".$questions."
];
";


echo "<code><pre><textarea class='form-control'>$quizData</textarea></pre></code>";
?>
<!DOCTYPE html>
<html lang="kk">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/bootstrap.css">
    <link rel="stylesheet" href="../assets/style.css?v2">
    <script src="../assets/js/bootstrap.bundle.min.js"></script>
    <script src="../assets/js/jquery.min.js"></script>
    <script src="https://telegram.org/js/games.js"></script>
    <title>Quiz</title>
</head>
<body class="user-select-none">
    <div class="card card-body mx-3 my-2" id="cont">
<form action="" method="post" enctype="multipart/form-data">
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Тақырыбы</label>
        <input type="text" class="form-control" name="title">
    </div>

    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Уақыт шектеуі</label>
        <input type="text" class="form-control" name="time_value">
    </div>

    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Сұрақ алмасуы</label>
        <input type="text" class="form-control" name="answermixing">
    </div>

    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Дедлайн</label>
        <input type="text" class="form-control" name="deadline">
    </div>

    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">конспект</label>
        <textarea name="syllabus" class="form-control"></textarea>
    </div>

    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Сұрақтар</label>
        <input type="file" class="form-control" name="userfile">
    </div>

    <button type="submit" class="btn btn-primary w-100" name="import">Сақтау</button>
</form></div></body></html>