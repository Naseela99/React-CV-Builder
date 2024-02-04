
import { useState } from "react";
export default function WorkEx ({expList, setExpList}) {

    const [workex, setWork] = useState([{
        companyName: '',
        designation : '',
        from : '',
        end: '',
        details: ''
    }])

    const updateCompName = (companyName) => {
        setWork((prevInfo) => ({ ...prevInfo, companyName }));
    }

    const updateDesignation = (designation) => {
        setWork((prevInfo) => ({ ...prevInfo, designation }));
    }

    const updateWorkDateFrom = (from) => {
        setWork((prevInfo) => ({ ...prevInfo, from }));
    }

    const updateWorkDateEnd = (end) => {
        setWork((prevInfo) => ({ ...prevInfo, end }));
    }

    const handleClick = () =>{
        setExpList((prevInfo) => ([ ...prevInfo, workex] ));


    }

    const updateDetails = (details) => {
        setWork((prevInfo) => ({ ...prevInfo, details }));
    }

    
    return (
        <>
         <input
        type="text"
        placeholder="Company Name"
        className="input-i"
        onChange={(event) => {
            updateCompName(event.target.value);
        }}/>

        <input
        type="text"
        placeholder="Designation"
        className="input-i"

        onChange={(event) => {
            updateDesignation(event.target.value);
        }}
      />
    <div className="date-i">
        <label htmlFor="Work Start Date">Start Date</label>
        <input
        type="date"
        placeholder="Work Start Date"
        className="input-i"

        onChange={(event) => {
            updateWorkDateFrom(event.target.value);
        }}
      />
    </div>

    <div className="date-i">
        <label htmlFor="Work End Date">End Date</label>
        <input
        type="date"
        placeholder="Work End Date"
        className="input-i"

        onChange={(event) => {
            updateWorkDateEnd(event.target.value);
        }}
      />
      
    </div>
    

   

    <input
        type="text"
        placeholder="Datails"
        className="input-i work-deets"

        onChange={(event) => {
            updateDetails(event.target.value);
        }}
      />

        <button  
        onClick={(event) => {
          handleClick();
        }} className="add-btn">Add Work Experience</button>



        </>
       
    );

}