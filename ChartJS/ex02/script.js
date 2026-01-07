    // Chart.js 사용하기
    // 그림그릴 대상 요소 가져오기
    let ctx = document.getElementById("myChart");

    // 데이터 객체
    let config = {
        type : "bar", // 차트의 종류
        data : { // 차트 안에 들어갈 데이터
            labels : ['name1', 'name2','name3', 'name4', 'name5', 'name6'], // 범례
            datasets : [
                {   // 차트에 들어갈 데이터
                    label : '25년 코딩테스트 대회', // 메인제목
                    data : [6, 2, 3, 1, 1, 2], // 각 항목에 들어갈 데이터
                    borderWidth : 3, // 테두리의 두께
            },
            {   // 차트에 들어갈 데이터
                    label : '26년 코딩테스트 대회', // 메인제목
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

    let hamburgers = [1, 1, 1, 1, 1, 1];

    // reData버튼 요소에 Click 이벤트 달기
    document.getElementById('reData').onclick = function() {
        // 데이터 셋 배열
        let dataset = config.data.datasets;

        for (let i = 0; i < dataset.length; i++) {
            console.log(dataset[i]);

            // 바꾸고 싶은 데이터만 가져오기
            let data = dataset[i].data;
            for (let j = 0; j < data.length; j++) {
                data[j] = hamburgers[j];
            }
            
        }

        myChart.update();

    }

    // 데이터 추가하기
    document.getElementById('addData').onclick = function() {
        let newData = {
            label : '24년 코딩테스트 대회',
            data : [1, 2, 13, 4, 5, 6],
            borderWidth : 3,
            backgroundColor : 'rgba(255, 0, 0, 1)',
            borderColor : 'rgba(255, 0, 0, 1)'
        }

        config.data.datasets.push(newData);
        myChart.update();

    }

    // 데이터 삭제하기
    document.getElementById("deleteData").onclick = function() {
        config.data.datasets.splice(-1, 1);
        myChart.update();
    }