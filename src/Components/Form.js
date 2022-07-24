import "./Form.css"
import {useState} from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";



function FormTask() {
    const history = useNavigate();
    
    const [Img, setImg] = useState(null);
    const [imgsize, setImgsize] = useState([]);
   
    const[refno, setRefno]=useState([]);
    const[instruction , setIntructiion]=useState([])

    console.log("Img",Img)
    console.log("ref no",refno)
const onSubmit=()=>{
const data = new FormData();

data.append("file",Img);
data.append("task_ref_no",refno);
data.append("instruction",instruction);

axios.post("http://127.0.0.1:8000/api/test/",data).then(res=>{
  console.log(res)
  history("/");
}).catch(err=>{
  console.log(err)
})
        
     
}

    const onChangePicture = (event) => {
        setImg(event.target.files[0]);
      setImgsize(event.target.files[0].size)
      };;
  return (
    <div className="container form-head" style={{marginTop:"5%"}}>
        <h2>
            Add Task Details
        </h2>
        <br></br>
 
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Ref Number</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="123456787" onChange={(e)=>setRefno(e.target.value)}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Instruction</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" onChange={(e)=>setIntructiion(e.target.value)}></textarea>
</div>
<div class="mb-3">
  <input class="form-control" type="file" id="formFile" 
   onChange={onChangePicture}
  multiple/>
</div>
<button onClick={onSubmit}>
    Send
</button>
    </div>
  );
}

export default FormTask;