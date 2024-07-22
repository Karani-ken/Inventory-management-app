import { FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')

    }
    return (
        <header className='header'>
            <div className="logo">
                <Link to='/' className='md:font-black md:text-2xl'>Inventory Management system</Link>
            </div>
            <ul>
                {user ? (
                
                    <li>
                        <button className='bg-black  text-white p-3 rounded-md' onClick={onLogout}>
                            <FaSignOutAlt className='text-sm' /> Logout
                        </button>
                    </li>
                   
                    
                    
                    ) : (
                    <>
                         <li>
                            <Link to='/login'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                    )}

            </ul>

        </header >
    )
}

export default Header