
const ApplyLeave = ()=> {
   return(
    <div className="apply-leave-section">
        <p>Apply Leave</p>
          <div>
            <div>
                <form action="" className="leave-type">
                    <label htmlFor="leave-type">Leave Type</label>
                <select id="leave-type-dropdown">
                      <option selected value="" hidden disabled>*select*</option>
                      <option value="Sick Leave">Sick Leave</option>
                      <option value="Personal Leave">Personal Leave</option>
                      <option value="Maternity Leave">Maternity Leave</option>
                      <option value="Annual Leave">Annual Leave</option>
                </select>
                </form>
            </div>
            <div>
                <form action="" className="date-inputs">
                    <label htmlFor="">Start Date</label>
                    <input type="date" />

                    <label htmlFor="" id="end-date">End Date</label>
                    <input type="date" />
                </form>
            </div>
            <div>
                <form action="" className="comments-button-section">
                    <label htmlFor="">Comments</label>
                    <input type="textarea" />
                    <button id="submit-btn">Submit Application</button>
                </form>
            </div>
          </div>
    </div>

   )
}

export default ApplyLeave;
