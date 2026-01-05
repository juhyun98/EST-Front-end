const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');

let config1 = {
    type: 'radar',
    data: {
        labels: ['힘', '민첩', '지능', '운', '체력', '방어력'],
        datasets: [{
            label: '정형',
            data: [9, 9, 9, 9, 9, 9],
            borderWidth: 5
        }
        ],


    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            r: {
                beginAtZero: true
            }
        }
    }
}

let config2 = {
    type: 'radar',
    data: {
        labels: ['힘', '민첩', '지능', '운', '체력', '방어력'],
        datasets: [{
            label: '신정욱',
            data: [9, 9, 8, 9, 6, 9],
            borderWidth: 5
        }
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            r: {
                beginAtZero: true
            }
        }
    }
}


let config3 = {
    type: 'radar',
    data: {
        labels: ['힘', '민첩', '지능', '운', '체력', '방어력'],
        datasets: [{
            label: '박병관',
            data: [9, 9, 9, 7, 9, 8],
            borderWidth: 5
        }
        ],


    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            r: {
                beginAtZero: true
            }
        }
    }
}
let myChart1 = new Chart(ctx1, config1);
let myChart2 = new Chart(ctx2, config2);
let myChart3 = new Chart(ctx3, config3);

// 현재 차트 숫자를 기억하고 있는 변수
let chartNum = 4;

document.getElementById('create').onclick = function () {

    let name = document.getElementById("name").value;
    let power = document.getElementById("power").value;
    let dex = document.getElementById("dex").value;
    let int = document.getElementById("int").value;
    let luck = document.getElementById("luck").value;
    let hp = document.getElementById("hp").value;
    let def = document.getElementById("def").value;

    let newConfig = {
        type: 'radar',
        data: {
            labels: ['힘', '민첩', '지능', '운', '체력', '방어력'],
            datasets: [{
                label: name,
                data: [power, dex, int, luck, hp, def],
                borderWidth: 5
            }
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                },
                r: {
                    beginAtZero: true
                }
            }
        }
    }

    // canvas 태그 생성
    let newMyChart = document.createElement("canvas");
    newMyChart.setAttribute("id", "myChart" + chartNum);
    newMyChart.setAttribute("width", 100);
    newMyChart.setAttribute("height", 100);
    newMyChart.setAttribute("onclick", "dest("+ chartNum +")");

    let grapDiv = document.getElementById("grapDiv");
    grapDiv.appendChild(newMyChart);

    new Chart(newMyChart, newConfig);

    chartNum++

}

function dest(i) {
    document.getElementById("myChart" + i).remove();
}