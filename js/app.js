jQuery(document).ready(function() {
  console.log($('ul').children());
  console.log($('ul:first'));
  var lista =$("ul").children();
  console.log(lista.eq(0).addClass("textColor").text());
});
