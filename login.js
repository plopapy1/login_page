
function validate(){

    var username = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    const person = {
        username: "dan2020@gmail.com",
        password: "daniel2020"
       
    };

    if (username == person.username && password == person.password) {
        alert("login succefull");
    
        
    }else{
    
        alert("incorrect username or password");
    }
}