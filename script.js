$("#currentDay").text(moment().format("MMM Do YY"))

//var timeclass = "past"

//$(".container").append(`<textarea class= "` + timeclass + `" rows="3"></textarea>`)

$("button").on("click", function () {
    var input = $("#inputext").val().trim();


    localStorage.setItem("9am", input);


})

$("button1").on("click", function () {
    var input = $("#inputext1").val().trim();


    localStorage.setItem("10am", input);


})

$("button2").on("click", function () {
    var input = $("#inputext2").val().trim();


    localStorage.setItem("11am", input);


})

$("button3").on("click", function () {
    var input = $("#inputext3").val().trim();


    localStorage.setItem("12pm", input);


})

$("button4").on("click", function () {
    var input = $("#inputext4").val().trim();


    localStorage.setItem("1pm", input);


})

$("button5").on("click", function () {
    var input = $("#inputext5").val().trim();


    localStorage.setItem("2pm", input);


})

$("button6").on("click", function () {
    var input = $("#inputext6").val().trim();


    localStorage.setItem("3pm", input);


})

$("button7").on("click", function () {
    var input = $("#inputext7").val().trim();


    localStorage.setItem("4pm", input);


})

$("button8").on("click", function () {
    var input = $("#inputext8").val().trim();


    localStorage.setItem("5pm", input);


})




