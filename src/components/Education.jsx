import { useState } from "react"
export default function Education({eduList, seteduList}){

    const [edu, setedu] = useState([{
        schoolName: '',
        degree : '',
        major : '',
        gradDate : ''
    }])


    const updateName = (schoolName) => {
        setedu((prevInfo) => ({ ...prevInfo, schoolName }));
    }

    const updateDegree = (degree) => {
        setedu((prevInfo) => ({ ...prevInfo, degree }));

    }

    const updateGrad = (gradDate) => {
        setedu((prevInfo) => ({ ...prevInfo, gradDate }));
    }

    const updateMajor = (major) => {
      setedu((prevInfo) => ({ ...prevInfo, major }));
  }

    const handleClick = () =>{
        seteduList((prevInfo) => ([ ...prevInfo, edu] ));

        const ele = document.getElementsByClassName('school-name')
        console.log("ele",ele)
        ele.textContent = ""


    }


    return (<>
    <input placeholder='School Name' className="school-name input-i"
     onChange={(event) => {
        updateName(event.target.value);
      }} 
    >

    </input>
        <input placeholder='Degree' className="school-degree input-i"
         onChange={(event) => {
            updateDegree(event.target.value);
          }}
        ></input>

<input placeholder='Major' className="school-major input-i"
         onChange={(event) => {
            updateMajor(event.target.value);
          }}
        ></input>

    

        <div className="date-i">
        <label for="Graduation Date">Grad Date</label>
<input placeholder='Graduation Date' className="school-degree input-i" type="date"
         onChange={(event) => {
          updateGrad(event.target.value);
          }}
        ></input>
        </div>



        <button  onClick={(event) => {
          handleClick();
        } } className="add-btn">Add Education</button>

    
    </>
        
    )

}