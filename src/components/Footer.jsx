import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';

const footer = () => {
    
    const footerText = useSelector((state) => state.global.value.footerText)
    const siteName = useSelector((state) => state.global.value.siteName)

    return( <footer className='bg-gray-800 md:mt-20 pb-8 xs:mt-10'>

                <div className="grid md:grid-cols-3 p-8 gap-8 mb-2 xs:grid-cols-1">
                    <div>
                        <h1 className="text-2xl font-bold mb-3">Our Mission</h1>
                        <p className='md:text-lg text-gray-500 sm:text-sm'>Our mission is to provide a safe platform for all stray cats, ensuring their well-being, health, and a chance for loving homes.</p>
                    </div>

                    <ul className='flex md:flex-nowrap md:flex-col text-gray-500 md:justify-between items-center font-bold xs:flex-wrap xs:flex-row xs:justify-between'>
                        <h1 className="text-2xl font-bold mb-3 text-white">Menu</h1>
                        <Link to="/" className='px-3 hover:tracking-widest'><span>Home</span></Link>
                        <Link to="/about" className='px-3 hover:tracking-widest'><span>About</span></Link>
                        <Link to="/fact" className='px-3 hover:tracking-widest'><span>Fact</span></Link>
                        <Link to="/site-settings" className='px-3 hover:tracking-widest'><span>Customize</span></Link>
                    </ul>

                    <div className="flex flex-col justify-center md:items-end font-bold xs:items-center">
                        <h1 className="text-2xl font-bold m-3">Join Now</h1>
                        <Link to="/join" className='cta-btn'>Join Now</Link>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 p-8 gap-8 text-gray-500 xs:grid-cols-1">
                    <div>
                        <p className='text-lg'><span className="text-2xl font-bold">{siteName}</span> {footerText}</p>
                    </div>

                    <div></div>

                    <ul className='flex justify-between items-center font-bold'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Email</li>
                    </ul>
                </div>
            </footer>
        )
}

export default footer