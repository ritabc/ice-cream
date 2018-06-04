$(document).ready(function() {
var flavors = ['chocolate', 'peppermint', 'pisatchio', 'vanilla', 'strawberry'];
flavors.forEach(function(flavor) {
  //var = favFlavors[]
  $('ul#cream').append("<li>" + flavor + "</li>");
});

});
