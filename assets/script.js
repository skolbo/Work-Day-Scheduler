$(document).ready(function() {

    var today = moment().format('LLLL');
    $('#currentDay').text(today);

    var workHour = moment().hours()

    $('.timeBlock').each(function() {
        var dayHours = parseInt(
            $(this).attr('id')
        )
        if(dayHours < workHour) {
            $(this).children('.description').addClass('past');
        } else if
        (dayHours === workHour) {
            $(this).children('.description').addClass('present');
        } else {
            $(this).children('.description').addClass('future');
        }
    })

    $(".saveBtn").on('click', function() {
        var saveTask = $(this).siblings('.description').val();
        var taskText = $(this).parent().attr('id');
        localStorage.setItem(taskText, saveTask);
        console.log(saveTask, taskText);
    });

    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#13pm .description").val(localStorage.getItem("1pm"));
    $("#14pm .description").val(localStorage.getItem("2pm"));
    $("#15pm .description").val(localStorage.getItem("3pm"));
    $("#16pm .description").val(localStorage.getItem("4pm"));
    $("#17pm .description").val(localStorage.getItem("5pm"));
    
});
