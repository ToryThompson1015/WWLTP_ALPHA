import { Link } from "react-router-dom";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/solid";

function LoginModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Login Modal'
      className='w-full h-full flex items-center justify-center bg-transparent'
      overlayClassName='fixed inset-0 bg-black bg-opacity-60'
    >
      <div className='absolute w-screen h-screen bg-black opacity-20'></div>
      <div className='bg-black w-full md:w-3/4 lg:w-1/2 xl:w-2/5 rounded-lg p-6 relative'>
        <XIcon
          className='h-6 w-6 text-white cursor-pointer absolute top-2 right-2'
          onClick={onClose}
        />
        <h2 className='text-white text-lg mb-6'>Login Form</h2>
        <form>
          <label className='block mb-4'>
            <span className='text-white'>Email</span>
            <input
              type='email'
              className='mt-1 p-2 bg-gray-700 rounded w-full text-white'
              placeholder='Enter your email'
            />
          </label>
          <label className='block mb-6'>
            <span className='text-white'>Password</span>
            <input
              type='password'
              className='mt-1 p-2 bg-gray-700 rounded w-full text-white'
              placeholder='Enter your password'
            />
          </label>
          <button
            type='submit'
            className='w-full py-2 px-4 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-600'
          >
            Login
          </button>
        </form>
        <p className='text-white text-center mt-4'>
          Don't have an account?
          <br />
          <Link
            to='/register'
            className='text-yellow-700 hover:text-yellow-900'
            onClick={onClose}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </Modal>
  );
}

export default LoginModal;
