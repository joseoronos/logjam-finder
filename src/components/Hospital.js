import React, { useState } from 'react'
import Modal from 'react-modal/lib/components/Modal';

const Hospital = (props) => {
  const faces = {
    "ed Resuscitation Traffic": props.edResuscitationTraffic,
    "ed Emergency Traffic": props.edEmergencyTraffic,
    "ed Urgent Traffic": props.edUrgentTraffic,
    "ed Semi Urgent Traffic": props.edSemiUrgentTraffic,
    "ed NonUrgent Traffic": props.edNonUrgentTraffic,
    "urgent Elective Traffic": props.urgentElectiveTraffic,
    "semi Urgent Elective Traffic": props.semiUrgentElectiveTraffic,
    "non Urgent Elective Surgery Traffic": props.nonUrgentElectiveSurgeryTraffic,
  };

  const redFaces = [];
  const amberFaces = [];
  const greenFaces = [];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      // marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '24px',
      border: '0px',
      WebkitOverflowScrolling: 'touch',
    },
  };

  Modal.setAppElement('#root')

  for (const [key, value] of Object.entries(faces)) {
    if (value == "Red") {
      redFaces.push(<div className='flex'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#E53935" stroke="#212121" stroke-width="2" stroke-linecap="round" />
        <path d="M8 9.05V8.95" stroke="#212121" stroke-width="2" stroke-linecap="round" />
        <path d="M16 9.05V8.95" stroke="#212121" stroke-width="2" stroke-linecap="round" />
        <path d="M16 16C15.5 14.5 14.21 13 12 13C9.79 13 8.5 14.5 8 16" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>&nbsp;{key}
      </div>)
    } else if (value == "Amber") {
      amberFaces.push(<div className='flex'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FDD835" stroke="#212121" stroke-width="2" stroke-linecap="round" />
        <path d="M8 9.05V8.95" stroke="#212121" stroke-width="2" stroke-linecap="round" />
        <path d="M16 9.05V8.95" stroke="#212121" stroke-width="2" stroke-linecap="round" />
        <path d="M8 14H16" stroke="#212121" stroke-width="2" stroke-linecap="round" />
      </svg>&nbsp;{key}</div>)
    } else {
      greenFaces.push(<div className='flex'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#43A047" stroke="#212121" stroke-width="2" stroke-linecap="round" />
        <path d="M8 9.05V8.95" stroke="#212121" stroke-width="2" stroke-linecap="round" />
        <path d="M16 9.05V8.95" stroke="#212121" stroke-width="2" stroke-linecap="round" />
        <path d="M16 14C15.5 15.5 14.21 17 12 17C9.79 17 8.5 15.5 8 14" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>&nbsp;{key}
      </div>)
    }
  }

  return (
    <div className='card p-4 rounded-2xl mb-4 flex-col'>
      <h2 className='text-xl font-bold'>{props.name}</h2>
      <p>{props.postcode}</p>
      <div className='flex flex-col space-y-2 py-3'>
        <p>{redFaces}</p>
        <p>{amberFaces}</p>
        <p>{greenFaces}</p>
      </div>
      <button onClick={() => setModalIsOpen(true)}>What do these mean?</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div><button onClick={() => setModalIsOpen(false)}>Close</button></div>
        <h3>Hospital logjam – what does it mean for you – the patient? </h3>
        <p>When a patient presents at an emergency department, there are five triage categories for treatment (source: https://www.aihw.gov.au/reports/hospitals/emergency-dept-care-2017-18/contents/glossary)</p>
        <ul>
          <li>Resuscitation (triage category 1) is the most urgent category. It is for conditions that are immediately life threatening-such as heart attack, severe burns or injuries resulting from a motor vehicle accident. Patients in this category should be seen within 2 minutes of presenting to the emergency department. </li>
          <li>Emergency (triage category 2) is for conditions that could be life threatening and require prompt attention such as chest pain or possible stroke. Patients in this category should be seen within 10 minutes of presenting to the emergency department.
          </li>
          <li>Urgent (triage category 3) is for serious but stable conditions, such as wounds or abdominal pain. Patients in this category should be seen within 30 minutes of presenting to the emergency department.
          </li>
          <li>Semi-urgent (triage category 4) is for conditions such as broken arms or legs. Patients in this category should be seen within 60 minutes of presenting to the emergency department.
          </li>
          <li>Non-urgent (triage category 5) is the least urgent category. It is for problems or illnesses such as cough or cold. Patients in this category should be seen within 160 minutes of presenting to the emergency department.
          </li>
        </ul>

        <p>Elective surgery is planned surgery that can be booked in advance as a result of a specialist clinical assessment and the patient being placed on a waiting list. (source: https://www.aihw.gov.au/reports-data/myhospitals/sectors/elective-surgery).</p>

        <p>There are three elective surgery clinical urgency categories:</p>

        <ul>
          <li>Category 1 – procedures that are clinically indicated within 30 days; (examples include: limb amputation, biopsies, removal of malignant skin cancers, removal of kidney stones)
          </li>
          <li>Category 2 – clinically indicated within 90 days; (examples include: removal of ovarian cysts, treatment of a brain aneurysm, nerve decompression of the spinal cord, treatment of an unhealed fracture, heart valve replacement)
          </li>
          <li>Category 3 – clinically indicated within 365 days (examples include: Reconstructive surgery, carpal tunnel release, rhinoplasty, shoulder and knee reconstructions, tonsillectomy).
          </li>
        </ul>

        <p>There are also outpatient interactions with the public hospital system, where a patient is referred, most commonly by their GP, to see a specialist for a particular health issue. The outpatient urgency categories are classified as follows (source: https://www.qld.gov.au/health/services/hospital-care/waiting-list</p>
        <ul>
          <li>Urgent (Category 1) – specialist consultation recommended within 30 days of being added to the outpatient wait list
          </li>
          <li>Semi-urgent (Category 2) – specialist consultation recommended within 90 days of being added to the outpatient wait list
          </li>
          <li>Non-urgent (Category 3) – specialist consultation recommended within 365 days of being added to the outpatient wait list.
          </li>
        </ul>
      </Modal>

    </div >
  )
}

export default Hospital

