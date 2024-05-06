import PropTypes from 'prop-types'

export default function List(props) {
    const itemList = props.items
    const category = props.category

    // itemList.sort((a,b) => a.name.localeCompare(b.name))
    itemList.sort((a,b)=> {return a.calories - b.calories})
    const lowCalFruits = itemList.filter(fruit => fruit.calories < 100)
    const listItems=lowCalFruits.map(fruit=> <li key={fruit.id}>{fruit.name} -&nbsp;<b>{fruit.calories}</b></li>)
    return(
    <>
    <h3>Low calorie {category.toLowerCase()}</h3>
    <ol>{listItems}</ol>
    </>
    )
}
List.propTypes={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                              name: PropTypes.string,
                                              calories: PropTypes.number
    })), //shape!
}
List.defaultProps = {
    category: "Category not specified",
    items: [],
}
