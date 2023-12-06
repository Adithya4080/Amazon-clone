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

// signin 
function login(){
    let email,password;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v) =>{
        return v.email == email && v.password == password
    })){
        alert("Login Successful")
        let current_user = user_records.filter((v) => {
            return v.email == email && v.password == password 
        })[0]

        localStorage.setItem("name",current_user.name);
        localStorage.setItem("email",current_user.email);
        window.location.href="index.html";
    }else{
        alert("Login Fail")
    }
}