const slideWrap = $(".slide-wrap"),
  slideShow = slideWrap.find(".slide-show"),
  slideList = slideShow.find(".slide-list"),
  slides = slideList.find(".slide"),
  slideBtn = slideWrap.find(".slide-btn");

let slideCount = slides.length,
  slideWidth = slides.innerWidth(),
  showNum = 3,
  num = 0,
  currentIndex = 0,
  slideCopy = $(".slide:lt(" + showNum + ")").clone();
slideList.append(slideCopy);

function backShow() {
  if (num == 0) {
    //시작
    num = slideCount;
    slideList.css("left", -num * slideWidth + "px");
  }
  num--;
  slideList.stop().animate({ left: -slideWidth * num + "px" }, 400);
}
function nextShow() {
  if (num == slideCount) {
    //마지막
    num = 0;
    slideList.css("left", num);
  }
  num++;
  slideList.stop().animate({ left: -slideWidth * num + "px" }, 400);
}

slideBtn.on("click", "button", function () {
  if ($(this).hasClass("prev")) {
    backShow();
  } else {
    nextShow();
  }
});
