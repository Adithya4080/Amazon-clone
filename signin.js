// signup registration
function saveData(){
    let name, email, password;
    name = document.getElementById('username').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v) =>{
        return v.email == email
    })) {
        alert("Duplicate Data")
    }
    else{
        user_records.push({
            "name":name,
            "email":email,
            "password":password
        })
    localStorage.setItem("users",JSON.stringify(user_records))
    window.location.href="signinpage.html"
    }
}
