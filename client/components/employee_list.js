import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employee } from '../../imports/collections/employee';
import EmployeeDetails from './employee_details';

const PER_PAGE = 8;

class EmployeeList extends Component {

    componentWillMount(){
        this.page = 1;
    }

    handleClick(e){
        Meteor.subscribe('employee', PER_PAGE * (this.page + 1));
        this.page += 1;
    }
    
    render(){
        return ( 
            <div className="row">
                {this.props.employees.map(employee => <EmployeeDetails key={employee._id} employee={employee}/>)}
                <div className="col-md-12">
                    <button onClick={this.handleClick.bind(this)} className="btn btn-primary">Load More...</button>
                </div>
            </div>
        );
    }
}

export default createContainer(()=>{
    Meteor.subscribe('employee', PER_PAGE);

    return { employees : Employee.find({}).fetch()};
}, EmployeeList);