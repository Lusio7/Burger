// Function for event listeners
$(function() {

    $(".create-form").on("submit", function(event) {
      // Prevents Default on a submit event
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger-input").val().trim(),
      };

      // Input validation
      if(newBurger.name === ""){
        alert("Enter a burger plese");
        return;
      }
  
      // Send the POST request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get updated data
          location.reload();
        }
      );
    });

    $(".devoure").on("click", function(event){
      var id = $(this).data("id");

      // Update request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          console.log("Devoured the burger");
          // Reload the page to get updated data
          location.reload();
        }
      );
    });

    $("#clear-btn").on("click", function(event){
      //Delete request
      $.ajax("/api/burgers", {
        type: "DELETE",
      }).then(
        function() {
          console.log("Cleared burgers' data");
          // Reload the page to get the updated data
          location.reload();
        }
      );
    });
});
  