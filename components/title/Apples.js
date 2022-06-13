import Image from 'next/image';
import classes from './Apples.module.css';


function Apples() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.img_wrapper}>
                <Image 
                    src="/apples.png"
                    alt="apples" 
                    objectFit='cover' 
                    layout="fill" 
                />
            </div>
        </div>
    );
};

export default Apples;