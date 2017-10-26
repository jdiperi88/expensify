import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                Expensify
                <NavLink to='/' className='isActive'>Home</NavLink>
                <NavLink exact to='/create' className='isActive'>Create Expense</NavLink>
                <NavLink to='/Help' className='isActive'>Help Expense</NavLink>
                
            </div>
        )
    }
} 

export default Header;