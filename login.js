function login() {
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;

  // SET CORRECT DETAILS
  const correctName = "Vishali";
  const correctDOB = "2002-08-10"; // change if needed

  if (name === correctName && dob === correctDOB) {
    document.getElementById("status").innerText = "Login Successful 💖";
    setTimeout(() => {
      window.location.href =
        `welcome.html?name=${encodeURIComponent(name)}`;
    }, 1500);
  } else {
    document.getElementById("status").innerText =
      "❌ Details don’t match… try again";
  }
}

function login() {
  const name = document.getElementById("name").value.trim().toUpperCase();
  const dob = document.getElementById("dob").value;

  // 🔒 CORRECT LOGIN DETAILS
  const correctName = "JAMPALA VISHALI";
  const correctDOB = "2003-12-30"; // HTML date format

  if (name === correctName && dob === correctDOB) {
    document.getElementById("status").innerText =
      "Login Successful 💖";

    setTimeout(() => {
      window.location.href =
        `welcome.html?name=${encodeURIComponent(name)}`;
    }, 1500);

  } else {
    document.getElementById("status").innerText =
      "❌ Name or Date of Birth is incorrect";
  }
}
