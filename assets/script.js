// shows current date on the html
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var storageCheck = function () {
  var timeBlocks = {
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
  };

  if (localStorage.getItem("tasks") === null) {
    localStorage.setItem("tasks", JSON.stringify(timeBlocks));
  }
};

var displayStored = function () {
  var tasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(tasks);
  for (let i = 8; i < 18; i++) {
    $("#" + i + "t").val(tasks[i]);
    var currentTime = parseInt(moment().format("H"));
    if (currentTime < i) {
      $("#" + i + "t").addClass("future");
    } else if (currentTime === i) {
      $("#" + i + "t").addClass("present");
    } else if (currentTime > i) {
      $("#" + i + "t").addClass("past");
    }
  }
};

storageCheck();
displayStored();
$(".save-btn").on("click", function () {
  var time = $(this).data("time");
  var text = $("#" + time + "t").val();
  console.log(text);
  // read from localStorage and parse

  var tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks[time] = text;
  // change the value of what the text to a variable
  localStorage.setItem("tasks", JSON.stringify(tasks));
  // write object back to localStorage similar to line 30
});
