
import { useState } from "react";
export default function Projects ({proList, setProList}) {

    const [pro, setPro] = useState([{
        proName: '',
        proDetails: ''
    }])

    const updateProName = (proName) => {
        setPro((prevInfo) => ({ ...prevInfo, proName }));
    }


    const updateProDetails = (proDetails) => {
        setPro((prevInfo) => ({ ...prevInfo, proDetails }));
    }

    const handleClick = () =>{
        console.log(pro)

        setProList((prevInfo) => ([ ...prevInfo, pro] ));


    }

    
    return (
        <>
         <input
        type="text"
        placeholder="Project Name"
        className="input-i"
        onChange={(event) => {
            updateProName(event.target.value);
        }}/>

        <input
        type="text"
        placeholder="Project Details"
        className="input-i work-deets"

        onChange={(event) => {
            updateProDetails(event.target.value);
        }}
      />
    

        <button  
        onClick={(event) => {
          handleClick();
        }} className="add-btn">Add Project</button>



        </>
       
    );

}