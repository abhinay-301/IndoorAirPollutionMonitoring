import React from 'react';
import { CardTitle } from 'reactstrap';

const SingleContent = ({
    id,
    value
}) => {
    return (
        <CardTitle tag="p">{value}</CardTitle>
    )
}

export default SingleContent