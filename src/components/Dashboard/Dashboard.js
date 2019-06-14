import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import House from '../House/House'

class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state={
            houses: []
        }
    }

    componentWillMount(){
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        })
    } 
    
    demolishHouse = id => {
        axios.delete(`/api/house/${id}`).then(res => {
            this.setState({
                houses:res.data
            })
        })
    } 
    
    renderhouses = () => { 
        return this.state.houses.map(house => {
            return (<House 
                key = {house.id} 
                house = {house}
                delete = {this.demolishHouse}>
            </House>)
           
        })
    }
  
    
    render(){
        return(
            <div>Dashboard
            
            <Link to='/wizard'>
            <button>Add New Property</button>
            </Link>
            {this.renderhouses()}
            
            </div>
        )
    }
}



export default Dashboard