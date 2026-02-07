function validateForm() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            let error = "";

            if (name === "") {
                error = "Name is required";
            } else if (email === "") {
                error = "Email is required";
            } else if (!email.includes("@")) {
                error = "Enter a valid email address";
            } else if (message === "") {
                error = "Message is required";
            }

            if (error !== "") {
                document.getElementById("errorMsg").innerHTML = error;
                return false;
            }

            alert("Enquiry submitted successfully");
            return true;
}