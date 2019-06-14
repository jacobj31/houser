import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import One from '../Trifecta/One'
import Two from '../Trifecta/Two'
import Three from '../Trifecta/Three'


class Wizard extends Component {

    render(){
        return(
            <div>Wizard
            <div>
            <Route path='/wizard/step1' component={One}></Route>
            <Route path='/wizard/step2' component={Two}></Route>
            <Route path='/wizard/step3' component={Three}></Route>
            </div>
            <Link to='/'>
                <button>Cancel</button>
            </Link>
            </div>
        )
    }
}



export default Wizard