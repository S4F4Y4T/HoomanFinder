import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className='flex flex-col md:items-start py-5 text-center xs:items-center'>
            <h2 className='text-2xl'>Menu</h2>
            <ul className='flex flex-col justify-center items-start nav-list border-2 border-white form m-0 pl-3 pr-20 py-5'>
                <Link to="" className='px-3 font-bold text-lg'><span>Dashboard</span></Link>
                <Link to="adoption-post" className='px-3 font-bold text-lg'><span>Make Adoption</span></Link>
                <Link to="adoption-list" className='px-3 font-bold text-lg'><span>Browse Adoption</span></Link>
            </ul>
        </nav>
    )
}