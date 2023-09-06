import Feature from '../components/Feature'
import { Link } from 'react-router-dom';

import { faShield } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'

const Home  = () => {
    return (<>

     <section className='flex justify-center gap-5 pt-0 items-center flex-col w-4/5 mx-auto p-5'>
        <img src='mars.png'></img>
        <h1 className='sm:text-6xl p-5 pt-0 font-bold xs:text-4xl'>Find Your Own Mars</h1>
        <p className='sm:text-lg text-center xs:text-sm'>Just like us you can find your own mars. Whether you're looking to rehome a beloved pet or open your home to a new four-legged friend, our platform provides a safe and caring space to make it happen. Join us in creating a world where every pet can find the forever home they deserve.</p>
      
        <Link to="/join" className='cta-btn'>Join Now</Link>
      </section>

      <section className='sm:my-10 text-center sm:py-20 xs:my-10 xs:py-10'>
          <h2 className='font-bold mb-5 text-4xl'>Why US</h2>
          <p className='mb-8 text-lg text-gray-400'>We are trusted by enromous number of user</p>
          <div className='grid lg:grid-cols-3 gap-5 sm:mt-20 xs:mt-10 xs:grid-cols-1 '>

            <Feature count="1" title="Safety and Trust" icon={faShield}></Feature>

            <Feature count="2" title="Verified User" icon={faUserShield}></Feature>

            <Feature count="3" title="Support Team" icon={faHeadset}></Feature>

          </div>
      </section>

    </>)
};

export default Home;