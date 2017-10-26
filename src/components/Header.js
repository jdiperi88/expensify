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
                <NavLink exact to='/create' className='isActive'>Create Expense</NavLink>
                <NavLink to='/Edit' className='isActive'>Edit Expense</NavLink>
                <NavLink to='/Help' className='isActive'>Help Expense</NavLink>
                <NavLink to='/Home' className='isActive'>Home</NavLink>
            </div>
        )
    }
} 

export default Header;