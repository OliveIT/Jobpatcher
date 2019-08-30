import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag, } from "antd";

import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
import ButtonGroup from "antd/lib/button/button-group";
import JobDrawer from "./JobDrawer";
import JobCard from "./JobCard";
import JobPanel from "./JobPanel";

const data = {
    job_id: "#00546",
    job: 'Corporate windows cleaning',
    status: "on the way", 
    datetimes: [
        "05/04/2019 14:30",
        "05/04/2019 15:30",
    ],
    customer: {
        id: 1,
        avatar: 'person',
        name: 'Robert Brannon',
        info1: 'Commercial',
        info2: 'Quebec, PE C2C OS6',
        info3: '2+',
        phone: {
            mobile: '+1(705)-255-8504',
            home: '(613)-966-0626',    
            work: '',
        },
        email: 'robert@website.com',
        lastjob: '#000524',
        lastjob_date: '05/04/2019',
        type: 'Cleaning',
        source: 'Ad campaign',
        paid: 2300,
        address: {
            home: {
                street: '1381 Halsey Avenue',
                city: 'Toronto',
                statecode: 'ON M3B',
                zipcode: '2W6'
            },
            office: ''
        },
        created: '02/07/2018',
    },
    workers: [
        {
            name: "Tomas Belford",
            avatar: require("assets/images/avatar/avatar04.png"),
            job_type: "Field worker",
            status: "on the way"
        },
        {
            name: "Leana Rosebell",
            avatar: require("assets/images/avatar/avatar03.png"),
            job_type: "Field worker",
            status: "progress"
        },
        {
            name: "John Kelvine",
            avatar: require("assets/images/avatar/avatar05.png"),
            job_type: "Field worker",
            status: "on the way"
        },
    ],
    invoices: [
        {
            service: "Corporate windows cleaning",
            detail: "Female gathered great them form Gathered. Every forth their she'd had. Seas moveth they're itself over signs set moved bring.",
            QTY: 4,
            rate: 50.00,
            tax: 4.5,
            amount: 200.00
        },
        {
            service: "Soap or Detergent",
            detail: "Waters years dry. And days form the can't let creepeth appear.",
            QTY: 8,
            rate: 5.00,
            tax: 4.5,
            amount: 40.00
        }
    ]
};


class Job extends Component {
    
  state = {
  };

  constructor(props, context) {
    super(props, context);

  }


  renderMainContent() {
    return (
    <div className="gx-main-content-container gx-customer-profile-module-content">                   
        <div className="gx-flex-row gx-w-100 gx-justify-content-between gx-align-items-center" style={{height: '58px'}}>                
            <div className="gx-sub-title">                
                <div className="gx-flex-row  gx-align-items-center">
                    <Link to="/main/dispatch">
                        <div className="gx-flex-row  gx-align-items-center">
                            <i className="material-icons gx-mr-2">arrow_back</i>
                            <IntlMessages id="back"/>
                        </div>
                    </Link>
                    <div className="gx-ml-3 gx-flex-row  gx-align-items-center">
                        <IntlMessages id="job"/>
                        <span className="gx-ml-1 gx-mr-2">{data.job_id}</span>
                    </div>
                </div>                    
            </div>
            <div className="gx-flex-row">
                <div className="gx-d-none gx-d-lg-block">
                    <ButtonGroup className="gx-customer-list-buttongroup">
                        <Button><i className="material-icons">assignment_ind</i></Button>
                        <Button><i className="material-icons">restore</i></Button>
                        <Button><i className="material-icons">print</i></Button>
                        <Button><i className="material-icons">more_horiz</i></Button>
                    </ButtonGroup>                    
                </div>
                <div className="gx-d-lg-none">
                    <i className="material-icons gx-pointer gx-text-grey">more_vert</i>
                </div>
            </div>
        </div>


        <JobCard data={data} />

        <JobPanel data={data} />

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
                    <JobDrawer />
                </div>
            </div>            
        </div>
    );
  }
};

  
export default Job;
