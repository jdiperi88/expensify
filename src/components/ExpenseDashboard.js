import React,{Component} from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
class ExpenseDashboard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <ExpenseListFilters />
                <ExpenseList />
            </div>
        );
    };
};

export default ExpenseDashboard;