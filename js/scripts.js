$(document).ready(function(){

  $("#btn-holder").click(function(event) {

    var nameInput = $("#name").val();
    var q1Input = $("#q1").val();
    var q2Input = $("#q2").val();
    var q3Input = $("#q3").val();
    var q4Input = $("#q4").val();
    var q5Input = $("#q5").val();
    var q5InputFull = $("#q5full").val();
    var q5InputPart = $("#q5part").val();

    $(".name").text(nameInput);
    $(".q1").text(q1Input);
    $(".q2").text(q2Input);
    $(".q3").text(q3Input);
    $(".q4").text(q4Input);
    $(".q5").text(q5Input);



    if(nameInput ==="") {
    alert("Please enter your name.")

    }else if (q1Input === "Aesthetics of a website" && q2Input === "No" && q3Input === "No" && q4Input === "Web layout"){
    // $("#cssResult").show();
    alert("css test")

    }else if(q1Input === "Overall functionality of a website" && q2Input === "No" && q3Input === "Yes" && q4Input === "Web development"){
    $("#cResult").show();
    alert("c test")

    }else if(q1Input === "Overall functionality of a website" && q2Input === "No" && q3Input === "No" && q4Input === "Web development"){
    $("#phpResult").show();
    alert("php test")

    }else if(q1Input ==="Overall functionality of a website" && q2Input === "Yes" && q3Input === "No" && q4Input === "App development"){
    $("#rubyResult").show();
    alert("ruby test")

    }else if(q2Input ==="Yes" && q3Input === "Yes" && q4Input === " App development"){
    $("#javaResult").show();
    alert("java test")

    }else if (q5Input === "Full time"){
    $("#q5full").show;
    alert("full")
    
    }else if(q5Input === "Part time"){
    $("#q5part").show;
    alert("part")
  }
    // }else () {

  event.preventDefault();

  });
});
