import './LogoBurger.css'

const LogoBurger = prevProps => {
  return (
    <div>
      <div id='logo-burger' onClick={prevProps.handleClickBurger}>
        <div className={prevProps.openBurger ? 'clicked-bar1' : 'bar1'}></div>
        <div className={prevProps.openBurger ? 'clicked-bar2' : 'bar2'}></div>
        <div className={prevProps.openBurger ? 'clicked-bar3' : 'bar3'}></div>
      </div>
    </div>
  )
}

export default LogoBurger
