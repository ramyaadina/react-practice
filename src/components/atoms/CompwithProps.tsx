import React from 'react';
import logo from './logo.svg';

const CompwithProps=(props: { message: string })=>{
  return (
    <div>
       {props.message}
    </div>
  );
}

export default CompwithProps;
