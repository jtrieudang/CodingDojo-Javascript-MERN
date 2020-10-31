import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabs'

//creating array item array
const items =[
  {
    label:'Tab 1',
    content: 'Tab 1 content',
    //need to create a callback function...
    callback: () => console.log('clicked on first tab')
  },
  {
    label:'Tab 2',
    content: 'Tab 2 content',
    callback: () => console.log('clicked on second tab')
  },
  {
    label:'Tab 3',
    content: 'Tab 3 content',
    callback: () => console.log('clicked on third tab')
  }
]

function App() {
  return (
    <div className="App">
      {/* we're inside a jsx block so that's why with using '{}' <- this is an array */}
      <Tabs items={items} />
    </div>
  );
}

export default App;
