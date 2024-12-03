import SocialIcon from "./socialNetworkIcon/socialNetworkIcon"
function SocialNetwork({}) {
    return(
        <div className="socialNetworksDiv">
            <SocialIcon Url={"linkedin"} path="https://www.linkedin.com/in/ian-marco-bonfiglio-1a19a825a/"/>
            <SocialIcon Url={"github"} path="https://github.com/GeneralB5"/>
        </div>
    )
}
export default SocialNetwork