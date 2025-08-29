import "./Nav.css";

function Nav() {
  return (
    <div className="container-box">
      <div className="head-box">
        <img src="/logo.svg" alt="Logo" />

        <nav>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Tour Packages</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        <div className="nav-right">
          <select name="language" id="selection-bar">
            <option value="en">Eng</option>
            <option value="es">Esp</option>
            <option value="fr">Fra</option>
          </select>

          <p>Log in</p>

          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
