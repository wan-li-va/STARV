import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Entry from './Entry.js';

class StatsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
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
            console.log( successes );
            percentSucc = Math.round(successes / this.props.pastFasts.length) * 100;
            console.log( percentSucc);
        } else {
            percentSucc = 0;
        }
            
        var starvs = this.props.pastFasts.map((fast, index) => {
            return (
                <Entry index={index} fast={fast}> </Entry>
            )
        })
        return( 
        <div className="StatsPanel">
            <h1>History of STARVs</h1>
            <div>
            {percentSucc}
            </div>

            <div>
            {starvs}
            </div>
            
        </div>
        )
    }
}

export default StatsPanel;
            