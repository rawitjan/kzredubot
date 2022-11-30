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
    <div class="container" id="cont">
        <div class="container-sm">
            <div class="card border-light shadow-sm w-75 position-absolute top-50 start-50 translate-middle my-auto mx-auto" id="info">
                <div class="card-body">
                    <h5 class="card-title">QUIZ | <span class="h5 text-primary"><b id="quizTitle"></b></span></h5>
                    table
                    <ol class="small lh-1 text-muted">
                        <li>Сұрақ саны: <span class="h6 text-primary"><b id="questionsCount"></b></span></li>
                        <li>Жауаптар алмасуы: <span class="h6 text-primary"><b id="answerMixMode">Өшірулі</b></span></li>
                        <li>Әр сұраққа берілетін уақыт: <span class="h6 text-primary"><b id="answerTime">15 секунд</b></span></li>
                        <li>Дедлайн: <span class="h6 text-primary"><b id="deadline">Шектеусіз</b></span></li>
                    </ol>

                    <div class="alert alert-primary p-2 lh-1 mt-1">
                        <i class="small">Сұрақтар материалды бекітуге арналған. ҰБТ-да дәл осы сұрақ келетіндігіне кепілдік бермейміз.</i>
                    </div>
                    
                    <div class="row">
                        <div class="col-sm-6 mt-1">
                            <button type="button" class="btn btn-white shadow d-none" data-bs-toggle="modal" data-bs-target="#syllabusModal" id="sbtn"><i class="bi bi-book"></i> Конспект</button>
                            <button type="button" class="btn btn-white shadow" data-bs-toggle="modal" data-bs-target="#rakingModal" id="rbtn"><i class="bi bi-bar-chart"></i> Рейтинг</button>
                        </div>
                        <div class="col-sm-6 mt-1">
                            <button class="btn btn-success shadow w-100 d-none" id="continue">Жалғастыру <i class="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card border-light h-100 w-100 shadow-sm" id="quiz">
            <div class="card-header bg-transparent">
                <div class="row">
                    <div class="col my-auto">
                        <text class="fs-6"><span class="h6 text-primary"><b id="quizTitle2"></b></span></text>
                        
                        <text class="fs-6 text-success" id="correct"></text>
                        <text class="fs-6 text-danger" id="incorrect"></text>
                    </div>
                    <div class="col text-end fs-5 my-auto">
                        <button type="button" class="btn btn-white shadow d-none h-100" data-bs-toggle="modal" data-bs-target="#syllabusModal" id="sbtn2"><i class="bi bi-book"></i></button>
                        <button class="btn btn-white shadow h-100 pe-none"><text id="time_text"><i class="bi bi-alarm"></i></text>&nbsp;|&nbsp;<b><text id="timer" class="text-primary">00</text></b></button>
                    </div>
                </div>
            </div>
            <div id="time_line"></div>
            <div class="card-body">
                <text class="fs-5" id="que_text"></text><hr>
                <div class="row row-cols-1 g-4 mt-1" id="option_list">
        
                </div>
            </div>
            <div class="card-footer bg-white d-none d-lg-block">
                <div class="row">
                    <div class="col my-auto">
                        <button class="btn btn-white shadow pe-none"><text class="text-muted" id="total_que2"></text></button>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-primary shadow text-white" id="next">Келесі сұрақ <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>

            
        </div>

        <footer id="footer">
            <div class="card card-body border border-0 rounded-0 fixed-bottom shadow p-1 d-lg-none">
                <div class="row">
                    <div class="col"><button class="btn btn-white shadow pe-none"><text class="text-muted" id="total_que"></text></button></div>
                    <div class="col-auto"><button class="btn btn-primary shadow text-white" id="next2">Келесі сұрақ <i class="bi bi-arrow-right"></i></button></div>
                </div>
            </div>
        </footer>
        
        <div class="card border-light card-body shadow-sm w-75 position-absolute top-50 start-50 translate-middle mx-auto my-auto" id="result_box">
            <div class="text-center text-primary fs-1"><i class="bi bi-trophy text-center fs-1"></i></div><br>
            <div class="fs-5 text-center" id="score"></div><br>
            <div class="row">
                <div class="col-sm-6 mt-1">
                    <button class="btn btn-success w-100" id="restart"><i class="bi bi-arrow-repeat"></i> Қайталау</button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade" id="syllabusModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="syllabusModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="syllabusModalLabel"></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="syllabus">
                    ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary w-100" data-bs-dismiss="modal">Жабу</button>
                    </div>
                </div>
            </div>
        </div>
    <script src="../assets/js/qplay.js?v10"></script>
</body>
</html>