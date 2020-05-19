import React, { Component } from "react";
import Entry from './Entry.js';

class StatsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    calcSuccess = () => {
        let percentSucc;
        if ( this.props.pastFasts.length !== 0 ){
            let successes = 0;
            for ( let i = 0; i < this.props.pastFasts.length; i++){
                let fastInst = this.props.pastFasts[i];
                let wasSucc = fastInst.wasSuccessful;
                if (wasSucc){
                    successes++;
                }
            }
            percentSucc = Math.round(successes / this.props.pastFasts.length * 100);
        } else {
            percentSucc = "";
        }
        return percentSucc;
    }

    render() {
            
        var starvs = this.props.pastFasts.map(fast => {
            return (
                <Entry key={fast.index.toString()} index={fast.index} fast={fast}> </Entry>
            )
        })
        return( 
        <div className="StatsPanel">
            <h1>STARV History</h1>
            <div>
                <strong>Success rate: {(this.props.pastFasts.length==0) ? "" : this.calcSuccess()}% </strong>
            </div>

            <div>
            {starvs}
            </div>
            
        </div>
        )
    }
}

export default StatsPanel;
            