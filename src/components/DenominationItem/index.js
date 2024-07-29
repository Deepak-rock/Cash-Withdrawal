// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, updateBalance} = props
  const {value} = denominationsDetails

  const onClickWithdraw = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button className="amount-button" onClick={onClickWithdraw} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
