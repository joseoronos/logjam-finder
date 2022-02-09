import React from 'react'

const Hospital = (props) => {
  const faces = {
    edResuscitationTraffic: props.edResuscitationTraffic,
    edEmergencyTraffic: props.edEmergencyTraffic,
    edUrgentTraffic: props.edUrgentTraffic,
    edSemiUrgentTraffic: props.edSemiUrgentTraffic,
    edNonUrgentTraffic: props.edNonUrgentTraffic,
    urgentElectiveTraffic: props.urgentElectiveTraffic,
    semiUrgentElectiveTraffic: props.semiUrgentElectiveTraffic,
    nonUrgentElectiveSurgeryTraffic: props.nonUrgentElectiveSurgeryTraffic,
  };

  const redFaces = [];
  const amberFaces = [];
  const greenFaces = [];

  for (const [key, value] of Object.entries(faces)) {
    if (value=="Red") {
      redFaces.push(<div>:( {key}</div>)

    } if (value=="Amber") {
      amberFaces.push(<div>:| {key}</div>)
    } else {
      greenFaces.push(<div>:) {key}</div>)
    }
  } 

  return (
    <div className='card p-4 rounded-lg mb-4'>
      <h2 className='text-xl font-bold'>{props.name}</h2>
      <p>{props.postcode}</p>
      <p>{redFaces}</p>
      <p>{amberFaces}</p>
      <p>{greenFaces}</p>
      <a href="#" className='font-semibold text-gray-500'>What is this?</a>
    </div>
  )
}

export default Hospital

