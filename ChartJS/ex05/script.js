    // Chart.js 사용하기
    // 그림그릴 대상 요소 가져오기
    let ctx = document.getElementById("myChart");

    // 데이터 객체
    let config = {
        // type : "bar", // 차트의 종류
        data : { // 차트 안에 들어갈 데이터
            labels : ['힘', '민첩', '운', '지능', '체력'], // 범례
            datasets : [
                {   // 차트에 들어갈 데이터
                    type : "radar",
                    label : '내 캐릭터 능력치', // 메인제목
                    data : [50, 40, 20, 10, 0], // 각 항목에 들어갈 데이터
                    borderWidth : 3, // 테두리의 두께
                }
            ],
        },
        option : { // 차트의 추가 옵션 정의
            scales : {
                y : {
                    beginAtZero : true
                },
                r : {
                    beginAtZero : true
                }
            }
        }
    }

    // Chart 그리기 (Chart 객체 사용) -> new Chart(그림그릴 요소, 데이터)
    let myChart =  new Chart(ctx, config);

    function change (i) {
        // console.log(i);

        let chData = document.getElementsByClassName("ran" + i);
        console.log(chData[0].value);

        config.data.datasets[0].data[i-1] = chData[0].value;
        myChart.update();

    }