function validateForm() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;
    var isValid = true;
  
    if (!/^[a-zA-Z]{6,}$/.test(firstname)) {
      alert("First Name should contain only alphabets and should be at least 6 characters long");
      isValid = false;
    }
  
    if (!/^[a-zA-Z]{1,}$/.test(lastname)) {
      alert("Last Name should not be empty");
      isValid = false;
    }
  
    if (address.trim() === "") {
      alert("Address should not be empty");
      isValid = false;
    }
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert("Invalid email address");
      isValid = false;
    }
  
    if (password.length < 6) {
      alert("Password should be at least 6 characters long");
      isValid = false;
    }
  
    if (!/^\d{10}$/.test(mobile)) {
      alert("Mobile number should contain 10 digits only");
      isValid = false;
    }
  
    if (isValid) {
      var toast = document.getElementById("toast");
      toast.innerHTML = "Registration successful!";
      toast.classList.add("show");
  
      // Hide the toast message after 3 seconds
      setTimeout(function() {
        toast.classList.remove("show");
      }, 3000);
    }
  
    return isValid;
  }
  