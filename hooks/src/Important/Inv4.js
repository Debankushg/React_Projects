import React ,{useState}from 'react'





const Inv4 = () => {

        const [user ,setUser] = useState("");
        const [userErr ,setUserErr] = useState(false);
        const [password ,setPassword] = useState("");
        const [passwordErr ,setPasswordErr] = useState(false);



        function userHandler(e){

            let item = e.target.value
            if(item.length<4){
                setUserErr(true)
            }
            else{
                setUserErr(false)
            }
            setUser(item)
        }
        function passwordHandler(e){

            let item = e.target.value
            if(item.length<4){
                setPasswordErr(true)
                ("password is less than 4 char")
            }
            else if(item.search(/[0-9]/) == -1){
                setPasswordErr(true)
                alert("password must contain a number")
            }else if((item.search(/[a-z]/) == -1)){
                setPasswordErr(true)
                alert("password must have one small letter")
            }else if(item.search(/[A-Z]/) == -1){
                setPasswordErr(true)
                alert("Password must have one CAPITAL Letter")
            }else if(item.search(/[\!\@\#\$\%\^\&\*\-\+\/\_\=\?\,\<\>\~]/) == -1){
                setPasswordErr(true)
                alert("Password must have one Special Charecter")
            }else{
                setPasswordErr(false)
                alert("Password is ok")
            }
            setPassword(item)
        }


        function loginHandler(e){
            if(user.length<4 || password.length<4){
                alert("Invalid Data")
            }else{
                alert("login success")
            }
            e.preventDefault()
        }


  return (
    <>
    <h1>LogIn</h1>
    <form action="" onSubmit={loginHandler}>
        <input type="text" placeholder='Enter your name' onChange={userHandler}/> 
        {userErr? <span>Invalid Data</span> : null }

        <input type="password" className='check' placeholder='Enter your password'  onChange={passwordHandler} />
        {passwordErr? <small>password not proper</small> : null }


        <button>Login</button>

    </form>
    </>
  )
}

export default Inv4;