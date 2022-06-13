import Image from 'next/image';
import { useState } from 'react';
import { Fragment } from 'react';
import classes from './CardContent.module.css';
// import { QA } from '../../data/data'; 

function CardContent(props) {

    const { 
        question: ques,  // { id, title, content, options, imgs, orders, ans }
        curr_selected: currSelected,  // 1,2,3,4
        handle_select: handleSelect,  // func
        option_prop: optionProp 
    } = { ...props };

    const currOpt = optionProp.currOpt;  // 1,2,3,4
    const handleSwitch = optionProp.handleSwitch;  // func

    // different class between multi pics / single pic 
    function getImgClass() {
        if (ques.imgs.length > 1) {
            return classes.imgs
        } else {
            return classes.single_img
        }
    };

    // change pic's option number style
    function getOptStyle(id) {
        if (currOpt === id) {
            return {backgroundColor: 'rgb(216, 216, 216)'}
        } else {
            return {backgroundColor: 'rgba(216, 216, 216, 0)'}
        }
    };
    // change current showed pic
    function getImgStyle(id) {
        if (currOpt === id) {
            return null
        } else {
            return {visibility: 'hidden'}
        }
    };

    // change current selected ans btn
    function getSelectedStyle(id) {
        if (currSelected === id) {
            return {
                boxShadow: '0 0 3px rgb(95, 95, 95)',
                backgroundColor: '#ffbb00',
                color: 'white',
                fontWeight: '700',
            }
        } else {
            return null
        }
    };

    return (
        <Fragment>
            <div className={classes.question}>
                <div className={classes.title}>
                    <h1>{ques.title}</h1>
                </div>
                <div className={classes.content}>
                    <p>{ques.content}</p>
                </div>
                <div className={classes.option} style={ques.orders.length > 1 ? null : {display: 'none'}}>
                    <h3>{currOpt}</h3>
                </div>
                <div className={getImgClass()}>
                    {ques.imgs.map(path => {
                        return (
                            <Image 
                                key={path} 
                                src={path} 
                                alt="pic" 
                                // width="100%" 
                                // height="100%" 
                                objectFit='cover' 
                                layout="fill" 
                                style={getImgStyle(ques.imgs.indexOf(path)+1)}/>
                        )
                    })}
                </div>
                <div 
                    className={classes.switch} 
                    style={ques.orders.length > 1 
                        ? {gridTemplateColumns: `repeat(${ques.orders.length}, 1fr)`} 
                        : {display: 'none'}}
                >
                    {ques.orders.map(id => {
                        return (
                            <div key={id} onClick={() => handleSwitch(id)} style={getOptStyle(id)}>
                                {id}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={classes.ans}>
                {ques.options.map(opt => {
                    return (
                        <div key={ques.options.indexOf(opt)}>
                            <button 
                                className="button is-warning" 
                                onClick={() => handleSelect(ques.options.indexOf(opt)+1)} 
                                style={getSelectedStyle(ques.options.indexOf(opt)+1)}
                            >
                                {opt}
                            </button>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
};

export default CardContent;