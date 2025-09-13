import {Link} from 'react-router-dom'

function Header()
{
    return (
        <nav className='nav'>
          <h1>FW</h1>
            <ul>
              <li>
                <Link className='link' to="/">Home</Link>
              </li>
              <li>
                <Link className='link' to="/about">About</Link>
              </li>
              <li>
                <Link className='link' to="/product">Product</Link>
              </li>
              <li>
                <Link className='link' to="/contact">Contact</Link>
              </li>
              <li>
                <Link className='link' to="/register">Register</Link>
              </li>
              <li>
                <Link className='link' to="/Login">Login</Link>
              </li>
             
            </ul>
          </nav>
    )
}

export default Header;