import React, {Component} from 'react';

/**
 * This card renders the detailed food object for selecting and adding to the current diet day
 */
export default class DetailedCard extends Component {
    constructor(props){
        super(props);
        this.handleTextChange= this.handleTextChange.bind(this);
    }
    handleTextChange(e) {
        if(Number(e.target.value) ) {
            this.props.onPortionChange(Number(e.target.value));
        }
        else{
            this.props.onPortionChange(0);
        }


    }


    render() {
        return (
            <div className='card' key={this.props.chosenFood.ndbno} id={this.props.chosenFood.ndbno}>
                <div className="card-body">
                    <h5>{this.props.chosenFood.name.toLowerCase()}</h5>
                    <p>Portion: 100g</p>
                    <div className="row">
                        <div className="col-sm-2 col-12">Portein: {this.props.chosenFood.protein} g</div>
                        <div className="col-sm-3 col-12">Carbohydrates: {this.props.chosenFood.carbohydrates} g</div>
                        <div className="col-sm-2 col-12">Fat: {this.props.chosenFood.fat} g</div>
                        <div className="col-sm-2 col-12">Fiber: {this.props.chosenFood.fiber} g</div>
                        <div className="col-sm-3 col-12">Energy: {this.props.chosenFood.kcals} Kcals</div>
                    </div>
                    <div className="row">
                        <span className="col-2"></span>
                        <input type="text"  className="col-2" value={this.props.portions} onChange={this.handleTextChange}/>
                        <span className="col-2"></span>
                        <button className="btn-primary btn col-4" id='portionsTakenBut' onClick={this.props.handleNewFood}>Submit</button>
                        <span className="col-2"></span>
                    </div>
                </div>
            </div>
        );
    }
}