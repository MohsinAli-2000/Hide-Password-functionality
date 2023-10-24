let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

eyeIcon.onclick = ()=>{
    if (password.type == "password"){
        password.type = "text"
        eyeIcon.src = "./eye-close.png"
    }else if (password.type == "text"){
        password.type = "password"
        eyeIcon.src = "./eye-open.png"
    }
}
