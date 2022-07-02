import React from "react";

let Login = () => {
    
    let [email,setEmail] = React.useState("")
    let [password,setpassword] = React.useState("")
    let handleLogin = ()=> {
        let payload = {email,password}
        fetch(`https://reqres.in/api/login`,{
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                "content-type" : "application/json"
            }
            
        })
        .then((res) => res.json())
    .then((res) => {
        console.log("login")
        window.location.href = "/"})
    }


    return <>
    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password"></input>
    <button onClick={handleLogin} >SUBMIT</button>
    </>
}
export default Login;