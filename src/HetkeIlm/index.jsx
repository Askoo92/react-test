import './style.css'

const HetkeIlm = (props) => (
    <div className='hetkeilm'>
        <div> Hetkel ilm: </div>
        <div> Temperatuur: {props.temp}</div>
        <div> Tuule kiirus: {props.tuul}</div>
        <div> Ilma kirjeldus: {props.kirjeldus}</div>
    </div>
)

export default HetkeIlm