import React from 'react'

class Sushi extends React.PureComponent{

  eatSushi = (sushi) => {
    if ((this.props.moneyRemaining - sushi.price) >= 0) {
      // this.props.returnPlate(this.props.sushi)
      this.props.payForSushi(sushi)
      // this.eaten = true
    } else { alert("You need more monies to eat that!")}
    
  }

  render(){
    return (
      <div className="sushi"> 
        <div className="plate" 
             onClick={() => this.eatSushi(this.props.sushi)}>
          { 
            this.props.eaten ?
              null
            :
              <img src={this.props.sushi.img_url} alt={this.props.sushi.name} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi