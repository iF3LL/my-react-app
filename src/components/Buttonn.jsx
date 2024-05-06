export default function Buttonn() {
    const styles = {
        backgroundColor: "rgb(13, 35, 35)", 
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        minWidth: "10rem",
        margin: "3px"
    }
    return <button style={styles}>Click me too</button>
}
// camelCase attributes, string CSSFontFeatureValuesRule, style={styles} if using variable