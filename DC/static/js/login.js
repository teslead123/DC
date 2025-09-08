var username2 = ""

// Get CSRF token function
function getCSRFToken() {
    return document.querySelector('[name=csrfmiddlewaretoken]').value;
}

function new_usercheck() {
    var username1 = document.getElementById("username");
    var username = username1.value;
    var errormsg = document.getElementById("errormsg");
    var username_container = document.getElementById("username-container");
    var password_container = document.getElementById("password-container");
    username2 = username

    if (username === "") {
        errormsg.style.display = "block";
        errormsg.innerHTML = "Field should not be empty";
        errormsg.style.color = "brown";
        username1.style.border = "1px solid brown";
        return;
    } else {
        var formdata = new FormData();
        formdata.append('username', username);
        formdata.append('csrfmiddlewaretoken', getCSRFToken());

        fetch('/new_username/', {
            method: 'POST',
            body: formdata,
            headers: {
                'X-CSRFToken': getCSRFToken()
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data.status);
            if (data.status == "success") {
                errormsg.innerHTML = ""; 
                username1.style.border = "1px solid green"; 
                username_container.classList.add("hidden");
                password_container.classList.remove("hidden");
                document.getElementById("pwdname").innerHTML = "Hi " + username2.toUpperCase();
            } else {
                errormsg.innerHTML = data.message;
                errormsg.style.display = "block";
                errormsg.style.color = "brown";
                username1.style.border = "1px solid brown";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            errormsg.innerHTML = "An error occurred. Please try again later.";
            errormsg.style.display = "block";
            errormsg.style.color = "brown";
        });
    }
}

// Back button functionality
function backbtn() {
    location.reload();
}

function new_passwordcheck() {
    var password_field1 = document.getElementById('password_field');
    var password_field = password_field1.value;
    var errormsg1 = document.getElementById('errormsg1');
    var password_container = document.getElementById("password-container");
    var welcome_container = document.getElementById("welcome-container");

    if (password_field === "") {
        errormsg1.innerHTML = "Field should not be empty";
        errormsg1.style.display = "block";
        errormsg1.style.color = "brown";
        password_field1.style.border = "1px solid brown";
        return;
    } else {
        var formdata = new FormData()
        formdata.append('password', password_field)
        formdata.append('username', username2)
        formdata.append('csrfmiddlewaretoken', getCSRFToken());

        fetch('/new_pwd/', {
            method: "POST",
            body: formdata,
            headers: {
                'X-CSRFToken': getCSRFToken()
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.status === "success") {
                // Store in localStorage (this won't work in Claude artifacts but will work in your app)
                try {
                    localStorage.setItem("role", "user"); // Always user since no superuser
                    localStorage.setItem("username", username2);
                } catch (e) {
                    console.log("localStorage not available");
                }

                errormsg1.innerHTML = "";
                password_field1.style.border = "1px solid green";
                password_container.classList.add("hidden");
                welcome_container.classList.remove("hidden");
                document.getElementById("welcomename").textContent = "Hi " + username2.toUpperCase();

                setTimeout(() => {
                    // Since all users are regular users, always go to user dashboard
                    window.location.href = `/dashboard/`;
                }, 2000);
            } else {
                errormsg1.innerHTML = data.message;
                errormsg1.style.display = "block";
                errormsg1.style.color = "brown";
                password_field1.style.border = "1px solid brown";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            errormsg1.innerHTML = "An error occurred. Please try again later.";
            errormsg1.style.display = "block";
            errormsg1.style.color = "brown";
        });
    }
}

// Show password functionality
var checkbox1 = document.getElementById("checkbox1");
var password_field = document.getElementById("password_field");
var showpassword = document.getElementById("showpassword");

if (checkbox1 && password_field && showpassword) {
    checkbox1.addEventListener('change', function() {
        if (checkbox1.checked) {
            password_field.type = "text";
            showpassword.innerHTML = "Hide Password";
        } else {
            password_field.type = "password";
            showpassword.innerHTML = "Show Password";
        }
    });
}

// Special character filtering for username
const usernameInput = document.getElementById('username');
if (usernameInput) {
    usernameInput.addEventListener('input', function () {
        const cleaned = this.value.replace(/[^a-zA-Z0-9-_]/g, '');
        if (this.value !== cleaned) {
            this.value = cleaned;
        }
    });
}

// Username recovery function
function recoverUsername() {
    const employeeId = document.getElementById('employee_id').value;
    const recoveredUsernameField = document.getElementById('recovered_username');
    
    if (!employeeId.trim()) {
        alert('Please enter your Employee ID');
        return;
    }
    
    var formdata = new FormData();
    formdata.append('employee_id', employeeId);
    formdata.append('csrfmiddlewaretoken', getCSRFToken());
    
    fetch('/recover_username/', {
        method: 'POST',
        body: formdata,
        headers: {
            'X-CSRFToken': getCSRFToken()
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.status === 'success') {
            recoveredUsernameField.value = data.username;
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}

// Back to login function
function backToLogin() {
    location.reload();
}

// Remove the problematic event listener that was causing the error
// The newTestBtn element doesn't exist in your HTML
/*
document.addEventListener("DOMContentLoaded", function () {
    const newTestBtn = document.getElementById("newTestBtn");
    if (newTestBtn) {
        newTestBtn.addEventListener("click", function () {
            window.location.href = "/valvetest/";
        });
    }
});
*/