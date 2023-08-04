$(function () {

  if ($(window).width() > 768)
    $(".gnb").hover(function () {
      $(".header_wrap").addClass('on');
    }, function () {
      $(".header_wrap").removeClass('on');

    })
  if ($(window).width() > 768)
    $(".gnb>ul>li").hover(function () {
      $(".gnb").addClass('on');
    }, function () {
      $(".gnb").removeClass('on');
    });



  // 풀페이지
  $(".Main__content").fullpage({
    anchors: ["main", "main_introduce", "main_pipeline", "main_merit", "main_esg", "main_news", "main_recruit", "footer"],
    navigation: false,
    css3: false,
    responsiveWidth: 768,

    // 초기 셋팅
    afterRender: function () {

    },
    // 전환되고 나서
    afterLoad: function (lnk, idx) {


    },
    // 전환되기 직전에
    beforeLeave: function (idx, nidx, dir, origin) { },
    // 전환되는 중에
    onLeave: function (idx, nidx, dir) {
      // 풀페이지 메뉴 작동 시키기
      $(".aside li")
        .eq(nidx - 1)
        .addClass("on")
        .siblings()
        .removeClass("on");
      console.log(nidx);

      // 페이지별로 헤더 색 맞춰주기
      if (nidx == 4 || nidx == 6) {
        if ($(window).width() > 768)
          $(".header .header_wrap .inner").addClass("on");
        $(".aside").addClass("on");

      } else {
        if ($(window).width() > 768)
          $(".header .header_wrap .inner").removeClass("on");
        $(".aside").removeClass("on");
      }


      if (nidx == 5) {
        if ($(window).width() > 768)
          $(".sub04 .content .img_box").addClass("on");
      } else {
        if ($(window).width() > 768)
          $(".sub04 .content .img_box").removeClass("on");
      }

    },
  });



  /* visual */
  const MainSwiper = new Swiper('.main_slide', {
    effect: 'fade',
    speed: 1400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.vnext',
      prevEl: '.vprev',
    },
    pagination: {
      el: '.vpaging',
      clickable: true,
    },
    on: {
      slideChange: function () {
        $(".swiper-slide:eq(" + (this.realIndex + 1) + ")").addClass('on').siblings().removeClass("on")
      }
    },
  });


  // 스와이퍼 카드 뉴스 슬라이드
  const newsSlide = new Swiper('.news_slide', {
    loop: false,
    slidesPerView: 1,
    slidesPerGroupSkip: 1,
    spaceBetween: 0,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    pagination: {
      el: ".swiper-pagination02",
      type: "fraction",
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      }

    }
  });


  //탭
  $(".tab_link li").on("click", function (event) {
    event.preventDefault();

    let idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");

    $(".tab_content .con")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");

    console.log(
      event,
      event.target,
      event.currentTarget,
      $(this),
      $(this).index()
    );
  });


  // 모바일 메뉴 작동
  $('.gnb>ul>li>a').on('click', function (e) {

    if ($('.gnb').hasClass('on')) {
      e.preventDefault();
      $(this).next().stop().slideToggle();
      $(this).parent().siblings().find('.sub_menu').stop().slideUp();
    }
  });

  // 모바일 버튼  작동
  $('.mobile_btn').on('click', function () {
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
  })


  $(window).on('resize', function () {
    $('.gnb').removeClass('on');
    $('.sub_menu').removeAttr('style');
  })





});
