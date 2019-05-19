import React, {Component} from 'react';

class CommandPrefix extends Component{
    render(){
        return(
            <span>
                <span className="command_prefix_icon bold">
                    <i className="fa fa-long-arrow-right"></i>
                </span>
                <span className="command_prefix_text bold"> ~ </span>
            </span>
        );
    }
}

export default CommandPrefix;