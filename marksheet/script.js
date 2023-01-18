function check() {
  let sub1 = document.getElementById("sub1").value;
  let sub2 = document.getElementById("sub2").value;
  let sub3 = document.getElementById("sub3").value;
  let sub4 = document.getElementById("sub4").value;
  let sub5 = document.getElementById("sub5").value;

  if (sub1 == "") {
    document.getElementById("s1error").innerHTML =
      "<b>This field is required</b>";
  } else if (sub1 > 100) {
    document.getElementById("s1error").innerHTML =
      "<b>Mark is not bigger then 100</b>";
  } else {
    document.getElementById("s1error").innerHTML = "";
  }

  if (sub2 == "") {
    document.getElementById("s2error").innerHTML =
      "<b>This field is required</b>";
  } else if (sub2 > 100) {
    document.getElementById("s2error").innerHTML =
      "<b>Mark is not bigger then 100</b>";
  } else {
    document.getElementById("s2error").innerHTML = "";
  }

  if (sub3 == "") {
    document.getElementById("s3error").innerHTML =
      "<b>This field is required</b>";
  } else if (sub3 > 100) {
    document.getElementById("s3error").innerHTML =
      "<b>Mark is not bigger than 100</b>";
  } else {
    document.getElementById("s3error").innerHTML = "";
  }

  if (sub4 == "") {
    document.getElementById("s4error").innerHTML =
      "<b>This field is required</b>";
  } else if (sub4 > 100) {
    document.getElementById("s4error").innerHTML =
      "<b>Mark is not bigger than 100</b>";
  } else {
    document.getElementById("s4error").innerHTML = "";
  }

  if (sub5 == "") {
    document.getElementById("s5error").innerHTML =
      "<b>This field is required</b>";
  } else if (sub5 > 100) {
    document.getElementById("s5error").innerHTML =
      "<b>Mark is not bigger then 100</b>";
  } else {
    document.getElementById("s5error").innerHTML = "";
  }
}

function result() {
  let sub1 = Number.parseInt(document.getElementById("sub1").value);

  let sub2 = Number.parseInt(document.getElementById("sub2").value);

  let sub3 = Number.parseInt(document.getElementById("sub3").value);

  let sub4 = Number.parseInt(document.getElementById("sub4").value);

  let sub5 = Number.parseInt(document.getElementById("sub5").value);

  let per = (sub1 + sub2 + sub3 + sub4 + sub5) / 5;
  
  if (per < 40) {
    document.getElementById(
      "percentage"
    ).innerHTML = `<b>Percentage = ${per}</b>`;

    document.getElementById("result").innerHTML = "<b>You are fail</b>";
  } else if (per >= 40 && per <= 60) {
    document.getElementById(
      "percentage"
    ).innerHTML = `<b>Percentage = ${per} </b>`;

    document.getElementById("result").innerHTML = "<b> Pass </b>";
  } else if (per > 60 && per <= 70) {
    document.getElementById(
      "percentage"
    ).innerHTML = `<b>Percentage = ${per} </b>`;

    document.getElementById("result").innerHTML = "<b> Distinction </b>";
  } else if (per > 70 && per <= 80) {
    document.getElementById(
      "percentage"
    ).innerHTML = `<b>Percentage = ${per} </b>`;

    document.getElementById("result").innerHTML = "<b> Distinction + Good </b>";
  } else if (per > 80 && per <= 90) {
    document.getElementById(
      "percentage"
    ).innerHTML = `<b>Percentage = ${per} </b>`;

    document.getElementById("result").innerHTML = "<b> Excellent </b>";
  } else if (per > 90) {
    document.getElementById(
      "percentage"
    ).innerHTML = `<b>Percentage = ${per} </b>`;

    document.getElementById("result").innerHTML = "<b> Super Excellent </b>";
  }
}
