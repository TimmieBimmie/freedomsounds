

function openMenu() {
  var nav = document.getElementById("nav");
  if (screen.width < 500){
    nav.style.width = "100%";
  } else if (screen.width > 650 && screen.width < 800){
    nav.style.width = "40%";
  } else if (screen.width < 650){
    nav.style.width = "40%";
  } else if (screen.width > 800){
    nav.style.width = "30%";
  }
    else {nav.style.width = "100%";
}
  
}

  function closeMenu() {
    document.getElementById("nav").style.width = "0";
  } 


 