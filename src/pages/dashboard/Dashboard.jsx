import { auth } from './../../conf/Firebase'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './../../components/Dashboard/Navbar'
import Home from './Home'
import Post from './Adoption/Post'
import List from './Adoption/List'

const Dashboard  = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate();

  useEffect(() => {
    if(!user){
      navigate('/join')
    }
  }, [user])

    return (<>

     <div className='grid md:grid-cols-4 xs:grid-cols-1'> 
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adoption-post" element={<Post />} />
            <Route path="/adoption-list" element={<List />} />
        </Routes>
      
        <Navbar />
     </div>

    </>)
};

export default Dashboard