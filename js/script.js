$(document).ready(function(){
    $("nav > ul > li").hover(function(){
        // 마우스가 영역 내로 진입시
        $(this).find("ul").stop().slideDown();
        // this : 이벤트가 발생한 공간
        // find : 하위 요소 중에서 일부 요소를 선택;탐색 선택자
        // stop : 메모리에 의한 반복 실행을 막고 한번만 실행하도록 구성
    }, function(){
        // 마우스가 영역 밖으로 이탈시
        $(this).find("ul").stop().slideUp();
    })
});