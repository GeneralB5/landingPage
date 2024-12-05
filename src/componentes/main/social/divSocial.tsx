import SocialIcon from "./socialNetworkIcon/socialNetworkIcon"
import linkedin from "../../../assets/iconos_social_net/linkedin.png"
import github from "../../../assets/iconos_social_net/github.png"
function SocialNetwork({}) {
    return(
        <div className="socialNetworksDiv">
            <SocialIcon Url={linkedin} path="https://www.linkedin.com/in/ian-marco-bonfiglio-1a19a825a/" name="linkedin"/>
            <SocialIcon Url={github} path="https://github.com/GeneralB5" name="github"/>
        </div>
    )
}
export default SocialNetwork