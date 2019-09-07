import React, {Component} from "react";
import {Popover, Button, Row, Col, DatePicker, TimePicker, Checkbox, Select, Switch} from 'antd';
import ButtonGroup from "antd/lib/button/button-group";

	const user = {
		avatar: require("assets/images/stor.png"),
		avatarbg: require("assets/images/bg01.png"),
		check: require("assets/images/check.png"),
		user1: require("assets/images/user1.png"),
		bg01: require("assets/images/bg01.png"),
	}
	let Usersss =  user.bg01

	const { Option } = Select;

	const children = [];
	
	for (let i = 10; i < 13; i++) {
		children.push(<Option key={i.toString(36) + i}>Repeat weekly</Option>);
	}

class EmployeeListTimeTablePerson extends Component {
	
	constructor (props) {
		super(props);

		this.closePopover = this.closePopover.bind(this);
		this.openPopover = this.openPopover.bind(this);
		// this.text = this.text.bind(this);
		// this.content = this.content.bind(this);
        this.state = {
            visible : false
		}
		this.widget = React.createRef();
	};

	closePopover () {
		this.setState({visible:false});
		// this.widget.current.click();
		// console.log(this.widget.current);
    };

    openPopover() {
		this.setState({visible:true});
		this.widget.current.style.left=(this.state.x - 35) + "px";
		this.widget.current.style.top=(this.state.y - 190) + "px";
		// console.log(this.widget.current);
		// alert("X: " + this.state.x + " ,, " + this.state.y);
	};
	
	text () {
		return(
			<div className="gx-addjob-step3-schedule-popover-title">
				<h3>Schedule job</h3>
				<i class="material-icons" style= {{cursor:"pointer"}}  onClick={this.closePopover}>close</i>
			</div>
		);
	};
	content() {
		return(
		<div className="gx-addjob-step3-schedule-popover-content">
			<div className="gx-fs-md gx-font-weight-heavy gx-py-20 gx-bold-color">SCHEDULE DATE</div>
			<Row>
				<Col span={12}>
					<div className="gx-pb-10">Start date</div>
					<DatePicker size={"large"} placeholder="DD /MM /YYYY"/>
					<div className="gx-py-10">Start time</div>
					<TimePicker size="large" />
				</Col>
				<Col span={12}>
					<div className="gx-pb-10">End date</div>
					<DatePicker size={"large"}  placeholder="DD /MM /YYYY"/>
					<div className="gx-py-10">End time</div>
					<TimePicker size="large" />
				</Col>
			</Row>
			
			<div className="gx-fs-md gx-font-weight-heavy gx-py-20 gx-bold-color">ARRIVAL WINDOW</div>
			<div className="gx-pb-10 gx-font-weight-">
				Choose an arrival time buffer
			</div>
			<div>
				<Checkbox>None</Checkbox>
				<Checkbox>+15 Min</Checkbox>
				<Checkbox>+30 Min</Checkbox>
				<Checkbox>+1 Hour</Checkbox>
			</div>
			
			<div className="gx-fs-md gx-font-weight-heavy gx-py-20 gx-bold-color">RECURRENCE</div>
			<Row>
				<Col span={12}>
					<Select size={"large"} defaultValue="Repeat weekly" style={{ width: 200 }}>{children}</Select>
				</Col>
				<Col span={12}>
					<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
						<Switch defaultChecked/>
						<div><div>Workforce</div><span>stability</span></div>
						<i className="material-icons" style={{color:"#6e6e6e"}}>info</i>
					</div>
				</Col>
			</Row>
			<div className="gx-fs-md gx-font-weight-heavy gx-py-20 gx-bold-color">EMPLOYEES</div>
			<div style={{display:"flex",alignItems:"center"}} >
				<ButtonGroup className="gx-customer-list-buttongroup">
					<Button><i className="material-icons">remove</i></Button>
					<Button><i className="material-icons">add</i></Button>
				</ButtonGroup>
				<div className="gx-pl-20">1 Employee</div>
			</div>
			<div className=" gx-mt-10 gx-mb-10" style={{display:"flex",justifyContent:"space-between",alignItems:"center",background:"white",border:"1px solid #eee"}}>
				<div className="gx-pl-10 gx-py-10 gx-employee-work-hours-list-single-content-area">
					<div className="gx-employee-work-hours-list-single-img">
						<img
							alt="avatar"
							src={require("assets/images/avatar/avatar04.png")}
						/>
					</div>
					<div className="gx-employee-work-hours-list-single-content">
						<a href="#_"><h2>Robert Adwood</h2></a>
						<p style={{marginTop:"3px"}}>Field tech</p>
					</div>
				</div>
				<i className="material-icons  gx-mr-10 ">close</i>
			</div>
			<div className="gx-pt-10 gx-step3-popover-btn" style={{display:"flex",flexFlow:"row-reverse"}}>
				<Button className="gx-mr-0" type="primary" onClick={this.closePopover}>Schedule</Button>
				<Button className="gx-mr-20" type="primary" onClick={this.closePopover}>Cancel</Button>
			</div>
		</div>
		);
	}; 

	_onMouseMove(e) {
		this.setState({ x: e.clientX, y: e.clientY });
	}

	createDiv() {
		let divv = [];
		

		for(let i = 0 ; i < 11; i++) 
		{
			divv.push(
				<div className="gx-employee-work-hours-table-area-body-single" style={{position: "relative"}}>
					{/* <Popover placement="right" title={text} content={content} trigger="click"> */}
						<div className="gx-schedule-span" onClick={this.openPopover}><div className="gx-schedule-button">Add</div></div>
					{/* </Popover> */}
					<span></span>
					<span></span>
				</div>
			);
		}
		return divv;
	};

    render () {
        
		
        return(
			<div className="gx-employee-work-hours-table-area-body-single-area" onMouseMove={this._onMouseMove.bind(this)}>
				
				<div className="gx-employee-work-hours-table-area-body-single-item">
					{this.createDiv()}
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
					{/* <div className="gx-employee-work-hours-table-area-body-single" style={{position: "relative"}}>
						<Popover placement="right" title={text} content={content} trigger="click">
							<div className="gx-schedule-span"><div className="gx-schedule-button">Add</div></div>
                		</Popover>
						<span></span>
						<span></span>
					</div> */}
				</div>
				
				<div className="gx-employee-work-hours-table-area-body-single-item">
					{this.createDiv()}
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
				</div>
				<div className="gx-employee-work-hours-table-area-body-single-item last-rwo">
					{this.createDiv()}
					<div style={{ left: '596px'}} className="gx-employee-work-hours-table-area-body-single-overlay overlay-time user-intime user-three">
						<div className="gx-employee-work-hours-list-single">
							<div className="gx-employee-work-hours-list-single-content-area">
								<div className="gx-employee-work-hours-list-single-img">
									<img alt="avatar" src={user.user1} className="gx-avatar-img "/>
								</div>
								<div className="gx-employee-work-hours-list-single-content">
									<a href="#_">
									<h2>Karina Kapoor</h2>
									</a>
									<p>floor cleaning</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Popover placement="right" title={this.text()} content={this.content()} visible={this.state.visible}>
					<div ref={this.widget} style={{position:"absolute", left:0, top:0,backgroundColor:"red",width:"0px", height:"0px"}}></div>
				</Popover>
			</div>
        )
    }
}
export default EmployeeListTimeTablePerson
