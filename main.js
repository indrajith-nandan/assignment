

const signupbutton = document.getElementById("sup");
const signinbutton = document.getElementById("sin");
const aboutbutton = document.getElementById("about");
const backbutton = document.getElementById("back");
const container = document.getElementById("container");

signupbutton.addEventListener("click", () =>
  container.classList.add("panel_up")
);

signinbutton.addEventListener("click", () =>
  container.classList.remove("panel_up")
);

aboutbutton.addEventListener("click", () =>
  container.classList.add("panel_down")
);
backbutton.addEventListener("click", () =>
  container.classList.remove("panel_down")
);
