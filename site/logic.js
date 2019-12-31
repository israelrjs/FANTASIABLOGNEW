$("#articles");

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    $("#articles").hide();
  } else {
    $("#articles").show();
  }
}

var x = window.matchMedia("(max-width: 414px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
