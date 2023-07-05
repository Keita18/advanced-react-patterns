// Compound Components
// http://localhost:3000/isolated/exercise/02.js
// 📜 https://reactjs.org/docs/react-api.html#reactchildren
// 📜 https://reactjs.org/docs/react-api.html#cloneelement

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    // if (typeof child.type === 'function') {
    //   return React.cloneElement(child, {on, toggle})
    // } else {
    //   return child
    // }

    if (allowedTypes.includes(child.type)) {
      return React.cloneElement(child, {on, toggle})
    } else {
      return child
    }
  })
}

const ToggleOn = ({on, children}) => (on ? children : null)
const ToggleOff = ({on, children}) => (on ? null : children)
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

const NotAlowwed = ({on, children}) =>
  on ? 'on is true from togggle' : 'not possible'

const allowedTypes = [ToggleOff, ToggleOn, ToggleButton, NotAlowwed]
function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
        <NotAlowwed />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
