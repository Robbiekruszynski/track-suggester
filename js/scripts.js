css
q1 = Aesthetics of a website

q2 = No
q3 = No
q4 = Web layout

c#
q1 = Overall functionality of a website
q2 = No
q3 = Yes
q4 = Web development

PHP
q1 = Overall functionality of a website
q2 = NULL
q3 = No
q4 = Web development


Ruby
q1 = NULL
q2 = Yes
q3 = No
q4 = App development

Java
q1 = NULL
q2 = Yes
q3 = Yes
q4 = App development

part / full
Full time
Part time

$(document).ready(function(){

  $("#btn-holder").click(function(event) {

  var nameInput = $("#name").val();
  var q1Input = $("#q1").val();
  var q2Input = $("q2").val();
  var q3Input = ("#q3").val();
  var q4Input = ("q4").val();
  var q5InputFull = ("#q5full").val();
  var q5InputPart = ("#q5part")

  if(nameInput ==="") {
  alert("Please enter your name.")

} else if (q1Input ==="Aesthetics of a website" && q2Input === "No" && Input === "No" && q4Input "Web development")}
$("#cssResult").show();

} else if (q5InputFull) ==="Full time"){
  $("#q5full").show;

}else if (q1)


event.preventDefault();


});
