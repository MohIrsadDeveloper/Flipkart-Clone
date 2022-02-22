import React from 'react';
import '../../Style/SubHeader.css'
import second, { Link } from 'react-router-dom';



import Data from '../../Assets/JSON/SubHeading.json';


const SubHeader = () => {
    return (
        <div className="sub-header">
            <div className="boxes">

                {Data.map((data, key) => {
                    return (
                        <div key={key}>
                            <div className="box">
                                <div className="img">
                                    <Link to={data.title} className='link'>
                                    <img src={data.img} alt={data.title} />
                                    <h5>{data.title}</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>

    );
};

export default SubHeader;
