
const areInputsEmpty = () => {
  const button = document.querySelector(".formButton");
  let inputs = document.querySelectorAll(".input_form");
  inputs.forEach((input) => {
    if (input.value == "") button.setAttribute("disabled", "true");
  });
};

export const checkValidityMail = (email, element) => {
  const button = document.querySelector(".formButton");

  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regex.test(email)) {
    document.getElementById(element).style.background = "#FD2D01";
    button.setAttribute("disabled", "true");
  } else {
    document.getElementById(element).style.background = "green";
    button.removeAttribute("disabled");
    areInputsEmpty();
  }
};

export const checkValidityPW = (password, element) => {
  const button = document.querySelector(".formButton");

  const regex = /^(?=.{8,}$)/;
  if (!regex.test(password)) {
    document.getElementById(element).style.background = "#FD2D01";
    button.setAttribute("disabled", "true");
  } else {
    document.getElementById(element).style.background = "lightgreen";
    button.removeAttribute("disabled");
    areInputsEmpty();
  }
};

export const isPasswordChangeValid = (password, element) => {
  const button = document.getElementById("modify_password");

  const regex = /^(?=.{8,}$).*$/;
  if (!regex.test(password)) {
    document.getElementById(element).style.background = "#FD2D01";
    button.setAttribute("disabled", "true");
  } else {
    document.getElementById(element).style.background = "lightgreen";
    button.removeAttribute("disabled");
    
  }
};

