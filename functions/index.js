/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function show_nav() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }