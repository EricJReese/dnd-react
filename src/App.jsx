import { useState } from 'react';
import './styles.css';
import Classes from "./components/Classes/Classes"
import Description from './components/Description/Description';

function App() {
  const [spellName, setSpellName] = useState('');
  const [result, setResult] = useState();
  const [subclass, setSubclass] = useState();
  const [description, setDescription] = useState()
  


  function handleClick(){
    getFetch()
  }

  function handleOnChange(e){
    setSpellName(e.target.value)
  }
  function getFetch(){
    const sanitizedSpellName = spellName.split(' ').join('-').toLowerCase()
    const url = `https://www.dnd5eapi.co/api/spells/${sanitizedSpellName}`
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          setResult(data.classes)
          setSubclass(data.subclasses)
          setDescription(data.desc)
           
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

  return (
    <div className="App">
      <div>
          <h1 >DND Reference</h1>
        </div>
      <div>
        <h2 className="main-content">Search the Spellbook</h2>
      <div className="main-content">  
        <input className="input" type="text" placeholder="Known Spells" value={spellName} onChange={handleOnChange} />
        <button type= "button" name="button" onClick={handleClick}>Search</button>
      </div>
      </div>
      <div>
        <Classes characterClasses={result} subclasses={subclass} />
        <Description compDescription={description} />
      </div>
    </div>
  );
}

export default App;