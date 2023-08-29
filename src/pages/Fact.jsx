import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Fact  = () => {

    const {data:fact, isPending, error, reFetchFact} = useFetch('https://catfact.ninja/fact');

    const reFetch = () => {
      reFetchFact()
    } 

    return (<>

      <section className='flex items-center p-8 flex-col w-4/5 mx-auto min-h-screen'>

        <div className="mb-8">
          <h2 className='font-bold p-3 text-4xl'>Cat Facts</h2>
          <button className="cta-btn" onClick={reFetch}>Regenerate</button>
        </div>
        
        <div className="text-justify">
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {fact && <div>{fact.fact}</div>}
        </div>

        </section>  

    </>)
};

export default Fact;