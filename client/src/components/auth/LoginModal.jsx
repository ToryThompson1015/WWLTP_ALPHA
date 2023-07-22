import { Link } from "react-router-dom";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/solid";

import { useRef, useState } from "react";

function LoginModal({ isOpen, onClose }) {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pass);
  };

  const styles = {
    modal: "fixed inset-0",
    container:
      "bg-black w-full md:w-3/4 lg:w-1/2 xl:w-2/5 rounded-lg p-6 relative",
    closeBtn: "h-6 w-6 text-white cursor-pointer absolute top-2 right-2",
    heading: "text-white text-lg mb-6",
    input: "mt-1 p-2 bg-gray-700 rounded w-full text-white",
    btn:
      "w-full py-2 px-4 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-600",
    link: "text-yellow-700 hover:text-yellow-900",
  };

  const modalStyle = {
    content: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent",
    },
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0, 0, 0, 0.6)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login Modal"
      style={modalStyle}
      overlayClassName={styles.modal}
    >
      <div className={styles.container}>
        <XIcon className={styles.closeBtn} onClick={onClose} />
        <h2 className={styles.heading}>Login Form</h2>

        {/* FORM CODE */}
        <form onSubmit={handleSubmit}>
          <label className={styles.heading}>
            <span>Email</span>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Enter your email"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
          </label>
          <label className={styles.heading}>
            <span>Password</span>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="Enter your password"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              required
            />
          </label>
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </form>
        {/* END FORM */}

        <p
          className={styles.heading}
          style={{ textAlign: "center", marginTop: 4 }}
        >
          Don't have an account?
          <br />
          <Link to="/register" className={styles.link} onClick={onClose}>
            Sign Up
          </Link>
        </p>
      </div>
    </Modal>
  );
}

export default LoginModal;
