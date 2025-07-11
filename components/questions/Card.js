import Image from 'next/image'
import CardContent from './CardContent'
import CardContent10 from './CardContent10'
import { QA } from '../../data/data'
import { iconCheck } from '../../data/imgs'
import classes from './Card.module.css'

export default function Card({
  curr_state: currState,
  handle_confirm: handleConfirm,
  handle_select: handleSelect,
}) {
  return (
    <div className={classes.container}>
      {currState.currCard < 9 ? (
        <CardContent
          question={QA[currState.currCard]}
          curr_selected={currState.currSelected}
          handle_select={handleSelect}
          option_prop={currState.option}
        />
      ) : (
        <CardContent10
          question={QA[9]}
          curr_selected={currState.currSelected}
          handle_select={handleSelect}
        />
      )}
      <div className={classes.confirm}>
        <button
          className="button is-success is-outlined"
          disabled={currState.currSelected !== 0 ? false : true}
          onClick={handleConfirm}
        >
          確認&ensp;
          <Image src={iconCheck} alt="01" width={15} height={15} />
        </button>
      </div>
    </div>
  )
}
