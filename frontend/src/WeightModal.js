import React, { Component } from 'react';


export default class WeightModal extends Component{
    constructor(props) {
        super(props);

        this.state={
            weight:props.weight
        };
    }

    render() {
        let actual=<span></span>;
        if (this.state.weight){
            actual=<span> Today's register weight is {this.state.weight}</span>
        }
        return (
            <div className="modal fade" id="weightModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        
                        <div className="modal-header">
                            <h4 className="modal-title">Input your weight daily</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        
                        <div className="modal-body row">
                            <input id="weight" type="text" className="col-9" />
                            <button type="button" className="submitWeight col-3 btn btn-primary">Submit</button>
                            {actual}
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

    );
    }
}