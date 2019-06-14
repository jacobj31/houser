import React, {Component} from 'react'

class House extends Component {
    render(props){
        let {id} = this.props.house
        return(
            <div>
                {this.props.house.name}
                
                
                <button onClick={() => this.props.delete(id)}>Delete</button>
            </div>
        )
    }
}



export default House