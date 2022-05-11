import React, {useState} from "react";
import './login.css';
import auth from "../../apis/modules/auth";

export default function Register(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordConfirm, setpasswordConfirm] = useState("");

    const register = async ()=>{
       try{
           const payload = {
               name,password,email,passwordConfirm
           }
           let respond = await auth.register(payload)
            window.location = '/login'
       }catch (e){

       }
    }

  return(
<>
<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Register Page</title>
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
</head>  

<body style={{paddingTop: '3em'}}>
  <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src="https://i.postimg.cc/gjJwsP6b/image-processing20190917-14163-1vb88dr.gif" alt="" class="login-card-img" />
          </div>
          <div class="col-md-7">
            <div class="card-body">
            <div class="logo">
              <a href="/"><img src="https://i.postimg.cc/rsPvKTyp/CA.png" alt="Logo" /></a>
            </div>
              <p class="login-card-description">Signup to your account</p>
              <form action="#">
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" placeholder="Enter Your Name" required
                           onChange={(e) => { setName(e.target.value) }}/>
                  </div>
                  <div class="form-group mb-4">
                    <input type="email" name="email" class="form-control" placeholder="Enter Your Email" required
                           onChange={(e) => { setEmail(e.target.value) }}/>
                  </div>
                  {/*<div class="form-group mb-4">*/}
                  {/*  <select type="text" name="role" class="form-control" required>*/}
                  {/*      <option value="">--Please choose your role--</option>*/}
                  {/*      <option value="admin">Admin</option>*/}
                  {/*      <option value="staff">Staff</option>*/}
                  {/*      <option value="student">Student</option>*/}
                  {/*      <option value="supervisor">Supervisor</option>*/}
                  {/*      <option value="co-supervisor">Co-Supervisor</option>*/}
                  {/*      <option value="panel-member">Panel-Member</option>*/}
                  {/*      <option value="user">User</option>*/}
                  {/*  </select>*/}
                  {/*</div>*/}
                  <div class="form-group mb-4">
                    <input type="password" name="password" class="form-control" placeholder="Enter Password"
                           onChange={(e) => { setPassword(e.target.value) }}required/>
                  </div>
                  <div class="form-group mb-4">
                    <input type="password" name="passwordConfirm" class="form-control" placeholder="Re-Enter Password" required
                           onChange={(e) => { setpasswordConfirm(e.target.value) }}/>
                  </div>
                  <input name="login" id="login" class="btn btn-block login-btn mb-4" type="button" value="Register" onClick={(e)=>{register()}}/>
                </form>
                <p class="login-card-footer-text">Already have an account? <a href="/login" class="text-reset">Login here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</body>
</>

  )
}
