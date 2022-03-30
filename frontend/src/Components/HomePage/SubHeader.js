import React from 'react';
import '../../Style/SubHeader.css'
import { Link } from 'react-router-dom';
import useFetch from 'react-fetch-hook';

// const subHeaderUrl = "http://localhost:4000/subheader";
const subHeaderUrl = "https://flipkarturl.herokuapp.com/subheader";

const SubHeader = () => {
    const { isLoading, data } = useFetch(subHeaderUrl);
    return (
        isLoading ? (
            <></>
        ) : (
            <div className="sub-header">
                <div className="boxes">

                    {data.map((subdata, key) => {
                        return (
                            <div key={key}>
                                <div className="box">
                                    <div className="img">
                                        <Link to={subdata.link} className='link'>
                                            <img src={subdata.img} alt={subdata.title} />
                                            <h5>{subdata.title}</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )

    );
};

export default SubHeader;
