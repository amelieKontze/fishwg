import {useState} from 'react';

function UseAccordion() {

    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    function toggleAccordion() {
        setIsAccordionOpen(!isAccordionOpen);
    }

    return {toggleAccordion, isAccordionOpen}
}

export default UseAccordion;