$(function() {
  $(".list_txt .list_txt_li a").click(function() {
    $(".list_txt .active .list_txt_li_con").slideUp();
    $(".list_txt .list_txt_li").removeClass("active");
    if($(this).next(".list_txt_li_con").is(":hidden")){
      $(this).parent().addClass("active").find(".list_txt_li_con").slideDown();
    }
  })
});