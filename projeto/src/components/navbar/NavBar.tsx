import { Link } from "react-router-dom"
import "./style.css"


export const NavBar = () => {
  return (
    <div className="container-navbar">
      <ul>
        <li><a href="/#home">Home</a></li>
        <li><a href="/#about">Sobre</a></li>
        <li><a href="/#contact">Contato</a></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
  )
}