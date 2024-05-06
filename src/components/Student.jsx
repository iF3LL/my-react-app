import PropTypes from 'prop-types'

export default function Student (props) {
    return (
        <div className="student" text>
            <p>Name: {props.name} is {props.age} years old</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

//props object , send as key-value pairs

//propType to ensure correct type (mainly for debugging, console logged but can keep working)
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}