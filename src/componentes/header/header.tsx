import img from "../../assets/Icono_space/icons8-space-invaders-48.png"
import spaceship from "../../assets/spaceship/pngegg.png"

function Header() {
    return(
        <header>
            <div className="DivHeaderInside">
                <img src={img} alt="" />
                <h2>Ian Bonfiglio</h2>
            </div>
            <img className="RocketIMG" src={spaceship} alt="" height={90} width={120} />
        </header>
    )
}
export default Header