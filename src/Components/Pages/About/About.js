import React,{useState} from 'react'
import './About.css';
import Component1 from '../../Component1';
import Component2 from '../../Component2';
import Componet3 from '../../Componet3';

function About() {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    
    return (
        <div>
           <Component1 onInputChange={setFirstName}/>
           <Component2 onInputChange={setLastName} />
           <Componet3 firstname={firstName} lastname={lastName}/>
        </div>
    )
}

export default About
