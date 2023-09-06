import { auth } from './../../../conf/Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Form from './../../../components/Dashboard/CreatePost'

const Home  = () => {
  const [user] = useAuthState(auth)

    return (<>

      <section className='flex flex-col items-center p-8 col-span-3 md:w-4/5 mx-auto min-h-screen md:order-first xs:order-last xs:w-full'>
          <h2 className='font-bold p-3 md:text-4xl xs:text-2xl'>Make A Adoption</h2>
          <div className="text-justify">
            <Form />
          </div>
      </section>  

    </>)
};

export default Home