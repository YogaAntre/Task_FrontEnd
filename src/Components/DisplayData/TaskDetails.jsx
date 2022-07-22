import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TaskDetails = () => {
    // const[data , setData]=useEffect()
    useEffect(()=>{
axios.get("").then((res)=>{
    // setData(res)
    console.log(res)
}).catch(err=>{
    console.log(err)
})
    })
    return (
        <div>
        <Link to="add_task" type="button" class="btn btn-primary">Add Task</Link>
          
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Ref number</th>
      <th scope="col">Instruction</th>
      <th scope="col">File</th>
    </tr>
  </thead>
  <tbody>
      {/* {data.map(item=>{
    <tr>
      <th> </th>
      <td>{item}</td>
      <td>{item}</td>
      <td>{item}</td>
    </tr>
      })} */}
  </tbody>
</table>
            
            
        </div>
    );
};

export default TaskDetails;