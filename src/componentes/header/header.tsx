//import spaceship from "../../assets/spaceship/pngegg.png"
import {  NavLink } from "react-router-dom"
import img from "../../assets/Icono_space/icons8-space-invaders-48.png"

export default function Header() {
    return(
        <header>
            <div className="DivHeaderInside">
                <img src={img} alt="" />
                <h2>Ian Bonfiglio</h2>
            </div>
             <div style={{width:170}} className="DivHeaderInside">
                {/* <img className="RocketIMG" src={spaceship} alt="" height={90} width={120} /> */}
                <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "" } 
                to={'/'}>HOME</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""} 
                to={'/work'}>WORKS</NavLink>
            </div> 
            
        </header>
    )
}
