/* 
    [기능 정의]
    1. 로그인/회원가입 버튼 클릭 시, login.html 로 이동한다.
    2. 로그인이 성공했을 때, 로그인섹션은 숨김처리하고 CRUD섹션을 보여준다.
    3. 로그인 상태를 확인하고 이메일 계정을 출력한다.
*/

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", () => {

    // location : 브라우저의 주소 관련된 정보를 가지고 있는 객체
    // href속성 : 현재 브라우저의 주소값 반환. 
    //            다른 URL로 초기화할 경우 -> 페이지 이동
    location.href = "login.html";
})