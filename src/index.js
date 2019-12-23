import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Hero from "./hero.js";
import Question from "./question.js";
import "./styles.css";

function App() {

const options = [
                {title: "surface area", id: "area", key:"earth"},
                {title: "temperature", id: "temperature", key: "earth"},
                {title: "mass", id: "mass", key:"earth"},
                {title: "luminosity", id: "luminosity", key:"space"},
                {title: "distance from Earth", id: "distance", key:"space"}
                ];

const [spaceData, updateSpaceData] = useState([]);
const [earthData, updateEarthData] = useState([]);
const [earthToggle, updateEarthToggle] = useState(true);
const [spaceToggle, updateSpaceToggle] = useState(false);
const [inputToggle, updateInputToggle] = useState(false);
const [listToggle, updateListToggle] = useState(false);
const [guestToggle, updateGuestToggle] = useState(false);
const [selectedOptionEarth, updateSelectedOptionEarth] = useState('');
const [selectedOptionSpace, updateSelectedOptionSpace] = useState('');
const [objectOneEarth, updateObjectOneEarth] = useState('');
const [objectTwoEarth, updateObjectTwoEarth] = useState('');
const [objectOneSpace, updateObjectOneSpace] = useState('');
const [objectTwoSpace, updateObjectTwoSpace] = useState('');
const [guestList, updateGuestList] = useState([]);

useEffect(()=>{
      async function fetchSpaceData() {
        const fetcher = await fetch('https://wonder-brauckman.herokuapp.com/space');
        const response = await fetcher.json()
        updateSpaceData(response)
      }
      async function fetchEarthData() {
        const fetcher = await fetch('https://wonder-brauckman.herokuapp.com/earth');
        const response = await fetcher.json()
        updateEarthData(response)
      }
      async function fetchGuestList() {
        const fetcher = await fetch('https://wonder-brauckman.herokuapp.com/');
        const response = await fetcher.json()
        updateGuestList(response)
      }
      fetchGuestList()
      fetchEarthData()
      fetchSpaceData()
}, [])

  return (
    <React.Fragment>
      <Hero listToggle={listToggle} updateListToggle={updateListToggle} guestList={guestList} updateGuestList={updateGuestList} inputToggle={inputToggle} updateInputToggle={updateInputToggle} guestToggle={guestToggle} updateGuestToggle={updateGuestToggle} />
      <div className="app-wrapper">
        <div className="app">
          <div className="view">
            <button className={earthToggle === true ? 'toggle on' : 'toggle'}
                    id="earth-button"
                    onClick={() => {
                      updateEarthToggle(!earthToggle);
                      updateSpaceToggle(!spaceToggle);
                      updateObjectOneSpace('');
                      updateObjectTwoSpace('');
                      }}
            >Space to Earth
            </button>
            <button className={spaceToggle === true ? 'toggle on' : 'toggle'}
                    onClick={() => {
                      updateSpaceToggle(!spaceToggle);
                      updateEarthToggle(!earthToggle);
                      updateObjectOneEarth('');
                      updateObjectTwoEarth('');
                      }}
            >Space to Space
            </button>
          </div>
          <Question selectedOptionEarth={selectedOptionEarth}
                    updateSelectedOptionEarth={updateSelectedOptionEarth}
                    selectedOptionSpace={selectedOptionSpace}
                    updateSelectedOptionSpace={updateSelectedOptionSpace}
                    objectOneEarth={objectOneEarth}
                    objectOneSpace={objectOneSpace}
                    updateObjectOneEarth={updateObjectOneEarth}
                    updateObjectOneSpace={updateObjectOneSpace}
                    objectTwoEarth={objectTwoEarth}
                    objectTwoSpace={objectTwoSpace}
                    updateObjectTwoEarth={updateObjectTwoEarth}
                    updateObjectTwoSpace={updateObjectTwoSpace}
                    spaceData={spaceData}
                    earthData={earthData}
                    options={options}
                    earthToggle={earthToggle}
                    spaceToggle={spaceToggle}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
