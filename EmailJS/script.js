// email 전송 가능한 객체 가져오기
(function() {
    // 모든 html요소가 로드 되면 실행되는 함수
    emailjs.init("yUnGSTSd9uXmHjZ0f");
})();


function sendMail() {
    let from_name = document.querySelector("input[name='from_name']").value;
    let name = document.querySelector("input[name='name']").value;
    let to_name = document.querySelector("input[name='name']").value;
    let email = document.querySelector("input[name='email']").value;
    let message = document.querySelector("textarea[name='message']").value;
    
    // parameter 방식으로 변환
    let params = {
        from_name : from_name,
        name : name,
        to_name : to_name,
        email : email,
        message : message
    }

    console.log(params);
    
    emailjs.send("service_dq8ct7g", "template_c70nght", params).then(function (res) {
        alert("이메일 발송이 완료되었습니다.")
    })

}
