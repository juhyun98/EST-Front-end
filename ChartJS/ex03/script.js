
let label = ""; // 제목을 저장할 변수

document.getElementById('make').onclick = function () {
    label = document.getElementById("label").value;
    let labelNum = document.getElementById("labelNum").value;
    let html = ""; // 화면에 보여줄 태그를 저장할 변수

    // 제목
    html += "<h1>" + label + "</h1>";

    // 라벨, 데이터
    let inputLabel = "";
    let inputData = "";

    for (let i = 0; i < labelNum; i++) {
        inputLabel += "<input type='text' name='labels'>";
        inputData += "<input type='text' name='datas'>";
    }
    
    html += "라벨 " + inputLabel;
    html += "<br>";
    html += "데이터 " + inputData;

    // 생성하기 버튼 추가하기
    html += "<br>";
    html += "<button onclick='inputData()'>생성하기</button>";
    
    // 최종 화면 넣어주기
    document.getElementById("inputData").innerHTML = html;
}

// 차트 그리는 함수
let ctx = document.getElementById("myChart");

function inputData() {
    // 라벨과 데이터 값 가져오기
    let labelli = document.getElementsByName("labels");
    let datas = document.getElementsByName("datas");

    let labels = [];
    let data = [];
    
    for (let i = 0; i < labelli.length; i++) {
        labels.push(labelli[i].value);
        data.push(datas[i].value);
    }
    
    // 위 데이터 만큼 그래프 그리기
    let config = {
        type : "bar", // 차트의 종류
        data : { // 차트 안에 들어갈 데이터
            labels : labels, // 범례
            datasets : [
                {   // 차트에 들어갈 데이터
                    label : label, // 메인제목
                    data : data, // 각 항목에 들어갈 데이터
                    borderWidth : 3, // 테두리의 두께
                }
                ],
        },
        option : { // 차트의 추가 옵션 정의
            scales : {
                y : {
                    beginAtZero : true
                }
            }
        }
    }

    let ctx = document.getElementById("myChart");
    new Chart(ctx, config);

}