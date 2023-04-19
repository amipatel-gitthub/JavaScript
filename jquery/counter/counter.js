$(document).ready(function () {
  var count = 0;
  $(".f1").click(function () {
    count++;
    $("#counter").html(count);
  });

  $(".f2").click(function () {
    count = 0;
    $("#counter").html(count);
  });

  $(".f3").click(function () {
    if (count > 0) {
      count--;
    }
    $("#counter").html(count);
  });
});
