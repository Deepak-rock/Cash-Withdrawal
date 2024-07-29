// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(pervstate => ({balance: pervstate.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="profile-container">
            <div className="logo-container">
              <p className="logo">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="balance-amount">
              {balance}
              <br />
              <span className="rupees">In Rupees</span>
            </p>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="choose">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-list">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  denominationsDetails={eachItem}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
