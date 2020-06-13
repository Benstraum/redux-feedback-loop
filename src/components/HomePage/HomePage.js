import React, {Component} from 'react'

class HomePage extends Component{
    
    onNextClick = () => {
        this.props.history.push("/howAreWeFeeling")
    }
    render(){
        return(
            <div>
            <header className="Home-header">
            <h1 className="Home-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
            <button onClick={this.onNextClick}>Start your Feedback!</button>
          </header>
          <br/>
          </div>
        )
    }
}
export default HomePage;