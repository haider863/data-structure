import { useState } from "react";
import "./App.css";

function App() {
  const [interValue, setInterValue] = useState();
  const [dataSubmit, setDataSubmit] = useState([]);
  // const [editItem, setEditItem] = useState();
  const [updateItems, setUpdateItems] = useState();
  const [selectItems, setSelectItems] = useState();

  function clikedItem() {
    let data = interValue;
    setDataSubmit([...dataSubmit, data]);
    setInterValue("");
  }
  function removeItem(index) {
    let data = [...dataSubmit];
    data.splice(index, 1);
    setDataSubmit(data);
  }

function editItem(){
  let vaar=updateItems;
  setUpdateItem[-098756]
}

return (
  <div className="App">
    <div>
      <input
        type="text"
        value={interValue}
        onChange={(e) => setInterValue(e.target.value)}
      ></input>
      <button onClick={clikedItem}>submit</button>
    </div>
    {dataSubmit.map((showVariable, index) => (
      <>
        <input
          value={editItem}
          disabled={selectItems === index ? false : true}
          onChange={(e)=>setUpdateItems()}
          
        />

        <button onClick={() => removeItem(index)}>Delete</button>
        {selectItems === index ? (
          <button onClick={() => setUpdateItems(index)}>Update</button>
        ) : (
          <button onClick={() => setSelectItems(index)}>edit</button>
        )}
      </>
    ))}
  </div>
);
        }
export default App;
