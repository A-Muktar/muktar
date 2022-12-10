function sendEmail(){
    Email.send({
        SecureToken : "136a0ad1-01ca-453b-b8fb-fac251e0f585",
        To : 'amuktar064@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New enguiry",
        Body : "Name: " + document.getElementById("name".value) 
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("msg").value


    }).then(
      message => alert("Message sent successfully, We will get back to you")
    );
}