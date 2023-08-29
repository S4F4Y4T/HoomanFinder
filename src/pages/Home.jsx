import Feature from '../components/Feature'

const Home  = () => {
    return (<>

     <section className='flex justify-center items-center p-8 flex-col w-4/5 mx-auto '>
        <img src='mars.png'></img>
        <h1 className='text-6xl p-5 font-bold'>Find Your Own Mars</h1>
        <p className='text-md text-center'>We are a cat adoption platform. A cat can choose their hooman to build their next empire using our platform. And a human have to obey every command of the cat because thats how the universe works.</p>
      
        <button className='cta-btn'>Join Now</button>
      </section>

      <section className='my-10 text-center mt-5'>
          <h2 className='font-bold p-3 my-3 text-4xl'>Why Choose US</h2>
          <p className='mb-8'>Because we care about pet more than you</p>
          <div className='grid grid-cols-3 gap-5'>

            <Feature count="1" title="We Are Mean"></Feature>

            <Feature count="2" title="We Are Racist"></Feature>

            <Feature count="3" title="We Are Abusive"></Feature>

          </div>
      </section>

    </>)
};

export default Home;