import React from 'react'

export default function App1(props) 
{
 
  return (
    <div style={{backgroundColor:'pink'}}>
      Hello {props.name}. you are {props.age}
      </div>
  );
} App1.defaultProps = {name: "raja", age:23};