import React, {Component} from 'react';

class CommandPrefix extends Component{
    render(){
        return(
            <span>
                <span className="green bold">
                    <i className="fa fa-long-arrow-right"></i>
                    {/*<i className="fa fa-terminal"></i>*/}
                </span>
                <span className="skyblue bold"> terminal </span>
            </span>
        );
    }
}

export default CommandPrefix;