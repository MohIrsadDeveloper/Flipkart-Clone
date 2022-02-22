import React from 'react';
import '../../Style/Filter.css';

const Fliter = () => {
    return (
        <React.Fragment>
            <div className="container filter-c1">
                <div className="row filter-r1">
                    <div className="col">
                        <h4>Filter</h4>
                    </div>
                </div>
                <div className="row filter-r2">
                    <div className="col">
                        <h5>PICK A CATEGORY</h5>
                        <ul className="list-group first">
                            <li className='list-group-item'>Clothing and Accessories</li>
                            <li className='list-group-item'>Clothing and Accessories</li>
                            <li className='list-group-item'>Clothing and Accessories</li>
                            <li className='list-group-item'>Clothing and Accessories</li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Fliter;
