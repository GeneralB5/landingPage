import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Tooltip } from 'chart.js';
import LoadingDots from '../../loading/loading';

ChartJS.register(ArcElement,Tooltip,Legend);

interface pieData{
    labels: string[];
    datanums:number[]
}
interface LanguageColorMap {
    [language: string]: string;
  }
  

function PieChart({labels,datanums}:pieData) {
    const languageToColor:LanguageColorMap = {
        "JavaScript": '#ffa500', // Golden Yellow
        'TypeScript': '#008000', // Dark Green
        'C#': '#0000ff', // Blue
        'HTML': '#ff0000', // Red
      };
      if(!labels || !datanums) return (
        <div className='themedDivs' style={{backgroundColor:'#1f1446'}}>
        <div style={{
            width:200,
            height:200,
            padding:0,
            background:'transparent'
        }}>
            <LoadingDots />
        </div>
    </div>
      
    )

      const data = {
        labels:labels,
        datasets:[{
                label:"Proyects Done",
                data:datanums,
                backgroundColor: labels.map((label)=>languageToColor[label])  ??'rgba(0, 0, 0, 0.2)',
                borderColor: 'black',
                borderWidth: 1
        }]
        }
      
    return(
        <div className='themedDivs' style={{backgroundColor:'#1f1446'}}>
            <div style={{
                width:200,
                height:200,
                padding:0,
                background:'transparent'
            }}>
                <Pie data={data}></Pie>
            </div>
        </div>
    )
}
export default PieChart