import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Fact  = () => {

    const {data:fact, isPending, error, reFetchFact} = useFetch('https://catfact.ninja/fact');

    const reFetch = () => {
      reFetchFact()
    } 

    const {data:refact, isPending:reisPending, error:reerror, reFetchFact:rereFetchFact} = useFetch('https://catfact.ninja/fact');

    const rereFetch = () => {
      rereFetchFact()
    } 

    return (<>

      <section className='flex items-center p-8 flex-col w-4/5 mx-auto min-h-screen'>

        <div className="grid grid-cols-2 divide-x-2 divide-white border-2 border-white p-[20px]">
        <div className="pr-5">
        <div className="mb-8 flex justify-center items-center flex-col">
          <h2 className='font-bold p-3 text-4xl'>Cat Facts</h2>
          <button className="cta-btn" onClick={reFetch}>Regenerate</button>
        </div>
        
        <div className="text-center">
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {fact && <div>{fact.fact}</div>}
        </div>
        </div>

        <div className="pl-5">
        <div className="mb-8 flex justify-center items-center flex-col">
          <h2 className='font-bold p-3 text-4xl'>Another Cat Facts</h2>
          <button className="cta-btn" onClick={rereFetch}>Regenerate</button>
        </div>
        
        <div className="text-center">
          {reisPending && <div>Loading...</div>}
          {reerror && <div>{reerror}</div>}
          {refact && <div>{refact.fact}</div>}
        </div>
        </div>
        </div>

        </section>  

    </>)
};

export default Fact;