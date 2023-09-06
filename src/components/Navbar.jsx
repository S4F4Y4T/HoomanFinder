import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from './../conf/Firebase'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth'

export default function Navbar() {

    const siteName = useSelector((state) => state.global.value.siteName)
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/join')
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <nav className='flex sm:flex-row sm:justify-between items-center py-5 xs:flex-col xs:justify-center '>
            <h1 className='text-3xl font-bold'>{siteName}</h1>
            <ul className='flex sm:flex-nowrap justify-between items-center py-5 nav-list tracking-wider xs:flex-wrap'>
                <Link to="/" className='px-3 hover:tracking-widest'><span>Home</span></Link>
                <Link to="/about" className='px-3 hover:tracking-widest'><span>About</span></Link>
                <Link to="/fact" className='px-3 hover:tracking-widest'><span>Fact</span></Link>
                <Link to="/site-settings" className='px-3 hover:tracking-widest'><span>Customize</span></Link>

                {!user && (<Link to="/join" className='cta-btn'>Join Now</Link>)}
                {user && (<button onClick={handleSignOut} className='cta-btn'>Logout</button>)}
                {user && (<Link to="/dashboard" className='cta-btn'>Dashboard</Link>)}
            </ul>
        </nav>
    )
}