import './input.css';
let input=(props)=>{
    return(
        <div>
            <input className="input-box" type="text" value={props.currinp}></input>
        </div>
    )
}
export default input;