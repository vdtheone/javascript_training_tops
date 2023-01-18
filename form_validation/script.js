function check() {
  let name = document.getElementById("username");
  let password = document.getElementById("password");
  let email = document.getElementById("email");
  let mobile = document.getElementById("mobile");

  console.log(name.value);

  if (name.value == "") {
    document.getElementById("usernameerror").innerHTML =
      "<b> This field is required</b>";
  } else {
    document.getElementById("usernameerror").innerHTML = "";
  }

  if (password.value == "") {
    document.getElementById("passworderror").innerHTML =
      "<b>This field is required</b>";
  } else {
    document.getElementById("passworderror").innerHTML = "";
  }

  if (mobile.value == "") {
    document.getElementById("mobileerror").innerHTML =
      "<b>This field is required</b>";
  } else {
    document.getElementById("mobileerror").innerHTML = "";
  }

  if (email.value == "") {
    document.getElementById("emailerror").innerHTML =
      "<b>This field is required</b>";
  } else {
    document.getElementById("emailerror").innerHTML = "";
  }
}
