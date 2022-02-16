import React, { useState, createContext } from 'react';
import './App.css';
import TodoList from './Components/Todo';


// const MessageContext = createContext()
var idStoreArray = [];
var idStore = []
function App() {
  const [inputdata, setInputData] = useState('');
  const [lists, setLists] = useState([]);
  const [togglesubmit, setToggleSubmit] = useState(true)
  const [isedit, setIsEdit] = useState(null);
 
   const [checkBoxPress,setCheckBoxPress] = useState(false)
 
  const itemEvent = (e) => {
     setInputData(e.target.value)
  }

  const buttonevent = () => {
    if (!inputdata) {
      alert('Please enter todo items')
    }
    else if (inputdata && !togglesubmit) {
      setLists(
        lists.map((elem) => {
          if (elem.id === isedit) {
            return { ...elem, name: inputdata }
          }
          return elem
        })
      )
      setInputData('')
      setToggleSubmit(true)
      setIsEdit(null)


    }
    else {
      const allinputData = { id: new Date().getTime().toString(), name: inputdata,checker:checkBoxPress }
       
       setLists([...lists, allinputData]);
      setInputData('')
    }

  }


 


  const itemDelete = (index) => {

    const updateditems = lists.filter((arrElement) => {
      return index !== arrElement.id
    })
    setLists(updateditems)

  }

  const edititem = (id) => {
    const netEditElement = lists.find((elemnt) => {
      return elemnt.id === id
    })
    setInputData(netEditElement.name)
    setToggleSubmit(false)
    setIsEdit(id)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      buttonevent()
    }
  }

  const checkBoxPressMethod = (id, value)=>{
    const updateditems = lists.map((arrElement) => {
      if( id === arrElement.id){
          arrElement.checker = value;
      }
    return arrElement;
    })

    
    setLists(updateditems)
    

console.log(lists,"list of ")
  }
  const deleteAll = () => {
    const updateditems = lists.filter((arrElement) => {
      return arrElement.checker === false;
    })

    
    setLists(updateditems)

    
  }
  return (

    <div className='App'>
      <div className='innerApp'>
        <h2 style={{
          padding: "10px"
        }}>TODo APP</h2>
        <div className='inputareas'>
          <input type="text"
            placeholder="Add a items"
            onChange={itemEvent}
            onKeyDown={handleKeyDown}
            value={inputdata} />
          {
            togglesubmit ? <button onClick={buttonevent}>Add</button> : <button onClick={buttonevent}>Update</button>
          }
          <div style={{
            marginLeft: "200px",
            marginTop: "10px"
          }}><button onClick={() => deleteAll()}>Delete All</button>
          </div>
        </div>

        {
          lists?.map((itemval) => {
            return <TodoList
              text={itemval.name}
              id={itemval.id}
              key={itemval.id}
              onSelect={itemDelete}
              onEdit={edititem}
              // list={lists}
              checkBoxPress={(id, value) => {
                checkBoxPressMethod(id, value);
              }}
              isChecked={itemval.checker}
            />


          })

        }

      </div>

    </div>

  );
}

export default App;
// export { MessageContext }