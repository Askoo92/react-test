import './style.css'

const IlmaEnnustus = (props) => {
    console.log(props.forecast);
    return <div>
        <h1>Lähipäevade prognoos</h1>
        {props.forecast && props.forecast.map((ilm) => <YhePaevaEnnustus ilm={ilm} />)}
    </div>
}

const YhePaevaEnnustus = (props) => (
    <div className='prognoos'>
    <div> Päev: {props.ilm.day}</div>
    <div> Temperatuur:  +{props.ilm.temperature}</div>
    <div> Tuule kiirus: {props.ilm.wind}</div>
    <div> Ilma kirjeldus: {props.ilm.description}</div>
</div>
)

export default IlmaEnnustus