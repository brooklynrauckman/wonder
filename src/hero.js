import React, {useState} from "react";
import RandomColor from "./random-color.js";

const postGuestList = async function postGuestList(url = '', data = {}) {

    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

const getGuestList = async function getGuestList(url = '') {

    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}



const Hero = (props) => {

const {listToggle, updateListToggle, inputToggle, updateInputToggle, updateGuestToggle, guestList, updateGuestList} = props;
const [menuToggle, updateMenuToggle] = useState(false);

return(
  <div className="hero-wrapper">
    <div className="hero">
      <div className="circle-menu"
           onClick={()=> updateMenuToggle(!menuToggle)}
      ></div>
      {menuToggle
      ? <div className="hero-options">
          <div className="guest-list"
               onClick={() => {updateListToggle(!listToggle); getGuestList('https://i4jio.sse.codesandbox.io/users');}}
          >{listToggle === false ? 'Show Guest Galaxy' : 'Hide Guest Galaxy'}
          </div>
          <div className="post">
            {inputToggle === true ?
            <input className="guest-input" type="text" placeholder="Add your name..." name="name"
                   onKeyUp={(e) => {if (e.key === 'Enter') { updateListToggle(true); updateInputToggle(false); updateGuestToggle(true); postGuestList('https://i4jio.sse.codesandbox.io/users', {name: e.target.value}); updateGuestList([...guestList, {name: e.target.value}]);};
                  }}
            ></input>
              : ''}
            <div className="guest-add"
                 onClick={() => updateInputToggle(!inputToggle)}
            >{inputToggle === true ? 'X' : 'Join Guest Galaxy'}</div>
          </div>
        </div>
      : ''}
      <h1 className="title">I wonder ...</h1>
        {listToggle === true ?
          <div className="side-scroll">
            <div className="guest-wrapper">
              {guestList.map((user) =>
              <div className="guest">
                <RandomColor />
                <div className="guest-name">{user.name}</div>
              </div>
              )}
            </div>
          </div>
          : ''
          }
      </div>
  </div>
)};

export default Hero;
