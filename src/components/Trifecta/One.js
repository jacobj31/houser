import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store from '../../store'
import {UPDATE_NAME} from '../../store'

class One extends Component {
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.state={
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
       this.handleInput = this.handleInput.bind(this)
       this.addClick = this.addClick.bind(this)
    }

    name() {
        store.dispatch({type: UPDATE_NAME, payload: this.state.name})
        this.setState({name:''})
    }

    componentDidMount(){
        
       
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        })})
    }
    handleInput (e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    clear = () => {
        this.setState({
            name:'',
            address:'',
            city:'',
            state:'',
            zip:''
        })
    }
    addClick () {
        let {name, address, city, state, zip} = this.state
        axios.post('/api/house', {name, address, city, state, zip})
        this.clear()
        this.props.history.push("/")
        }

    render(){
        return(
            <div>
              
            <input
                type = 'text'
                placeholder = 'name'
                name = 'name'
                onChange={this.handleInput}
                value={this.state.name}/>
            <input
                type = 'text'
                placeholder = 'address'
                name = 'address'
                onChange={this.handleInput}
                value={this.state.address}/>
            <input
                type = 'text'
                placeholder = 'city'
                name = 'city'
                onChange={this.handleInput}
                value={this.state.city}/>
            <input
                type = 'text'
                placeholder = 'state'
                name = 'state'
                onChange={this.handleInput}
                value={this.state.state}/>
            <input
                type = 'text'
                placeholder = 'zipcode'
                name = 'zip'
                onChange={this.handleInput}
                value={this.state.zip}/>
            
            <Link to='/wizard/step2'>
            <button>Next</button>
            </Link>
            </div>
        )
    }
}

export default One