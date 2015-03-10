var flipbook = function () {
    var images= $(".slide .snack")
    images.hide();
    images.eq(_.random(0,3)).show()

}
      
       // color = "#f295cd";
     

      //  color = "#63dde7";
function myFunction() {
    document.getElementById("myForm").submit();
}

setInterval(flipbook, 200)