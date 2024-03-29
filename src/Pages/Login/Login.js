import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        toast.success('User Logged In Successfully.');
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = (data) => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success('User Logged In Successfully.');
        navigate('/dashboard');
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'Email Address is required',
              })}
              className="input input-bordered w-full max-w-xs"
              defaultValue={"diamondtech@admin.com"}
            />
            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
              })}
              className="input input-bordered w-full max-w-xs"
              defaultValue={"@DiamondTech008"}
            />
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input className="btn btn-accent w-full" value="Login" type="submit" />
          <div>{loginError && <p className="text-red-600">{loginError}</p>}</div>
        </form>
        <p>
          New to Diamond Tech Resale?{' '}
          <Link className="text-secondary" to="/signup">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
