const Settings  = () => {
    return (<>

     <section className='flex items-center p-8 flex-col w-4/5 mx-auto min-h-screen'>
          <h2 className='font-bold p-3 text-4xl'>Settings</h2>
          <form className="flex flex-col gap-8">
            <input placeholder="Site Name" className="rounded-md py-3 px-5 text-black" type="text"></input>
            <input placeholder="Footer Title" className="rounded-md py-3 px-5 text-black" type="text"></input>
            <input type="color" className="w-full h-10 border-gray-300 rounded p-1 cursor-pointer"></input>
            <button className="cta-btn m-0" type="submit">Save</button>
          </form>
      </section>  

    </>)
};

export default Settings