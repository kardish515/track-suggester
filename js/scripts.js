$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());
    var question5 = parseInt($("#question5").val());
    var nameInput = $("input#name").val();
    var sum = question1 + question2 + question3 + question4 + question5;
    $(".name1").append(nameInput);
    if(sum <= 7){
      $("#ruby").fadeIn();
      $("#header").hide();
    }
    else if(sum <= 11){
      $("#java").fadeIn();
      $("#header").hide();
    }
    else if(sum <= 15){
      $("#css").fadeIn();
      $("#header").hide();
    }
    else{
      $("#cSharp").fadeIn();
      $("#header").hide();
    }
    event.preventDefault();
  });
});
