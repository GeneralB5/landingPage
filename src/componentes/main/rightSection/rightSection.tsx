import DivFutProy from "./futureProy/divFutProy"
import OtherSocialNetwork from "./otherSocialNetwork/socialNetwork"
import SectionSkill from "./sectionSkills/SectionSkills"
import ThreeNewest from "./threeNewest/MostNewest"
interface RightSectionArg{
    chartData:{
        arrayThreeLatestProy:any[]
        arryLanguages:string[]
    }
}
function RightSection({chartData}:RightSectionArg) {
    return(
        <section className="sectionRight">
            <div className="SectionDivisior">
                <SectionSkill labels={chartData.arryLanguages} />
                <DivFutProy />
            </div>
            <div className="SectionDivisior">
                <ThreeNewest arryLatest={chartData.arrayThreeLatestProy} />
                <OtherSocialNetwork />
            </div>
        </section>
    )
}
export default RightSection