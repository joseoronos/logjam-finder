import Fuse from 'fuse.js';
import hospitals from './hospitals-v3-cleaned.json'
import React, { useState } from 'react';
import Hospital from './components/Hospital.js';
import Modal from 'react-modal/lib/components/Modal';


Modal.setAppElement('#root');

function App() {

  const [query, updateQuery] = useState('');

  const fuse = new Fuse(hospitals, {
    keys: [
      'Postcode',
      'hospitalName'
    ],
    threshold: 0.4
  })

  const results = fuse.search(query);
  const hospitalResults = query ? results.map(hospital => hospital.item) : hospitals;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }


  return (
    <div className="App max-w-screen-sm p-8 rounded-2xl">
      <div className="top flex justify-between items-center">
        <h1 className='font-bold text-2xl text-left'>Hospital Logjam Finder</h1>
        <p className='text-right'>Is your local hospital in logjam?</p>
      </div>
      <form className="search">
        <input type="text" className='p-3 border-2 rounded-lg w-full mb-4 mt-4' value={query} onChange={onSearch} placeholder="Postcode/ Hospital Name" />
      </form>
      <div className='resultContainer'>
        {hospitalResults.map(hospital => {
          const { Postcode, hospitalName, edResuscitation, edResuscitationTraffic, edEmergency, edEmergencyTraffic, edUrgent, edUrgentTraffic, edSemiUrgent, edSemiUrgentTraffic, edNonUrgent, edNonUrgentTraffic, semiUrgentElectiveSurgeryTraffic, nonUrgentElectiveSurgery, nonUrgentElectiveSurgeryTraffic, urgentElectiveSurgery, urgentElectiveTraffic, semiUrgentElectiveSurgery, semiUrgentElectiveTraffic } = hospital;
          return (
            <Hospital
              name={hospitalName}
              postcode={Postcode}
              edResuscitationTraffic={edResuscitationTraffic}
              edEmergencyTraffic={edEmergencyTraffic}
              edUrgentTraffic={edUrgentTraffic}
              edSemiUrgentTraffic={edSemiUrgentTraffic}
              edNonUrgentTraffic={edNonUrgentTraffic}
              urgentElectiveTraffic={urgentElectiveTraffic}
              semiUrgentElectiveTraffic={semiUrgentElectiveTraffic}
              nonUrgentElectiveSurgeryTraffic={nonUrgentElectiveSurgeryTraffic}
            />
          )
        }
        )
        }
      </div>

    </div>
  );
}

export default App;
