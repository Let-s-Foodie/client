import React from 'react';
import Aux from '../hoc/hoc';

const DetailPage = ({name,image}) => {
   

    return (
        <Aux>
            <img alt="" src={image}/>
            <div>{name}</div>
        </Aux>
    );
}
export default DetailPage;