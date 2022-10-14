
import './App.css';
//component imports
import ReqLeave from './components/Req_leave';
import ApplyLeave from './components/Apply_leave';
import CompanyCalendar from './components/Company_Calendar';


function App() {
  return (
      <>
       <p>Request Leave</p>
       <ReqLeave/>
       <ApplyLeave/>
       <CompanyCalendar/>
    
      </>
      
  )
}

export default App;
