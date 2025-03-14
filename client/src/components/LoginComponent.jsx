import React from "react";
import '../css/style.css';

const LoginComponent = () => {
    return (
        <div className="container-fluid bg-ligth">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-10">
                    <form className="form-container">
                        <h4 class="text-center font-weight-bold"> Login </h4>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Username" />
                            <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <p class="text-break"></p>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block">Login</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )

}

export default LoginComponent;