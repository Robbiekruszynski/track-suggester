$(document).ready(function(){

  $("#btn-holder").click(function(event) {

    var nameInput = $("#name").val();
    var q1Input = $("#q1").val();
    var q2Input = $("#q2").val();
    var q3Input = $("#q3").val();
    var q4Input = $("#q4").val();
    var q5Input = $("#q5").val();
    var q6Input = $("#q6").val();

    $(".name").text(nameInput);
    $(".q1").text(q1Input);
    $(".q2").text(q2Input);
    $(".q3").text(q3Input);
    $(".q4").text(q4Input);
    $(".q5").text(q5Input);
    $(".q6").text(q6Input);


    if(nameInput ==="") {
    alert("Please enter your name.")

  }else if (q1Input === "Aesthetics of a website" && q2Input === "No" || q2Input === "Yes" && q3Input === "No" || q3Input === "Yes" && q4Input === "Web layout" && q5Input === "Yes"){
    $("#user-result").show();
    $("#cssResult").show();
    $("#cssResult").siblings().hide();

  }else if(q1Input === "Overall functionality of a website" && q2Input === "No" && q3Input === "Yes" && q4Input === "Web development" && q5Input === "No"){
    $("#user-result").show();
    $("#cResult").show();
    $("#cResult").siblings().hide();

  }else if(q1Input === "Overall functionality of a website" && q2Input === "No" && q3Input === "No" || q3Input === "Yes" && q4Input === "Web development" && q5Input === "No"){
    $("#user-result").show();
    $("#phpResult").show();
    $("#phpResult").siblings().hide();

  }else if(q1Input === "Overall functionality of a website" && q2Input === "Yes" && q3Input === "No" && q4Input === "App development" && q5Input === "Yes" || q5Input === "No" || q5Input === "Yes"){
    $("#user-result").show();
    $("#rubyResult").show();
    $("rubyResult").siblings().hide();

  }else if(q1Input === "Both, equally" || q1Input === "Overall functionality of a website" && q2Input === "Yes" && q3Input === "Yes" || q3Input === "No" && q4Input === "App development" || q4Input === "Web development" && q5Input === "No" || q5Input === "Yes"){
    $("#user-result").show();
    $("#javaResult").show();
    $("#javaResult").siblings().hide();

  }
  event.preventDefault();

  });
});
