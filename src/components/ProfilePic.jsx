export default function profilePic() {
    const imageUrl = './src/assets/dab.png'
    const handleClick = (e) => e.target.style.display="none"
    return(<img onClick = {(e)=>handleClick(e)} src={imageUrl}></img>)
}