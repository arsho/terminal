import React, {Component} from 'react';

class CommandPrefix extends Component{
    render(){
        return(
            <span>
                <span className="green bold">
                    <i className="fa fa-long-arrow-right"></i>
                </span>
                <span className="skyblue bold"> ~ </span>
            </span>
        );
    }
}

export default CommandPrefix;