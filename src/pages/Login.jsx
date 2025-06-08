import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailLink,
  sendSignInLinkToEmail,
  isSignInWithEmailLink
} from 'firebase/auth';

// Your Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyBpt5_XaF86fnaJv3smDanXFNMVKBe2Lzk',
  authDomain: 'dsav-1c2ee.firebaseapp.com',
  projectId: 'dsav-1c2ee',
  storageBucket: 'dsav-1c2ee.firebasestorage.app',
  messagingSenderId: '35433946452',
  appId: '1:35433946452:web:be6d250fc42cd999b53cc1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Login({ onClose }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);

  const handleSendLink = async () => {
    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    const actionCodeSettings = {
      url: 'https://dsav.vercel.app', // or your live URL
      handleCodeInApp: true
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      localStorage.setItem('emailForSignIn', email);
      setMessage('OTP link sent to your email. Check your inbox.');
    } catch (error) {
      setMessage(error.message);
    }
  };

  useEffect(() => {
    const verifyLogin = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        const storedEmail = localStorage.getItem('emailForSignIn');
        if (!storedEmail) {
          setMessage('Missing email. Please retry.');
          return;
        }

        try {
          await signInWithEmailLink(auth, storedEmail, window.location.href);
          localStorage.removeItem('emailForSignIn');
          setOtpVerified(true);
          setMessage('Login successful!');
          setTimeout(() => {
            if (onClose) {
              onClose(); // Close modal if it's being used as modal
            } else {
              window.location.href = '/'; // Navigate to homepage if standalone
            }
          }, 1500);
        } catch (error) {
          setMessage(error.message);
        }
      }
    };

    verifyLogin();
  }, [onClose]);

  // If used as modal
  if (onClose) {
    return (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-[#1a1a1a] p-10 rounded-3xl shadow-xl w-full max-w-md border border-[#2a2a2a] relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
          >
            ×
          </button>

          <h1 className="text-4xl font-extrabold text-center mb-8 text-[#00ffff] tracking-tight">
            DSAV Login
          </h1>
          
          {!otpVerified ? (
            <>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-6 w-full px-4 py-3 bg-[#2a2a2a] text-white border-none rounded-lg focus:ring-2 focus:ring-[#00ffff] focus:outline-none"
              />
              <button
                onClick={handleSendLink}
                className="w-full bg-[#00ffff] text-black font-semibold py-3 rounded-lg hover:bg-[#00cccc] transition-colors duration-200"
              >
                Send OTP Link
              </button>
            </>
          ) : (
            <p className="text-green-500 text-center font-medium text-lg">
              You're logged in! Closing...
            </p>
          )}
          
          {message && (
            <p className="text-center text-sm mt-6 text-gray-300 italic">
              {message}
            </p>
          )}
        </motion.div>
      </motion.div>
    );
  }

  // If used as standalone page (original behavior)
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f0f] px-4 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-[#1a1a1a] p-10 rounded-3xl shadow-xl w-full max-w-md border border-[#2a2a2a]">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-[#00ffff] tracking-tight">DSAV Login</h1>
        {!otpVerified ? (
          <>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-6 w-full px-4 py-2 bg-[#2a2a2a] text-white border-none rounded focus:ring-2 focus:ring-[#00ffff]"
            />
            <button
              onClick={handleSendLink}
              className="w-full bg-[#00ffff] text-black font-semibold py-2 rounded hover:bg-[#00cccc] transition"
            >
              Send OTP Link
            </button>
          </>
        ) : (
          <p className="text-green-500 text-center font-medium text-lg">You're logged in!</p>
        )}
        {message && (
          <p className="text-center text-sm mt-6 text-gray-300 italic">{message}</p>
        )}
      </div>
    </motion.div>
  );
}