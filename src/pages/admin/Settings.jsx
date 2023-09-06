import { useDispatch, useSelector } from "react-redux";
import { updateSiteName, updateFooterText, updateThemeColor, reset } from './../../slice/globalSlicer'
import { useState } from "react";

const Settings  = () => {

    const siteName = useSelector((state) => state.global.value.siteName)
    const footerText = useSelector((state) => state.global.value.footerText)
    const themeColor = useSelector((state) => state.global.value.themeColor)

    const dispatch = useDispatch()

    const handleUpdateSiteName = (e) => 
    {
      dispatch(updateSiteName(e.target.value))
    }

    const handleUpdateFooterText = (e) => 
    {
      dispatch(updateFooterText(e.target.value))
    }

    const handleUpdateThemeColor = (e) => 
    {
      dispatch(updateThemeColor(e.target.value))
    }

    const handleReset = () => {
      dispatch(reset())
    }

    return (<>

     <section className='flex items-center p-8 flex-col w-4/5 mx-auto min-h-screen'>
          <h2 className='font-bold p-3 text-4xl'>Settings</h2>
          <form className="flex flex-col gap-8 form p-20">
            <input onChange={handleUpdateSiteName} value={siteName} placeholder="Site Name" className="focus:ring-2 focus:ring-white focus:outline-none rounded-md py-3 px-5 text-black" type="text"></input>
            <input onChange={handleUpdateFooterText} value={footerText} placeholder="Footer Title" className="focus:ring-2 focus:ring-white focus:outline-none rounded-md py-3 px-5 text-black" type="text"></input>
            <input onChange={handleUpdateThemeColor} value={themeColor} type="color" className="w-full h-10 border-gray-300 rounded p-1 cursor-pointer"></input>
            <button onClick={handleReset} type="reset" className="cta-btn">Reset</button>
          </form>
      </section>  

    </>)
};

export default Settings