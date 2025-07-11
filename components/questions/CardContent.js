import Image from 'next/image'
import { Fragment } from 'react'
import classes from './CardContent.module.css'
// import { QA } from '../../data/data';

export default function CardContent({
  question: ques,
  curr_selected: currSelected,
  handle_select: handleSelect,
  option_prop: optionProp,
}) {
  const { currOpt, handleSwitch } = optionProp

  // different class between multi pics / single pic
  const getImgClass = () => (ques.imgs.length > 1 ? classes.imgs : classes.single_img)

  // change pic's option number style
  const getOptStyle = (id) =>
    currOpt === id
      ? { backgroundColor: 'rgb(216, 216, 216)' }
      : { backgroundColor: 'rgba(216, 216, 216, 0)' }

  // change current showed pic
  const getImgStyle = (id) => (currOpt === id ? null : { visibility: 'hidden' })

  // change current selected ans btn
  const getSelectedStyle = (id) =>
    currSelected === id
      ? {
          boxShadow: '0 0 3px rgb(95, 95, 95)',
          backgroundColor: '#ffbb00',
          color: 'white',
          fontWeight: '700',
        }
      : null

  return (
    <Fragment>
      <div className={classes.question}>
        <div className={classes.title}>
          <h1>{ques.title}</h1>
        </div>
        <div className={classes.content}>
          <p>{ques.content}</p>
        </div>
        <div className={classes.option} style={ques.orders.length > 1 ? null : { display: 'none' }}>
          <h3>{currOpt}</h3>
        </div>
        <div className={getImgClass()}>
          {ques.imgs.map((path) => {
            return (
              <Image
                key={path}
                src={path}
                alt="pic"
                objectFit="cover"
                layout="fill"
                style={getImgStyle(ques.imgs.indexOf(path) + 1)}
              />
            )
          })}
        </div>
        <div
          className={classes.switch}
          style={
            ques.orders.length > 1
              ? { gridTemplateColumns: `repeat(${ques.orders.length}, 1fr)` }
              : { display: 'none' }
          }
        >
          {ques.orders.map((id) => {
            return (
              <div key={id} onClick={() => handleSwitch(id)} style={getOptStyle(id)}>
                {id}
              </div>
            )
          })}
        </div>
      </div>
      <div className={classes.ans}>
        {ques.options.map((opt) => {
          return (
            <div key={ques.options.indexOf(opt)}>
              <button
                className="button is-warning"
                onClick={() => handleSelect(ques.options.indexOf(opt) + 1)}
                style={getSelectedStyle(ques.options.indexOf(opt) + 1)}
              >
                {opt}
              </button>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}
