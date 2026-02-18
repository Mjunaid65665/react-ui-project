import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='Nav'>
      <div className="Nav-logo">EV-olution</div>
      <ul className="Nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
