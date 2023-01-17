import React, { useState } from 'react';

function Contentbox(props) {

    return (
        <div className="dataBox clearfix">
            <div className='dataBoxInner'>
                <h1><span>{props.Title}</span></h1>
                {props.children}
            </div>
        </div>
    );
}

export default Contentbox;
