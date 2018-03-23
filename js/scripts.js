$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());
    var question5 = parseInt($("#question5").val());
    var sum = question1 + question2 + question3 + question4 + question5;
    if(sum <= 7){
      alert("Ruby/Rails");
    }
    else if(sum <= 11){
      alert("Java/Android");
    }
    else if(sum <= 15){
      alert("CSS/React");
    }
    else{
      alert("C#/.NET");
    }
    event.preventDefault();
  });
});
