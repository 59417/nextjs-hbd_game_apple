import classes from './Counting.module.css';

function Counting() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.text}>
                <h1>正在數蘋果...</h1>
            </div>
            <div className={classes.bar}>
                <progress className="progress is-danger" max="100">30%</progress>
            </div>
        </div>
    )
};

export default Counting;