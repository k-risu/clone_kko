window.addEventListener("load", function () {
  const MAIN_DATA_URL = "/apis/main.json";

  fetch(MAIN_DATA_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      let mainSlideImg = "";

      for (let i = 0; result[i] != null; i++) {
        let obj = result[i];
        // 변경 : 지금의 내용은 문법 아닙니다.
        // 변경 : 지금 변경되는 내용은 프로그래머가 생각을 표현하고 문제 해결시도
        const tag = `
        <div class="swiper-slide" data-pc="${obj.pc}" data-mb="${obj.mb}">
                  <a href="${obj.url}" style="position: relative;">
                    <img src="/images/${obj.pic}" alt="${obj.title}" />
                  </a>
                  <div style="
                  position:absolute; bottom: 0; right: 0; color:#ffffff;
                   padding: 40px 40px; font-size: 40px; font-weight:700; text-align: right;">${obj.title}</div>
                </div>
        `;
        mainSlideImg += tag;
      }
      const mainTag = document.querySelector(".visual-slide .swiper-wrapper");
      //   console.log(mainSlideImg);

      mainTag.innerHTML = mainSlideImg;

      const slideList = document.querySelectorAll(
        ".visual-slide .swiper-wrapper .swiper-slide",
      );
      // console.log("innerHtml 이후 ", slideList);

      // 키핑
      slideList.forEach(function (aaa) {
        // console.log(aaa);
      });

      //추가 : 현재 pc 화면인지 아닌지를 먼저 구분합니다.
      //추가 : 현재 어떤 상태인지를 먼저 저장해 둡니다.
      //추가 : 우리는 document.querySelect 로
      // .visual-slide .swiper-wrapper .swiper-slide 를 찾을 수 있는가?

      window.addEventListener("resize", function () {
        // 윈도우 너비 파악
        const windowWidth = window.innerWidth;
        let windowState = "PC";
        // console.log(windowWidth);

        if (windowWidth > 1024) {
          if (windowState != "pc") {
            windowState = "PC";
            // console.log("PC 버전");
          }
        } else {
          if (windowState != "MB") {
            windowState = "MB";
            // console.log("MB 버전"ㄴ);
          }
        }
      });

      const tagRight = `
      <div class="card-slide" style="position: relative;object-fit: cover;">
        <a href="#" >
        <img src="/images/c3.png" alt="배너이미지"  />
        </a>
        <div style="
            position:absolute; bottom: 0; right: 0; color:#ffffff;
            padding: 40px 40px; font-size: 40px; font-weight:700; text-align: right;">
            영업 중
            </div>
      </div>
    `;
      const mainTagRight = document.querySelector(".right");
      mainTagRight.innerHTML = tagRight;
    })
    .catch();
});
