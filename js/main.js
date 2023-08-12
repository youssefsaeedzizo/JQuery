$(".inner-header").click(function () {
  $(this).next().slideToggle(500);
  $(".inner-content").not($(this).next()).slideUp(500);
});


$("#icon-bar").click(function () {
  let left = $("#side-bar").outerWidth(true);
  let status = $("#side-bar").css("display");
  if (status == "none") {
    $("#side-bar").css("display", "flex");
    $(this).css("left", left + 10 + "px");
    
  } else {
    $("#side-bar").css("display", "none");
    $("#icon-bar").css("left", "15px");
  }
});


$(".close-icon").click(function () {
  $("#side-bar").css("display", "none");
  $("#icon-bar").css("left", "15px");
});

setInterval(function () {
  let myDate = new Date();
  let eventDate = new Date("01:01:2024");
  let actualDate = eventDate - myDate;
  let days = actualDate / (24 * 60 * 60 * 1000);
  let hours = 24 - myDate.getHours();
  let minutes = 60 - myDate.getMinutes();
  let seconds = 60 - myDate.getSeconds();
  $("#days").html( Math.floor(days) + " D") 
  $("#hours").html(hours + " H") 
  $("#mintes").html(minutes + " M") 
  $("#seconds").html( seconds + " S") 
}, 1000);


$("#messageInput").keyup(function(){
  if(messageInput.value.length >= 100){
    $("#number-char").html("your available character finished")
  }
  else{
    $("#number-char").html(100 - messageInput.value.length)
  }
})

$(".nav-link").click(function(){
  $(this).addClass("active");
  $("a").not(this).removeClass('active')
  let href = $(this).attr("href")
  let sectionTop = $(href).offset().top
  $("html,body").animate({scrollTop: sectionTop},{duration:3000,queue:false})

})


