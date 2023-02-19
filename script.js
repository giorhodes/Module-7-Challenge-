$(document).ready(function() {
    // listen for save button clicks
    $(".savebutton").on("click", function() {
      console.log("it saved");
  
      let timeID = $(this).parent().attr("id");
      let value = $(this).siblings(".description").val();
  
      console.log(timeID);
      console.log(value);
  
      localStorage.setItem(timeID, value);
  
      $(".notification").addClass("show");
  
      setTimeout(function() {
        $(".notification").removeClass("show");
      }, 5000);
    });
  
    function hourupdate() {
      let currentHour = moment().hour();
      $(".time-block").each(function() {
        let blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockHour);
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
      });
    }
  
    hourupdate();
  
    // display saved values on page reload
    $(".time-block").each(function() {
      let timeID = $(this).attr("id");
      let value = localStorage.getItem(timeID);
  
      if (value) {
        $(this).find(".description").val(value);
      }
    });
  });
  




   