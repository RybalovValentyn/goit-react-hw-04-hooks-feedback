import s from './statistic.module.css'


export default function Statistics({props}) {

const {good, bad, neutral} = props

const total =(good+bad+neutral)
const PositiveFeedback = Math.round(((good)/(total)*100))

// console.log(PositiveFeedback);

 const globalProps = {...props, total: total}

console.log(globalProps);
     const spanName = Object.keys(globalProps)

return (
<ul className ={s.statisticList}>
    {spanName.map(name =>
        <li key={name}>
            <span>{name}: {globalProps[name]}</span>
        </li>
        )}

        {PositiveFeedback>0 && <span>Positive Feedback: {`${PositiveFeedback} %`}</span>}
</ul>

)
   

}

