import { Link, NavLink } from "react-router-dom"


const Menu = () => {
  return (
    <header>
       <Link to={"/"}>
        <h1>Club Morón Tienda</h1>
       </Link>

        <nav>
            <ul>
                <li>Home</li>
                <li>
                    <NavLink to={"/Basquet"}>Basquety</NavLink>
                </li>
                <li>
                    <NavLink to={"/Voley"}>Voley</NavLink>
                </li>
                <li>
                    <NavLink to={"/Tenis"}>Tenis</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Menu
