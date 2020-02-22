$(function() {
    $(".changeState").on("click", function(event) {
      var id = $(this).data("id");
      var devour = $(this).data("devoured");
  
      var devourState = {
        devoured: devour
      };
  
      console.log(devourState); 
      console.log(id); 
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourState
      }).then(
        function() {
          console.log("changed to: ", devourState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".burgerForm").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger_name").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      console.log('newBurger: ' + newBurger);
      console.log('name: ' + newBurger.burger_name);
      console.log('devoured: ' + newBurger.devoured);
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $('.deleteBurger').on('click', function(event) {
      console.log('delete button clicked!'); 
      event.preventDefault();
      var id = $(this).data("id");
      console.log(id); 
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted id ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }); 
  
  }); 