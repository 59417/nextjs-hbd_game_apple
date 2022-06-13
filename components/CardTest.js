import Image from 'next/image';
import { useState } from 'react';
import classes from './Card.module.css';
import { QA } from '../data/data'; 
import CardContent10 from './CardContent10';
// import Q1 from './questions/Q1';
// import Q2 from './questions/Q2';
// import Q3 from './questions/Q3';
// import Q4 from './questions/Q4';
// import Q5 from './questions/Q5';
// import Q6 from './questions/Q6';
// import Q7 from './questions/Q7';
// import Q8 from './questions/Q8';
// import Q9 from './questions/Q9';
// import Q10 from './questions/Q10';


function CardTest(props) {

    const page = props.pages;
    console.log(page === undefined);
    // const temp = QA[0];

    // const [currOpt, setCurrOpt] = useState(1);
    // function handleSwitch(id) {
    //     setCurrOpt(id) 
    // };
    // function getOptStyle(id) {
    //     if (currOpt === id) {
    //         return {backgroundColor: 'rgb(216, 216, 216)'}
    //     } else {
    //         return {backgroundColor: 'rgba(216, 216, 216, 0)'}
    //     }
    // };

    const [currSelected, setCurrSelected] = useState(0);
    function handleSelect(id) {
        if (currSelected !== id) {
            setCurrSelected(id) 
        } else {
            setCurrSelected(0)
        }
    };
    // function getSelectedStyle(id) {
    //     if (currSelected === id) {
    //         return {
    //             // border: '1px solid black',
    //             boxShadow: '0 0 3px rgb(95, 95, 95)',
    //             backgroundColor: '#ffbb00',
    //             color: 'white',
    //             fontWeight: '700',
    //         }
    //     } else {
    //         return null
    //     }
    // };

    return (
        <div className={classes.container}>
            <CardContent10 question={QA[9]} curr_selected={currSelected} handle_select={handleSelect}/>
            <div className={classes.confirm}>
                <button className="button is-success is-outlined" disabled={currSelected !== 0 ? false : true}>
                    確認&ensp;
                    <Image src="/check.png" alt="01" width="15px" height="15px"/>
                </button>
            </div>
        </div>
    );
};

export default CardTest;