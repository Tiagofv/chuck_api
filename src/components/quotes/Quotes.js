import React, {useEffect} from 'react'

export default function Quotes(props) {

  useEffect(()=>{
    console.log(props.quotes )
  }, []);

  const {icon_url, value} = props.quotes;
  return (
    <div className="mt-3">
      <img src={icon_url} style={{width: '5%'}}/>
      <h2>{value}</h2>
    </div>
  )
}
