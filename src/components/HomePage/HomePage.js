import React, {Component} from 'react'

class HomePage extends Component{
    
    onNextClick = () => {
        this.props.history.push("/howAreWeFeeling")
    }
    render(){
        return(
            <div>

            <button onClick={this.onNextClick}>Start your Feedback!</button>

          <br/>
          </div>
        )
    }
}
export default HomePage;