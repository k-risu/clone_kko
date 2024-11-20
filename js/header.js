// jQuery 의 목적은 2가지
// html 및 css 제어, 외부데이터 연동
// jQuery( ) => $( )
// html 과 css 가 화면에 보일 준비 끝나면
// image, font, mp3, mp4 는 로딩 체크를 못함.
// window.addEventListener("DOMContentLoaded", function(){});
$(document).ready(function () {
  // header 라는 변수에 class="header" 의 값을 담는다.
  var header = $(".header");
  // scroll 체크하기
  $(window).on("scroll", function () {
    // scrollPositionY 라는 변수에 window.scrollY 값을 담는다.
    var scrollPositionY = $(window).scrollTop();
    if (scrollPositionY > 0) {
      // header 에 class 추가하기
      header.addClass("header-active");
    } else {
      // header 에서 class 제거하기
      header.removeClass("header-active");
    }
  });
});

// 이미지 바꾸기 및 메뉴 펼침
$(document).ready(function () {
  // 1. 버튼 역할하는 id 찾기
  var mobileButton = $("#mb-menu-bt");

  // 2. 버튼 안에 있는 이미지를 찾기 - css 와 유사한 방식
  var mobileButtonImage = $("#mb-menu-bt img");

  // 3. 버튼 안에 있는 이미지의 src 는 무엇일까?
  // const srcString = mobileButtonImage.getAttribute("src");
  // console.log(srcString);

  // 4. 버튼 클릭 처리
  var openIcon = "./images/icon/icon-hbr.png";
  var closeIcon = "./images/icon/icon-close.png";

  // 모바일 메뉴 관련 내용을 찾아서 이름을 주고 보관하자
  // 1. 모바일 배경
  var mobileMenuBg = $(".bg-mb-menu");

  // 2. 모바일 메뉴
  var mobileMenu = $(".mb-menu");

  mobileButton.on("click", function () {
    // <img src=""/> 에 담겨진 문자를 수정하기
    var imageSrc = mobileButtonImage.attr("src");

    if (imageSrc == openIcon) {
      // 이미지의 src 를 교체하겠다
      mobileButtonImage.attr("src", closeIcon);
      mobileMenuBg.addClass("bg-mb-menu-active");
      mobileMenu.addClass("mb-menu-active");
    } else {
      mobileButtonImage.attr("src", openIcon);
      mobileMenuBg.removeClass("bg-mb-menu-active");
      mobileMenu.removeClass("mb-menu-active");
    }
  });

  // 반응형
  $(window).on("resize", function () {
    // 웹브라우저의 너비를 체크한다
    var windowWidth = $(window).width();
    // css 코드에 반응형이 1024px 부터 적용
    if (windowWidth > 1024) {
      // 모바일 메뉴 버튼을 원래대로 되돌린다
      mobileButtonImage.attr("src", openIcon);
      mobileMenuBg.removeClass("bg-mb-menu-active");
      mobileMenu.removeClass("mb-menu-active");
    }
  });
});
