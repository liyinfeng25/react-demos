import React from 'react';
import {  Progress } from 'antd';

function ProgressComp (props: { percent: number }) {
    return (
        <>
          <Progress percent={props.percent}></Progress>
        </>
    )
}

export default ProgressComp;
