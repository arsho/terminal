import React, {Component} from 'react';

class SingleLineComponent extends Component{
    render(){
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.line}}></div>
        );
    }
}

export default SingleLineComponent;