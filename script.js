//setting up moment format to have the right time and day.
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var displayHour = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"]

//setting i to 0 and creating div with in a div to accuses later.
for (var i = 0; i<hour.length; i++){
    var createTextarea = $("<textarea>")

    var creatediv = $("<div>").attr("id", `hour-${hour[i]}`)
        .attr("class", "row time-block").attr("value", hour[i])
    $(".container").append(creatediv)
    
    var currentTime = displayHour[i]
    //creating col with in jquery for 
    creatediv.append($("<div class = 'col-md-1 hour'>").text(currentTime))
    creatediv.append(createTextarea.attr("class", "col-md-10 description").attr("id", "memo-area"))
    creatediv.append($("<button class = 'button saveBtn col-md-1'>"))

    $("button").text("save")
//
    if(moment().format("H") == hour[i]){
        $("#hour-"+ hour[i]).addClass("present")
        } else if(moment().format("H")> hour[i]){
        $("#hour-"+ hour[i]).addClass("past")
        } else if(moment().format("H")< hour[i]){
        $("#hour-"+ hour[i]).addClass("future")
    }
}
$(".saveBtn").on("click", function(){
    var value = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    // epects a key then value 
    localStorage.setItem(time,value)
})
//time saves on to local storage 
$("#hour-9 .description").val(localStorage.getItem("hour-9"))

$("#hour-10 .description").val(localStorage.getItem("hour-10"))

$("#hour-11 .description").val(localStorage.getItem("hour-11"))

$("#hour-12 .description").val(localStorage.getItem("hour-12"))

$("#hour-13 .description").val(localStorage.getItem("hour-13"))

$("#hour-14 .description").val(localStorage.getItem("hour-14"))

$("#hour-15 .description").val(localStorage.getItem("hour-15"))

$("#hour-16 .description").val(localStorage.getItem("hour-16"))

$("#hour-17 .description").val(localStorage.getItem("hour-17"))
