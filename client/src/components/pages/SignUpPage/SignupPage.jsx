import Button from "../../common/Button";
import React, { useState } from "react";
import { register } from "../../../api";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    preferences: [],
    profile: {
      userName: "",
      favoriteGenre: [],
      favoriteAuthors: [],
    },
    accountDetails: {
      paidUser: false,
      firstName: "",
      lastName: "",
      region: "",
      phoneNumber: "",
      parentalControls: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      alert("Successfully registered!");
    } catch (error) {
      alert("Error registering. Please try again.");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6'>Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
          {/* Email */}
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2' htmlFor='email'>
              Email:
            </label>
            <input
              className='w-full p-2 border rounded-md'
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password */}
          <div className='mb-4'>
            <label
              className='block text-sm font-medium mb-2'
              htmlFor='password'
            >
              Password:
            </label>
            <input
              className='w-full p-2 border rounded-md'
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='mb-4 flex items-center'>
            <input
              className='mr-2'
              type='checkbox'
              id='parentalControls'
              name='accountDetails.parentalControls'
              checked={formData.accountDetails.parentalControls}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  accountDetails: {
                    ...prevData.accountDetails,
                    parentalControls: e.target.checked,
                  },
                }))
              }
            />
            <label className='text-sm font-medium' htmlFor='parentalControls'>
              Parental Controls
            </label>
          </div>

          <Button onClick={handleFormSubmit}>Sign Up</Button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
