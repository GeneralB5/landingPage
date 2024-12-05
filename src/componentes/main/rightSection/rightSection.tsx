import PieChart from "../pieChart/pieChart"
import DivFutProy from "./futureProy/divFutProy"
import OtherSocialNetwork from "./otherSocialNetwork/socialNetwork"
import ThreeNewest from "./threeNewest/MostNewest"
interface RightSectionArg{
    chartData:{
        arrayThreeLatestProy:any[]
        arryLanguages:string[]
        arryLanguagesNumb:number[]
    }
}
function RightSection({chartData}:RightSectionArg) {
    
    return(
        <section className="sectionRight">
            <div className="SectionDivisior">
                <PieChart labels={chartData.arryLanguages} datanums={chartData.arryLanguagesNumb} />
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