import React, { useState } from 'react'
 
 


const TodoList = (props) => {
     
    return (
    
        <div className='getlists'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" value={props.isChecked} onChange={(e) => {
                             props.checkBoxPress(props.id, e.target.checked)
                              }}
                            />
                        </td>

                        <td style={{ textDecorationLine: props.isChecked === true ? 'line-through' : null, textDecorationStyle: 'solid' }} >{props.text} </td>

                        <div className='buttons' 
                        style={{
                            display:"flex",
                            // backgroundColor:"red",
                            width:"10%"
                        }}
                        >
                            <td className='deletebutton' style={{
                                
                            }}> <button onClick={() => {
                                props.onSelect(props.id)
                            }} > Delete </button>
                            </td>
                            <td className='deletebutton' style={{
                                 
                            }}><button onClick={() => {
                                props.onEdit(props.id)
                            }}>Edit</button></td>
                        </div>
                    </tr>
                </tbody>
            </table>

        </div>
        // </DragDropContext>
    )
}

export default TodoList
