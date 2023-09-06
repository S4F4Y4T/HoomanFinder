import { auth } from './../../conf/Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const Home  = () => {
  const [user] = useAuthState(auth)

    return (<>

     <section className='flex flex-col items-center p-8 col-span-3 w-4/5 mx-auto min-h-screen md:order-first xs:order-last'>
          <h2 className='font-bold p-3 text-4xl'>Dashboard</h2>
          <div className="text-justify">
            <img src={user?.photoURL} className='w-full' />
            <h3 className='text-2xl'>Welcome {user?.displayName}</h3>
          </div>
      </section>  

    </>)
};

export default Home