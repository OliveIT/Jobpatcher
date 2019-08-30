import React, {Component} from "react"
const user = {
	avatar: require("assets/images/stor.png"),
	avatarbg: require("assets/images/bg01.png"),
	check: require("assets/images/check.png"),
	user1: require("assets/images/user1.png"),
	bg01: require("assets/images/bg01.png"),
  }
  let Usersss =  user.bg01
class EmployeeListTimeTablePerson extends Component {
    
    render () {
          
        return(
			<div className="gx-employee-work-hours-table-area-body-single-area">
				
				<div className="gx-employee-work-hours-table-area-body-single-item">
					<div style={{ left: '596px'}} className="gx-employee-work-hours-table-area-body-single-overlay overlay-time user-intime user-one">
						<div className="gx-employee-work-hours-list-single">
						   <div className="gx-employee-work-hours-list-single-content-area">
								<div className="gx-employee-work-hours-list-single-img">
									<img alt="avatar" src={user.user1} className="gx-avatar-img "/>
								</div>
								  <div className="gx-employee-work-hours-list-single-content">
									 <a href="#_">
										<h2>Tom Hamdon</h2>
									 </a>
									 <p>Carpet cleaning</p>
								  </div>
						   </div>
						</div>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
				</div>
				
				<div className="gx-employee-work-hours-table-area-body-single-item">
					
					<div style={{ left: '75px'}} className="gx-employee-work-hours-table-area-body-single-overlay overlay-time">
						<div className="gx-employee-work-hours-list-single">
						   <div className="gx-employee-work-hours-list-single-content-area">
								<div className="gx-employee-work-hours-list-single-img">
									<img alt="avatar" src={user.user1} className="gx-avatar-img "/>
								</div>
								  <div className="gx-employee-work-hours-list-single-content">
									 <a href="#_">
										<h2>Tom Hamdon</h2>
									 </a>
									 <p>Carpet cleaning</p>
								  </div>
						   </div>
						</div>
					</div>
					<div style={{ left: '447px'}} className="gx-employee-work-hours-table-area-body-single-overlay check-in overlay-time ">
						<div className="gx-employee-work-hours-list-single">
						   <div className="gx-employee-work-hours-list-single-content-area">
								<div className="gx-employee-work-hours-list-single-img">
									<img alt="avatar" src={user.check} className="gx-avatar-img "/>
								</div>
						   </div>
						</div>
					</div>
					
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
					<div className="gx-employee-work-hours-table-area-body-single">
						<span></span>
						<span></span>
					</div>
				</div>
				<div className="gx-employee-work-hours-table-area-body-single-item last-rwo">
					<div style={{ backgroundImage: `url(${Usersss})` }} className="gx-employee-work-hours-table-area-body-single-overlay overlay-time unavailable-full-hours">
						
						<div className="gx-employee-work-hours-list-single">
						   <div className="gx-employee-work-hours-list-single-content-area">
								<div className="gx-employee-work-hours-list-single-img">
								<img alt="avatar" src={user.avatar} className="gx-avatar-img gx-size-36 gx-border-0 gx-mr-12"/>
								</div>
								  <div className="gx-employee-work-hours-list-single-content">
									 <a href="#_">
										<h2>Unavailable</h2>
									 </a>
									 <p>Full day</p>
								  </div>
						   </div>
						</div>
					</div>
				</div>
				
				
				
				
				
				
				
			</div>
        )
    }
}
export default EmployeeListTimeTablePerson
