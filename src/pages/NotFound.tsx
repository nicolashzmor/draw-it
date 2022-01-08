import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const Notfound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/')
    }, [navigate]);

    return (<></>);
};

export default Notfound;
