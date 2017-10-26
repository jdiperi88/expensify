import React, {Component} from 'react';

class  EditPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div> 
                editing id:{this.props.match.params.id}
            </div>
        )
    }
}

export default EditPage;