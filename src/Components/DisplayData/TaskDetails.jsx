import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fileDownload from 'js-file-download'
import FileSaver from 'file-saver';
import "./Task.css"

const TaskDetails = () => {
    const[data , setData]=useState([])
    console.log("data",data)

    
    useEffect(()=>{
axios.get("http://127.0.0.1:8000/api/test/").then((res)=>{

  console.log("shubha",res)
    setData(res.data)
    
}).catch(err=>{
    console.log(err)
})
    },[])

    const Download=(file)=>{
      FileSaver.saveAs(
        file
        ,
        file.substring(33,60));
    }

    
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
  {data.map(item=>(
  <tbody>
      
    <tr>
      <td>{item.id}</td>
      <td>{item.task_ref_no}</td>
      <td>{item.instruction}</td>
      <td onClick={(e)=>Download(item.file)("file")} className="file-text">{item.file.substring(33,60)}</td>
     
    </tr>
     
  </tbody>
  ))}
</table>
            
            
        </div>
    );
};

export default TaskDetails;