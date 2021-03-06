import React, { useState } from 'react'
import Modal from 'react-modal/lib/components/Modal';

const Hospital = (props) => {
  const faces = {
    "ed Resuscitation": props.edResuscitationTraffic,
    "ed Emergency": props.edEmergencyTraffic,
    "ed Urgent": props.edUrgentTraffic,
    "ed Semi-Urgent": props.edSemiUrgentTraffic,
    "ed Non-Urgent": props.edNonUrgentTraffic,
    "es Urgent ": props.urgentElectiveTraffic,
    "es Semi-Urgent": props.semiUrgentElectiveTraffic,
    "es Non-Urgent": props.nonUrgentElectiveSurgeryTraffic,
  };

  const electiveSurgery = [];
  const emergencyDepartment = [];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      height: 'auto'
    },
    content: {
      borderRadius: '24px',
      border: '0px',
      WebkitOverflowScrolling: 'touch',
      minHeight: '500px',
      maxWidth: '500px',
      margin: '0 auto'
    },
  };

  Modal.setAppElement('#root')

  function checkFace(value) {
    if (value === "Red") {
      return <svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#E53935" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 9.05V8.95" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 9.05V8.95" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 16C15.5 14.5 14.21 13 12 13C9.79 13 8.5 14.5 8 16" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    } else if (value === "Amber") {
      return <svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FDD835" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 9.05V8.95" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 9.05V8.95" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 14H16" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
      </svg>
    } else {
      return <svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#43A047" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 9.05V8.95" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 9.05V8.95" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 14C15.5 15.5 14.21 17 12 17C9.79 17 8.5 15.5 8 14" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    }
  }


  for (const [key, value] of Object.entries(faces)) {
    if (key.substring(0, 2).includes("es")) {
      electiveSurgery.push(<div className='flex text-sm sm:text-base'>{checkFace(value)} {key.slice(2)}</div>)
    } else {
      emergencyDepartment.push(<div className='flex text-sm sm:text-base'>{checkFace(value)} {key.slice(2)}</div>)
    }
  }

  return (
    <div className='card p-4 rounded-2xl mb-4 flex-col space-y-3'>
      <div className='flex justify-between'>
        <h2 className='text-base sm:text-xl font-bold'>{props.name}</h2>
        <div className='flex space-x-1 items-center'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 1.66666C6.50001 1.66666 3.33334 4.34999 3.33334 8.49999C3.33334 11.15 5.37501 14.2667 9.45001 17.8583C9.76668 18.1333 10.2417 18.1333 10.5583 17.8583C14.625 14.2667 16.6667 11.15 16.6667 8.49999C16.6667 4.34999 13.5 1.66666 10 1.66666ZM10 9.99999C9.08334 9.99999 8.33334 9.24999 8.33334 8.33332C8.33334 7.41666 9.08334 6.66666 10 6.66666C10.9167 6.66666 11.6667 7.41666 11.6667 8.33332C11.6667 9.24999 10.9167 9.99999 10 9.99999Z" fill="#9E9E9E" />
        </svg>
          <p className='text-slate-500 text-sm sm:text-base'>{props.postcode}</p></div>
      </div>

      <div className='flex flex-row'>
        <div className='grow space-y-2'>
          <h3 className='font-semibold text-sm sm:text-base'>Elective Surgery</h3>
          <div className='flex flex-col space-y-2'>{electiveSurgery}</div>
        </div>
        <div className='grow space-y-2'>
          <h3 className='font-semibold text-sm sm:text-base'>Emergency Department</h3>
          <div className='flex flex-col space-y-2'>{emergencyDepartment}</div>
        </div>

      </div>
      <button onClick={() => setModalIsOpen(true)} className='text-gray-400 flex text-sm sm:text-base'><svg class="mr-1" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.22422 11.2083C9.86589 10.05 11.0992 9.36667 11.8159 8.34167C12.5742 7.26667 12.1492 5.25833 9.99922 5.25833C8.59089 5.25833 7.89922 6.325 7.60755 7.20833L5.44922 6.3C6.04089 4.525 7.64922 3 9.99089 3C11.9492 3 13.2909 3.89167 13.9742 5.00833C14.5576 5.96667 14.8992 7.75833 13.9992 9.09167C12.9992 10.5667 12.0409 11.0167 11.5242 11.9667C11.3159 12.35 11.2326 12.6 11.2326 13.8333H8.82422C8.81589 13.1833 8.71589 12.125 9.22422 11.2083ZM11.6659 17.1667C11.6659 18.0833 10.9159 18.8333 9.99922 18.8333C9.08255 18.8333 8.33255 18.0833 8.33255 17.1667C8.33255 16.25 9.08255 15.5 9.99922 15.5C10.9159 15.5 11.6659 16.25 11.6659 17.1667Z" fill="#C9C9C9" />
      </svg>
        What do these mean?</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Hospital logjam ??? what does it mean for you ??? the patient? "
        style={customStyles}
      >
        <div><button onClick={() => setModalIsOpen(false)} className="flex p-2 border rounded-full"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3 5.70998C18.2075 5.61728 18.0976 5.54373 17.9766 5.49355C17.8557 5.44337 17.726 5.41754 17.595 5.41754C17.464 5.41754 17.3344 5.44337 17.2134 5.49355C17.0924 5.54373 16.9825 5.61728 16.89 5.70998L12 10.59L7.11001 5.69998C7.01743 5.6074 6.90752 5.53396 6.78655 5.48385C6.66559 5.43375 6.53594 5.40796 6.40501 5.40796C6.27408 5.40796 6.14443 5.43375 6.02347 5.48385C5.9025 5.53396 5.79259 5.6074 5.70001 5.69998C5.60743 5.79256 5.53399 5.90247 5.48388 6.02344C5.43378 6.1444 5.40799 6.27405 5.40799 6.40498C5.40799 6.53591 5.43378 6.66556 5.48388 6.78652C5.53399 6.90749 5.60743 7.0174 5.70001 7.10998L10.59 12L5.70001 16.89C5.60743 16.9826 5.53399 17.0925 5.48388 17.2134C5.43378 17.3344 5.40799 17.464 5.40799 17.595C5.40799 17.7259 5.43378 17.8556 5.48388 17.9765C5.53399 18.0975 5.60743 18.2074 5.70001 18.3C5.79259 18.3926 5.9025 18.466 6.02347 18.5161C6.14443 18.5662 6.27408 18.592 6.40501 18.592C6.53594 18.592 6.66559 18.5662 6.78655 18.5161C6.90752 18.466 7.01743 18.3926 7.11001 18.3L12 13.41L16.89 18.3C16.9826 18.3926 17.0925 18.466 17.2135 18.5161C17.3344 18.5662 17.4641 18.592 17.595 18.592C17.7259 18.592 17.8556 18.5662 17.9766 18.5161C18.0975 18.466 18.2074 18.3926 18.3 18.3C18.3926 18.2074 18.466 18.0975 18.5161 17.9765C18.5662 17.8556 18.592 17.7259 18.592 17.595C18.592 17.464 18.5662 17.3344 18.5161 17.2134C18.466 17.0925 18.3926 16.9826 18.3 16.89L13.41 12L18.3 7.10998C18.68 6.72998 18.68 6.08998 18.3 5.70998V5.70998Z" fill="black" />
        </svg>
          Close</button></div>
          <br />
        <h3 className='font-semibold  text-center mt-2 text-lg sm:text-2xl'>Hospital logjam ??? what does it mean for you ??? the patient? </h3>
        <br />
        <p className='text-sm sm:text-base'>When a patient presents at an emergency department, there are five triage categories for treatment (<a className='text-blue-700' href="https://www.aihw.gov.au/reports/hospitals/emergency-dept-care-2017-18/contents/glossary">source</a>)</p>
        <ul className='list-disc ml-5 text-sm sm:text-base'>
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
        <br />
        <p className='text-sm sm:text-base'>Elective surgery is planned surgery that can be booked in advance as a result of a specialist clinical assessment and the patient being placed on a waiting list. (<a class="text-blue-700" href="https://www.aihw.gov.au/reports-data/myhospitals/sectors/elective-surgery">source</a>).</p>

        <p className='text-sm sm:text-base'>There are three elective surgery clinical urgency categories:</p>

        <ul className='list-disc ml-5 text-sm sm:text-base'>
          <li>Category 1 ??? procedures that are clinically indicated within 30 days; (examples include: limb amputation, biopsies, removal of malignant skin cancers, removal of kidney stones)
          </li>
          <li>Category 2 ??? clinically indicated within 90 days; (examples include: removal of ovarian cysts, treatment of a brain aneurysm, nerve decompression of the spinal cord, treatment of an unhealed fracture, heart valve replacement)
          </li>
          <li>Category 3 ??? clinically indicated within 365 days (examples include: Reconstructive surgery, carpal tunnel release, rhinoplasty, shoulder and knee reconstructions, tonsillectomy).
          </li>
        </ul>
        <br />
        <p className='text-sm sm:text-base'>There are also outpatient interactions with the public hospital system, where a patient is referred, most commonly by their GP, to see a specialist for a particular health issue. The outpatient urgency categories are classified as follows (<a class="text-blue-700" href="https://www.qld.gov.au/health/services/hospital-care/waiting-list">source</a>)</p>
        <ul className='list-disc ml-5 text-sm sm:text-base'>
          <li>Urgent (Category 1) ??? specialist consultation recommended within 30 days of being added to the outpatient wait list
          </li>
          <li>Semi-urgent (Category 2) ??? specialist consultation recommended within 90 days of being added to the outpatient wait list
          </li>
          <li>Non-urgent (Category 3) ??? specialist consultation recommended within 365 days of being added to the outpatient wait list.
          </li>
        </ul>
      </Modal>

    </div >
  )
}

export default Hospital

