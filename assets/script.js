// shows current date on the html
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// create and edit text box
var tasks = {};

var createTask = function(taskText, taskDate, taskList) {
  // create elements that make up a task item
  var taskLi = $("<li>").addClass("events");
  var taskSpan = $("<span>")
    .addClass("badge badge-primary badge-pill")
    .text(taskDate);
  var taskP = $("<p>")
    .addClass("m-1")
    .text(taskText);

};

$(".events").on("click", function() {
    var text = $(this).text();
  
    var textInput = $("<textarea>")
      .addClass("form-control")
      .val(text);
  
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    console.log(this)
  });