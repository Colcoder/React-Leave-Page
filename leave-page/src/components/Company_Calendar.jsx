//full calender imports
import FullCalendar from '@fullcalendar/react' // must go before plugin
import dayGridPlugin from '@fullcalendar/daygrid' //  plugin!

const CompanyCalendar = ()=> {
    return(
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
            { title: '6am Meetup Group', date: '2022-10-29' },
            { title: '8day party', date: '2022-10-10' }
          ]}
      />
    )
}

export default CompanyCalendar;