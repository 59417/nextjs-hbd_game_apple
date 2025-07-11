import { useState } from 'react';
import classes from './AllPostcards.module.css';
import Postcard from './Postcard';
import Zero from './Zero';


function AllPostcards() {

    const [postcard, setPostcard] = useState(9);

    return (
        <div className={classes.wrapper}>
            <div className={classes.btn_wrapper}>
                <div className="buttons" style={{justifyContent: 'space-between'}}>
                    {
                        postcard===0 ? <button className="button is-success" disabled={true} style={{visibility: 'hidden'}} />
                        : <button className="button is-success is-light" onClick={() => setPostcard(postcard-1)}>
                            &#60;&ensp;對{postcard-1}題</button>
                    }
                    {
                        postcard===9 ? null 
                        : <button className="button is-success is-light" onClick={() => setPostcard(postcard+1)}>
                            對{postcard+1}題&ensp;&#62;</button>
                    }
                </div>
            </div>
            {postcard !== 0 ? <Postcard score={postcard}/> : <Zero/>}
        </div>
    );
};

export default AllPostcards;