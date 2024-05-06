import mypic from '../assets/dab.png'

export default function poo(props) {
    return (
        <div className="card">
        <img className="card-image" src={mypic} alt="profile picture" width="200"></img>
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text">{props.position}</p>
    </div>
    )
}