export default function Greet(props){
    if (props.isLoggedIn) {
        return <h2 className="welcome">Welcome {props.username}</h2>
    } return <h2 className="login-prompt">Please log in to continue</h2>
}
//or ternary
//or can save the h2 elements in constants