import './App.css';
import { MdDarkMode } from "react-icons/md"; //Dark Mode
import { MdOutlineDarkMode } from "react-icons/md"; //Light Mode
import { MdEdit } from "react-icons/md"; //Edit Button - Dark Mode
import { MdOutlineEdit } from "react-icons/md"; //Edit Button - Light Mode
import { AiFillDelete } from "react-icons/ai";//Delete Button - Dark Mode
import { AiOutlineDelete } from "react-icons/ai";//Delete Button - Light Mode
import { TiTick } from "react-icons/ti";//Completed Button - Dark Mode
import { TiTickOutline } from "react-icons/ti";//Completed Button - Light Mode



import { useDispatch, useSelector } from 'react-redux';
import { add, complete, edit, remove } from './redux/Action/action';
import { useEffect, useState } from 'react';


// export const ACTION_TYPES = {
//   ADD : "add",
//   EDIT : "edit",
//   REMOVE : "remove",
//   COMPLETE : "complete",
//   THEME : "theme"
// }

function App() {

  // const theme = useSelector((state) => state.themeReducer.theme)
  // // console.log(theme);
  const list = useSelector((state) => state.todoReducer.list);
  console.log(list);
  // const editTodo = useSelector( (state) => state.todoReducer.editTodo);
  // // console.log(editTodo);
  // const completed = useSelector((state) => state.todoReducer.completed);
  // // console.log(completed);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");


  return (
    <div>
      <header>
        <h2 className='heading-text'>To-Do App</h2>
        {/* <div className='theme-btn'>
          {
            theme ? 
              <MdDarkMode onClick={() => dispatch(theme)}/> : 
              <MdOutlineDarkMode onClick={() => dispatch(theme)}/>
          }
          </div> */}
      </header>
      <main>
          <form onSubmit={() => {dispatch(add(input));setInput("")}}>
              <input type="text" value={input} placeholder='Enter A Task' onChange={(e) => setInput(e.target.value)} required />
              <button>
                ADD
              </button>
          </form>
          <div>
            {/* {
              list.map( (todo) => {
                return (
                  <div key={todo.id}>
                      <div>
                        <div>{todo.task}</div>
                        <div>
                          {theme ? 
                              <MdEdit onClick={() => {dispatch(edit(todo));setInput(editTodo.task)}}/> :
                              <MdOutlineEdit onClick={() => {dispatch(edit(todo));setInput(editTodo.task)}}/>
                            }
                          {theme ? 
                              <AiFillDelete onClick={() => dispatch(remove(todo))}/> :
                              <AiOutlineDelete onClick={() => dispatch(remove(todo))}/>
                            }
                          {theme ? 
                              <TiTick onClick={() => dispatch(complete(todo))}/> :
                              <TiTickOutline onClick={() => dispatch(complete(todo))}/>
                            }
                        </div>
                      </div>
                  </div>
                )
              })
            } */}
            <div className='single-line'>

            </div>
            <div className='complete-tasks-display'>
              
            </div>
          </div>
      </main>
      <footer>
        <p>Developed by Farrukh</p>
      </footer>
    </div>
  );
}

export default App;
