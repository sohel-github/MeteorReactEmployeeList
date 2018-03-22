import React from 'react';

const EmployeeDetails = ({ employee })=> {

    const { name, email, phone } = employee;

    return (
        <div>
            <div className="col-md-3">
                <div className="thumbnail">
                    <img className="img-circle" src={employee.avatar} alt="" />
                    <div className="caption">
                        <b>{name}</b>
                        <p>Email : {email}</p>
                        <p>Phone : {phone}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeDetails;