import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class Two extends Component {
    constructor(props){
        super(props)

        this.state={
            name: '',
            address: '',
            city:'',
            state:'',
            zip:''
        }
       this.handleInput = this.handleInput.bind(this)
       this.addClick = this.addClick.bind(this)
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

            <Link to='/wizard/step3'>
            <button>Next</button>
            </Link>
      
        </div>)
    }
}
