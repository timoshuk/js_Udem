$(document).ready(function() {
  $(".main_btna, .main_btn, a[href='#sheldure']").on("click", function() {
    $(".overlay").show("slow");
    $(".modal").show("slow");
  });

  $(".close").on("click", function() {
    $(".overlay").hide("slow");
    $(".modal").hide("slow");
  });
});
