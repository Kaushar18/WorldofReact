import React from 'react'
import AccordionComponent from './AccordionComponent'
import { QuestionData } from './data/QuestionData'

function Accordion() {
    return (
        <>
            <AccordionComponent items={QuestionData}/>
        </>
    )
}

export default Accordion
