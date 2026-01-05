    // Chart.js 사용하기
    // 그림그릴 대상 요소 가져오기
    let ctx = document.getElementById("myChart");

    // 데이터 객체
    let config = {
        // type : "bar", // 차트의 종류
        data : { // 차트 안에 들어갈 데이터
            labels : ['정형', '김운비','신정욱', '김보람', '손준수', '류이수'], // 범례
            datasets : [
                {   // 차트에 들어갈 데이터
                    type : "bar",
                    label : '25년 차준섭 이사장배 햄버거 먹기대회', // 메인제목
                    data : [6, 2, 3, 1, 1, 2], // 각 항목에 들어갈 데이터
                    borderWidth : 3, // 테두리의 두께
            },
            {   // 차트에 들어갈 데이터
                    type : "line",
                    label : '26년 차준섭 이사장배 햄버거 먹기대회', // 메인제목
                    data : [6, 7, 11, 3, 5, 4], // 각 항목에 들어갈 데이터
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

    // Chart 그리기 (Chart 객체 사용) -> new Chart(그림그릴 요소, 데이터)
    let myChart =  new Chart(ctx, config);
