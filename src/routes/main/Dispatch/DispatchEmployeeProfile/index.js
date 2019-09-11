import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag, } from "antd";

import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
import ButtonGroup from "antd/lib/button/button-group";
import ProfileDrawer from "./ProfileDrawer";
import ProfileCard from "./ProfileCard";
import EmployeeJobPanel from "./EmployeeJobPanel";
import CustomScrollbars from "util/CustomScrollbars";

const data = 
{
    id: 1,
    avatar: 'person',
    // avatar: "1.png",
    name: 'Peter Windberg',
    info1: 'Field tech',
    info2: 'Quebec, PE C2C OS6',
    info3: '2+',
    joined: '07 February, 2018',
    statu: 'Scheduled for',
    statusJob: '  #00546',
    lastJob: '#00543  ',
    lastJobTime: '(23 July, 2019)',
    lastLogin: 'Online',
    appVersion: 'v 2.0.2',
    phone: {
        mobile: '(306)-469-4576',
        home: '(613)-966-0626',    
        work: '',
    },
    email: 'peter@website.com',
    lastjob: '#000524',
    lastjob_date: '05/04/2019',
    type: 'Cleaning',
    source: 'Ad campaign',
    paid: 2300,
    address: {
        home: {
            street: '3810 St.John Street',
            city: 'Toronto',
            statecode: 'ON M3B',
            zipcode: '2W6'
        },
        office: ''
    },
    created: '02/07/2018',
};


class DispatchEmployeeProfile extends Component {
    
  state = {
    starred: true
  };

  constructor(props, context) {
    super(props, context);

  }

  onChangeCustomerStar (evt) {
    this.setState({starred: !this.state.starred});
  }

  renderMainContent() {
    return (
    <div className="gx-main-content-container gx-customer-profile-module-content">                   
        <div className="gx-flex-row gx-w-100 gx-justify-content-between gx-align-items-center gx-ss-employee-profile-top">                
            <div className="gx-sub-title">                
                <div className="gx-flex-row  gx-align-items-center">
                    <Link to="/main/dispatch/employees">
                        <div className="gx-flex-row  gx-align-items-center">
                            <i className="material-icons gx-mr-2">arrow_back</i>
                            <IntlMessages id="back"/>
                        </div>
                    </Link>
                    <div className="gx-ml-3 gx-flex-row gx-align-items-center gx-ss-profile-employee-name">
                        <span className="gx-mr-2">{data.name}</span>
                    </div>
                </div>                    
            </div>
            <div className="gx-flex-row">
                <div className="gx-d-none gx-d-lg-block gx-ss-btngroup">
                    <ButtonGroup className="gx-customer-list-buttongroup">
                        <Button><i className="material-icons">chat</i></Button>
                        <Button><i className="material-icons">cancel</i></Button>
                    </ButtonGroup>
                    <Button className="gx-customized-button gx-customized-text-button gx-ml-10 gx-ss-edit-btn">
                        <IntlMessages id="customer.profile.edit"/>
                    </Button>
                </div>
                <div className="gx-d-lg-none">
                    <i className="material-icons gx-pointer gx-text-grey">more_vert</i>
                </div>
            </div>
        </div>


        <ProfileCard data={data} />

        <EmployeeJobPanel data={data} />

    </div>
    );
  }

  render() {
    return (
        <div className="gx-main-content">
            <div className="gx-app-module gx-customer-profile-module"> 
                <div className="gx-w-100">
                    <div className="gx-customer-profile-module-scroll">
                        {this.renderMainContent()}
                    </div>
                </div>

                <div className="gx-customer-sidenav">
                    <ProfileDrawer />
                </div>
            </div>            
        </div>
    );
  }
};

  
export default DispatchEmployeeProfile;
