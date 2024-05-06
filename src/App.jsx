import Header from './components/Header'
import Footer from './components/Footer'
import Food from './components/Food'
import Card from './components/Card'
import Cardd from './components/Cardd'
import Button from './components/Button/Button'
import Buttonn from './components/Buttonn'
import Student from './components/Student'
import Greet from './components/Greeting'
import List from './components/List'
import ClickButton from './components/ClickButton'
import ProfilePic from './components/ProfilePic'
import Counter from './components/Counter'
import OnChange from './components/OnChange'
import ColorPicker from './components/ColorPicker'
import UpdateObject from './components/UpdateObject'
import UpdateArray from './components/UpdateArray'
import UpdateArrayOfObjects from './components/UpdateArrayOfObjects'
import Todo from './components/Todo'
import UseEffect from './components/UseEffect'
import DigitalClock from './components/DigitalClock'
import ComponentA from './components/UseContext/ComponentA'
import UseRef from './components/UseRef'
import Stopwatch from './components/Stopwatch'

function App() {
  const presNum = Math.floor(Math.random()*45)
  const presNumLastDigit = presNum %10;
  const fruits = [{id: 1, name: "apple", calories: 95}, 
  {id: 2, name: "orange", calories: 45}, 
  {id: 3, name: "banana", calories: 105}, 
  {id: 4, name: "coconut", calories: 159}, 
  {id: 5, name: "pineapple", calories: 37}]
  const vegetables = [{id: 6, name: "broccoli", calories: 95}, 
  {id: 7, name: "tomato", calories: 45}, 
  {id: 8, name: "spinich", calories: 105}, 
  {id: 9, name: "potato", calories: 159}, 
  {id: 10, name: "celery", calories: 37}]
  return (
    <>
      <p className="sectionHeader">Basics</p>
      <Header />
      <Food />
      <Footer />
      <p className="sectionHeader">Cards</p>
      <Card />
      <Cardd name="Bob" position="Builder"/>
      <Cardd name="Spongebob" position="Chef"/>      
      <Cardd name="Obama" position={`${presNum}${presNum >= 10 && presNum <= 20 ? "th" :
                                                 presNumLastDigit == 1 ? "st": 
                                                 presNumLastDigit == 2 ? "nd" :
                                                 presNumLastDigit == 3 ? "rd" :
                                                 "th"} President of the United States`}  />
      <p className="sectionHeader">Buttons</p>
      <Button />
      <Buttonn />
      <p className="sectionHeader">Props</p>
      <div style={{display:'flex',justifyContent: 'center',gap: '0.2rem'}}>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name={3} age="you"/>
        <Student />
      </div>
      <p className="sectionHeader">Conditional Rendering</p>
      <Greet isLoggedIn={true} username="Among Us Sus"/>
      <p className="sectionHeader">Lists: sort, filter, map</p>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
      {vegetables.length > 0 && <List items={vegetables} category="Veggies"/> /* these lines do the same thing because lazy eval*/}  
      <p className="sectionHeader">Click events</p>
      <ClickButton />
      <ProfilePic/>
      <p className="sectionHeader">useState() hook</p>
      <Counter/>
      <p className="sectionHeader">onChange() event handler</p>
      <OnChange/>
      <ColorPicker/>
      <p className="sectionHeader">Updater functions</p>
      <UpdateObject/>
      <UpdateArray/>
      <UpdateArrayOfObjects/>
      <Todo/>
      <p className="sectionHeader">useEffect() hook</p>
      <UseEffect/>
      <DigitalClock/>
      <p className="sectionHeader">useContext() hook</p>
      <ComponentA/>
      <p className="sectionHeader">useRef() hook</p>
      <UseRef/>
      <Stopwatch/>
    </>
  )
}

export default App
