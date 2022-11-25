import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { useToaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
// import useToken from '../../hooks/useToken';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  // const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  // if (token) {
  //   navigate('/');
  // }

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError('');
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast('User Created Successfully.');
        navigate('/');
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  const handleGoogleSignIn = (data) => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate('/');
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch('https://doctors-portal-server-module-77-5.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register('name', {
                required: 'Name is required',
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be 6 characters long' },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: 'Password must have uppercase, number and special characters',
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div className="form-control mt-2">
            <label tabIndex={0} className="m-1 font-bold">
              Select Account Type
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Seller</span>
              <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Buyer</span>
              <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
            </label>
          </div>
          <input className="btn btn-accent w-full mt-4" value="Sign Up" type="submit" />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p>
          Already have and account?{' '}
          <Link className="text-secondary" to="/login">
            Please Login
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

export default SignUp;