import React, {Component}from "react"
import landingData from "./landingData"


class Slide extends Component {
    constructor(props) {
      super(props);
      this.state = {landing: landingData};
    }
  render() {
      return(
        <section>
        <div> 
           <h2 className="title">Portfolio</h2>
        </div>
        {
          this.state.landing.map((s, index) =>
            <div className={
              index === this.props.activeIndex ? 'active' : 'inactive'}
              key={index}>
                <p style={{backgroundColor: s.labelColor}}className="label">{s.label}</p>
                <img className="gitHubImage"src={s.gitHubImage} alt="GitHub"/>
                <img className="goLiveImage" src={s.goLiveImage} alt="GoLive"/>
            </div>
          ) }
          </section>
      )
    }
  }
  export default Slide;