import { useState } from "react"
import Education from "./Education"
import GenInfo from "./Information"
import WorkEx from "./WorkEx"
import Projects from "./projects"
import PdfDownloadComponent from "./Download"
export default function CV_Content(){

  

    const [eduList,setEduList] = useState([])

    const [info,setInfo] = useState({name: 'John Doe',
                                    email : 'john.doe@abc.com',
                                    city: 'city, ST'
                                        
                                    })

    const [expList, setExpList] = useState([])
    const [proList, setProList] = useState([])


    return (
        <div className="cv-content">
        <div className="cv-info">

        <div className="download">
            <PdfDownloadComponent/>
        </div>

        <div className="gen">
        <div className="form-header">General Information</div>

        <GenInfo 
        info={info}
        setInfo = {setInfo}/>

        </div>

        <div className="edu">
            <div className="form-header">Education Details</div>
        <Education 
        eduList={eduList}
        seteduList={setEduList}/>
        </div>

        <div className="work-ex">
        <div className="form-header">Work Experience Details</div>
        <WorkEx
        expList = {expList} 
        setExpList = {setExpList}
        />

        </div>

        <div className="pro">
        <div className="form-header">Project Details</div>
        <Projects
        proList = {proList} 
        setProList = {setProList}
        />

        </div>
       

       

       

        </div>

        <div className="cv-render">

        <div className="gen-info information">
            <div className="info-name">{info.name}</div>
            <div className="deets">
            <div className="info-email">{info.email}</div>
            <div className="info-city">{info.city}</div>
            </div>
           


        </div>
        <div className="education-content information">
            <div className="header">Education</div>
            <div className="card">
            {eduList.map((eduItem,idx) => (
                <>
            <div key={idx} className="card-i i-name">{eduItem.schoolName}</div>
            <div  key={idx} className="card-i">{eduItem.degree}</div>
            <div  key={idx} className="card-i">Major: {eduItem.major}</div>

            <div  key={idx} className="card-i">{eduItem.gradDate}</div>


                </>

        ))}
            </div>
        </div>

        <div className="experience-content information">
            <div className="header">Experience</div>
            <div className="card">
            {expList.map((expItem,idx) => (
                <>
            <div key={idx} className="card-i i-name">{expItem.companyName}</div>
            <div  key={idx} className="card-i">{expItem.designation}</div>

            <div className="exp-dates">
                <div  key={idx} className="card-i">{expItem.from}</div>
                <div  key={idx} className="card-i">{expItem.end}</div>    
            </div>
            <div  key={idx} className="card-i">{expItem.details}</div>


            

                </>

        ))}
            </div>
        </div>

        <div className="project-content information">
            <div className="header">Projects</div>
            <div className="card">
            {proList.map((proItem,idx) => (
                <>
            <div key={idx} className="card-i i-name">{proItem.proName}</div>
     
            <div  key={idx} className="card-i">{proItem.proDetails}</div>


            

                </>

        ))}
            </div>
        </div>
        



        </div>
       

       
        
        </div>
    
   

    )
    

}