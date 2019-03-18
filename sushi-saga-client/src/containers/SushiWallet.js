import React from 'react'

export default ({moneyToAdd, addMoney, handleChange}) => {
  return (
    <div className="wallet">
      <h1>Welcome to Sushi Wallet!</h1>
      <form onSubmit={addMoney}>
        <label htmlFor='money'>Wallet: </label>
        <input type='number' name='money' value={moneyToAdd} onChange={handleChange} min='0' max='100' step='10'/>
        <button type="submit" name='add' className='button'>Add Monies!</button>
      </form>
    </div>
  )

}