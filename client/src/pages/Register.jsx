import { Link } from "react-router-dom";

import { useState } from "react";
import { register } from "../api";

function Register() {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(`User State: ${user}, Pass State: ${pass}`);
    try {
      register({ email: user, password: pass });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className='bg-black w-full h-screen rounded-lg p-6 relative'>
        <h2 className='text-white text-lg mb-6'>Create an account</h2>

        {/* FORM CODE */}
        <form onSubmit={handleSubmit}>
          <label className='block mb-4'>
            <span className='text-white'>Email</span>
            <input
              type='email'
              id='email'
              className='mt-1 p-2 bg-gray-700 rounded w-full text-white'
              placeholder='Enter your email'
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </label>
          <label className='block mb-6'>
            <span className='text-white'>Password</span>
            <input
              type='password'
              id='password'
              className='mt-1 p-2 bg-gray-700 rounded w-full text-white'
              placeholder='Enter your password'
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </label>
          <button
            type='submit'
            className='w-full py-2 px-4 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-600'
          >
            REGISTER
          </button>
        </form>

        {/* END FORM */}
      </div>
    </div>
  );
}

export default Register;
