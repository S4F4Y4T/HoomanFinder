import { useSelector } from 'react-redux';
import { auth, provider } from './../conf/Firebase'
import { signInWithPopup } from "firebase/auth";

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

const Join  = () => {
  const siteName = useSelector((state) => state.global.value.siteName)
  const navigate = useNavigate();
  const [user] = useAuthState(auth)


  useEffect(() => {
    if(user){
      navigate('/dashboard')
    }
  }, [user])

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    navigate('/dashboard')
  }).catch((error) => {
    // Handle Errors here.
    const errorMessage = error.message;
    console.log(errorMessage)
    // The AuthCredential type that was used.
    // ...
  });
  }

  return (<>
    <section className='flex items-center p-8 flex-col w-4/5 mx-auto min-h-screen'>
        <h2 className='font-bold p-3 text-4xl'>Welcome to {siteName}</h2>
        <div className="text-justify">
          <button onClick={handleSignIn} className="cta-btn">Sign In</button>
        </div>
    </section>  

  </>)
};

export default Join