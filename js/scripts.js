$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());
    var question5 = parseInt($("#question5").val());
    var sum = question1 + question2 + question3 + question4 + question5;
    if(sum <= 7){
      $("#ruby").show();
      $("#java").hide();
      $("#css").hide();
      $("#cSharp").hide();
    }
    else if(sum <= 11){
      $("#java").show();
      $("#ruby").hide();
      $("#css").hide();
      $("#cSharp").hide();
    }
    else if(sum <= 15){
      $("#css").show();
      $("#java").hide();
      $("#ruby").hide();
      $("#cSharp").hide();
    }
    else{
      $("#cSharp").show();
      $("#java").hide();
      $("#css").hide();
      $("#ruby").hide();
    }
    event.preventDefault();
  });
});
