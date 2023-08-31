import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center py-5'>
            <h1 className='text-3xl font-bold'>HoomanFinder</h1>
            <ul className='flex justify-between items-center py-5 nav-list'>
                <Link to="/" className='px-3'><span>Home</span></Link>
                <Link to="/about" className='px-3'><span>About</span></Link>
                <Link to="/fact" className='px-3'><span>Fact</span></Link>
                <Link to="/site-settings" className='px-3'><span>Customize</span></Link>

                <Link to="/join" className='cta-btn'>Join Now</Link>
                {/* <Link to="/dashboard" className='cta-btn'>Dashboard</Link> */}
            </ul>
        </nav>
    )
}