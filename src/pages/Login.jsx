import React, { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { db, auth } from "../firebaseConfig";

const Login = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogle = async () => {
    if (user) {
      await signOut(auth);
    } else {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    }
  };

  return (
    <>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <button onClick={handleGoogle}>Log Out</button>
        </div>
      ) : (
        <div>
          <h1>Please sign in.</h1>
          <button onClick={handleGoogle}>Sign In</button>
        </div>
      )}
    </>
  );
};

export default Login;
// export { handleGoogle };
