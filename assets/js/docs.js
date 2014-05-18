$(function () {
  var all_classes = "";
  var timer = undefined;
  $.each($('li', '.social-class'), function (index, element) {
    all_classes += " btn-" + $(element).data("code");
  });
  $('li', '.social-class').mouseenter(function () {
    var icon_name = $(this).data("code");
    if ($(this).data("icon")) {
      icon_name = $(this).data("icon");
    }
    var icon = "<i class='fa fa-" + icon_name + "'></i>";
    $('.btn-social', '.social-sizes').html(icon + "Sign in with " + $(this).data("name"));
    $('.btn-social-icon', '.social-sizes').html(icon);
    $('.btn', '.social-sizes').removeClass(all_classes);
    $('.btn', '.social-sizes').addClass("btn-" + $(this).data('code'));

  });
  $($('li', '.social-class')[Math.floor($('li', '.social-class').length * Math.random())]).mouseenter();
});

$(function () {
  var all_classes = "";
  var timer = undefined;
  $.each($('li', '.social-class'), function (index, element) {
    var icon_type = $(element).data("code");
    // var tokens = icon_type.split('-');
    // var icon_name = tokens.slice(0, tokens.length-1).join('-');
    all_classes += " btn-" + icon_type;
    all_classes += " btn-" + icon_type + "-transparent";
    all_classes += " btn-" + icon_type + "-half-transparent";
    // all_classes += " btn-" + icon_name;
  });
  $('li', '.social-class-alternate').mouseenter(function () {
    var icon_type = $(this).data("code");
    var tokens = icon_type.split('-');
    var icon_name = "";
    if (tokens[tokens.length-2] == "half")
      icon_name = tokens.slice(0, tokens.length-2).join('-');
    else
      icon_name = tokens.slice(0, tokens.length-1).join('-');
    var icon = "<i class='fa fa-" + icon_name + "'></i>";
    $('.btn-social', '.social-sizes-alternate').html(icon + "Sign in with " + $(this).data("name"));
    $('.btn-social-icon', '.social-sizes-alternate').html(icon);
    $('.btn', '.social-sizes-alternate').removeClass(all_classes);
    // console.log(all_classes.toString());
    $('.btn', '.social-sizes-alternate').addClass("btn-" + icon_name);
    $('.btn', '.social-sizes-alternate').addClass("btn-" + icon_type);

  });
  $($('li', '.social-class-alternate')[Math.floor($('li', '.social-class-alternate').length * Math.random())]).mouseenter();
});

function adjustBlur() {

  // Get scroll position
  var s = $(window).scrollTop(),
  // scroll value and opacity
  opacityVal = (s / $(document).height());
  // opacity value 0% to 100%
  $('#background-blur').css('opacity', opacityVal);
}

$(window).scroll(function() {
  adjustBlur();
});

$(document).ready(function() {
  adjustBlur();
});

