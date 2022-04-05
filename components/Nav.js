
import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'><h2>Home</h2></Link>
                </li>
                <li>
                    <Link href='/stores'><h2>Stores</h2></Link>
                </li>
                <li>
                    <Link href='/about'><h2>About</h2></Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default Nav
