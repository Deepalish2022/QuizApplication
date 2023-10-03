function sendemail() {
    Email.send({
        Host: "",
        Username: "@gmail.com",
        password: "password",
        To: "@gmail.com",
        From: document.getElementById("email").value,
        Subject: "Quiz App releted enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> email:" + document.getElementById("email").value
            + "<br> phone no:" + document.getElementById("phone no").value
            + "<br> massage:" + document.getElementById("massage").value
    }).then(
        massage => alert(massage)
    );
}
