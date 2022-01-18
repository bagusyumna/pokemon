import { React, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Refresh = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/mylist')
    }, [])

    return (
        <div></div>
    );
};

export default Refresh;
