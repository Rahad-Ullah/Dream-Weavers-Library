import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/secure-login.webp'

const Login = () => {
    const { signIn, googleSignIn } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
  
    const handleLogin = (event) => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
  
  
      signIn(email, password)
      .then((result) => {
        console.log(result.user)
        navigate(location?.state || '/')
        Swal.fire({
          title: 'Success!',
          text: 'Login successful',
          icon: 'success',
          confirmButtonText: 'Ok'
        })

      })
      .catch((err) => {
        console.log(err)
        Swal.fire({
          title: 'Login Failed!',
          text: 'Invalid Email or Password',
          icon: 'error',
          confirmButtonText: 'Try again'
        })
      });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then((result) => {
            console.log(result.user)
            navigate(location?.state || '/')
            Swal.fire({
              title: 'Success!',
              text: 'Login successful',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
        }).catch((err) => {
            console.log(err)
            Swal.fire({
              title: 'Error!',
              text: 'Login failed',
              icon: 'error',
              confirmButtonText: 'Try again'
            })
        });
    }
    
    return (
        <div className="hero min-h-screen font-poppins py-8 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="hero-content grid grid-cols-1 lg:grid-cols-11 gap-16 justify-between items-center">
            <div className="w-full hidden md:flex justify-center items-center col-span-5">
              <img src={loginImg} alt="" />
            </div>
    
            <div className="card flex-shrink-0 col-span-6 w-full border py-10 lg:p-14">
                <h2 className="text-4xl font-semibold text-accent text-center mb-2">Login</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your email"
                        className="input input-bordered"
                        name="email"
                        required
                    />
                    </div>
                    <div className="form-control">
                      <label className="label">
                          <span className="label-text font-semibold">Confirm Password</span>
                      </label>
                      <input
                          type="password"
                          placeholder="Your password"
                          className="input input-bordered"
                          name="password"
                          required
                      />
                      <label className="label">
                          <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                          </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary normal-case text-base">Login</button>
                    </div>
              </form>
              <p className="font-medium text-sm mb-7 text-center">Or Sign In with</p>
              <div onClick={handleGoogleSignIn} className="flex justify-center gap-4 px-8">
                  <button className="btn btn-primary btn-outline normal-case text-base w-full "><FcGoogle className="text-xl"></FcGoogle>Google</button>
              </div>
              <p className="text-[#737373] text-center text-sm mt-10">Not have an account? <Link to={'/sign-up'} className="text-primary font-semibold hover:btn-link">Sign Up</Link></p>
            </div>
          </div>
      </div>
    );
};

export default Login;