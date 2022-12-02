<?php 

$quizID = $_GET['quizID'];
$question = [
    'numb' => '1',
    'question' => 'jgggj',
    'options' => ['gjghj', 'hryrty'],
    'answer' => 'fttyrty'
];
//$file = fopen('../quizes/'.$quizID.'.js', 'a+');
//fwrite($file, json_encode($question)); 
//fclose($file); 

$f = '../quizes/'.$quizID.'.js';
$content = file_get_contents($f);
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
    
    <title>Quiz</title>
</head>
<body class="user-select-none">
    <div class="container">
        <div class="card card-body border-0 shadow mt-2">
            <h4 id="quizTitle"></h4>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <td><i class="bi bi-question"></i> Сұрақ саны</td><td id="questionsCount"><b></b></td>
                    </tr>
                    <tr>
                        <td><i class="bi bi-browser-edge"></i> Жауаптар алмасуы</td><td id="answerMixMode"></td>
                    </tr>
                    <tr>
                        <td><i class="bi bi-hourglass"></i> Әр сұраққа берілетін уақыт</td><td id="answerTime"></td>
                    </tr>
                    <tr>
                        <td><i class="bi bi-calendar-check"></i> Дедлайн</td><td></td>
                    </tr>
                </tbody>
            </table>
        </div> 

        <div class="card card-body border-0 shadow mt-2">
            <div class="row">
                <div class="col-auto">
                    <button type="button" class="btn btn-white shadow" data-bs-toggle="modal" data-bs-target="#newQue"><i class="bi bi-plus-lg"></i> Сұрақ</button>
                </div>
            </div>
        </div>

        <div class="modal" id="newQue" tabindex="-1" aria-labelledby="newQueLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Жаңа сұрақ</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post" id="nq">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Сұрақ</label>
                                <input type="text" class="form-control" name="question">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">A)</label>
                                <input type="text" class="form-control" name="opt1">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">B)</label>
                                <input type="text" class="form-control" name="opt2">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">C)</label>
                                <input type="text" class="form-control" name="opt3">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">D)</label>
                                <input type="text" class="form-control" name="opt4">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">E)</label>
                                <input type="text" class="form-control" name="opt5">
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Дұрыс Жауап</label>
                                <input type="text" class="form-control" name="answer">
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary w-100 shadow" type="submit">Сақтау</button></form>
                    </div>
                </div>
            </div>
        </div>

        <div class="card card-body border-0 shadow mt-2">
            <table class="table table-bordered" id="questable">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Сұрақ</th>
                        <th>Жауап нұсқлаары</th>
                        <th>Дұрыс жауап</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>

            
        </div>
    </div><h6 id="quizTitle2"></h6><h6 id="questionsCount"></h6><h6 id="answerMixMode"></h6><h6 id="answerTime"></h6><h6 id="syllabus"></h6>
    <script>
                <?=$content?>

                var table = document.querySelector("#questable tbody");
                
                function htmlEncode(string) {
                return string.replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(/'/g, '&#39;')
                            .replace(/"/g, '&#34;')
                            .replace(/\//, '&#x2F;');
                };

                const form = document.getElementById('nq');
                form.addEventListener('submit', getFormValue);

                function getFormValue(event) {
                    event.preventDefault(); 

                    const   numb = questions.length + 1,
                            question = form.querySelector('[name="question"]'), 
                            answer = form.querySelector('[name="answer"]'), 
                            opt1 = form.querySelector('[name="opt1"]'),
                            opt2 = form.querySelector('[name="opt2"]'),
                            opt3 = form.querySelector('[name="opt3"]'), 
                            opt4 = form.querySelector('[name="opt4"]'), 
                            opt5 = form.querySelector('[name="opt5"]'); 

                    let options = [];

                    if (opt1 != '') {
                        options.push(opt1.value);
                    };

                    if (opt2 != '') {
                        options.push(opt2.value);
                    };

                    if (opt3 != '') {
                        options.push(opt3.value);
                    };

                    if (opt4 != '') {
                        options.push(opt4.value);
                    };

                    if (opt5 != '') {
                        options.push(opt5.value);
                    };

                    const data = {
                        numb: numb,
                        question: question.value,
                        answer: answer.value,
                        options: options
                    };

                    questions.push(data)

                    console.log(data);
                };

                questions.forEach(item => {
                    var tr = document.createElement("tr");

                    var numb = document.createElement('td');
                    numb.innerHTML = item.numb;

                    var question = document.createElement('td');
                    question.innerHTML = item.question;

                    var options = document.createElement('td');
                    var opt = '';
                    for (let i = 0; i < item.options.length; i++) {
                        opt += '<b>' + i + ') </b>' + htmlEncode(item.options[i]) + '<br>'; 
                    };
                    options.innerHTML = opt;

                    var answer = document.createElement('td');
                    answer.innerHTML = htmlEncode(item.answer);

                    tr.appendChild(numb);
                    tr.appendChild(question);
                    tr.appendChild(options);
                    tr.appendChild(answer);

                    table.append(tr);
                });

                

            </script>
</body>
</html>