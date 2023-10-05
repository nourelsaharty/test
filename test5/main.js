function validate(event){
    
    var name=document.getElementById("name").value;
    var lastname=document.getElementById("lastname").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value
    var error=document.getElementById("error");
    var text="";
    var submit=document.getElementById("submit").value
    
    if(name.length<6){
        alert("Please fill in all fields");
        event.preventDefault();
        return false;
        
    }
    else if(lastname.length<6){
        alert("Please fill in all fields");
    }
    else if(email.indexof("@"==-1)&& email.length<8){
        alert("Please fill in all fields");
        event.preventDefault();
        return false;

    }
    else if(password.length<10){
        alert("Please fill in all fields");
        event.preventDefault();
        return false;
    }
    else{
        alert("done")
        return true
    }

}