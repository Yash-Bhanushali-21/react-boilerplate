import { connect } from 'react-redux';
import { addTask } from '../actions';
import homepageCSS from './styles/homepage.module.css';


const Homepage = ({appState,dispatch}) => {

    const handleAddTask = () => {
        const task = document.querySelector('.task').value;
        dispatch(addTask(task));
        document.querySelector('.task').value = "";
      }
    
    return (
      <div className = {homepageCSS.container}>
          <div className = {homepageCSS.wrapper}>
           <input type="text" className="task" placeholder = "type new task here!"></input>
           <button className = {homepageCSS.button} onClick = {handleAddTask}>add new task</button>
          </div>
          <div>
          <h2>Tasks entailed are : </h2>
          <div  className={homepageCSS.footwrapper}>{
            appState.tasks.map((task) =>(
              <p  className={homepageCSS.post}>{task}</p>
            ))
            }
           </div>
          </div>
      </div>
    );
}

const mapStateToProps = (state) => ({
    appState : state
  });
  
  const mapDispatchToProps = (dispatch) => ({
    dispatch
  });


export default connect(mapStateToProps,mapDispatchToProps)(Homepage);