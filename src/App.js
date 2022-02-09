import Fuse from 'fuse.js';
import hospitals from './hospitals-v3-cleaned.json'
import React, { useState } from 'react';
import Hospital from './components/Hospital.js';

function App() {

  const [query, updateQuery] = useState('');

  const fuse = new Fuse(hospitals, {
    keys: [
      'Postcode',
      'hospitalName'
    ]
  })

  const results = fuse.search(query);
  const hospitalResults = query ? results.map(hospital => hospital.item) : hospitals;

  console.log('results', results);

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }


  return (
    <div className="App max-w-screen-sm">
      <h1 className='font-bold text-2xl text-center'>Logjam finder</h1>
      <form className="search">
            <input type="text" className='p-3 border-2 rounded-lg w-full mb-4 mt-4' value={query} onChange={onSearch} placeholder="Postcode/ Hospital Name" />
      </form>
      {hospitalResults.map(hospital => {
        const {Postcode, hospitalName, edResuscitation, edResuscitationTraffic,  edEmergency, edEmergencyTraffic, edUrgent, edUrgentTraffic, edSemiUrgent, edSemiUrgentTraffic, edNonUrgent, edNonUrgentTraffic, semiUrgentElectiveSurgeryTraffic, nonUrgentElectiveSurgery, nonUrgentElectiveSurgeryTraffic, urgentElectiveSurgery, urgentElectiveTraffic, semiUrgentElectiveSurgery, semiUrgentElectiveTraffic} = hospital;
        return (
          <Hospital 
          name={ hospitalName } 
          postcode= { Postcode }
          edResuscitationTraffic = { edResuscitationTraffic }
          edEmergencyTraffic = { edEmergencyTraffic }
          edUrgentTraffic = { edUrgentTraffic }
          edSemiUrgentTraffic = { edSemiUrgentTraffic }
          edNonUrgentTraffic = { edNonUrgentTraffic }
          urgentElectiveTraffic = { urgentElectiveTraffic }
          semiUrgentElectiveTraffic = { semiUrgentElectiveTraffic }
          nonUrgentElectiveSurgeryTraffic= { nonUrgentElectiveSurgeryTraffic }
          />
        )
      }
      )
    }
    </div>
  );
}

export default App;
