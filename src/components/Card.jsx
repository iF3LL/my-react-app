import mypic from '../assets/dab.png'

export default function Card() {
    return (
        <div className="card">
        <img className="card-image" src={mypic} alt="profile picture" width="200"></img>
        <h2 className="card-title">Sunny</h2>
        <p className="card-text">Computer engineering at UofT</p>
    </div>
    )
}