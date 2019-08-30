import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag, } from "antd";

import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
import ButtonGroup from "antd/lib/button/button-group";
import ProfileDrawer from "./ProfileDrawer";
import ProfileCard from "./ProfileCard";
import CustomerJobPanel from "./CustomerJobPanel";
import CustomScrollbars from "util/CustomScrollbars";

const data = 
{
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
};


class CustomerProfile extends Component {
    
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
        <div className="gx-flex-row gx-w-100 gx-justify-content-between gx-align-items-center" style={{height: '58px'}}>                
            <div className="gx-sub-title">                
                <div className="gx-flex-row  gx-align-items-center">
                    <Link to="/main/customers">
                        <div className="gx-flex-row  gx-align-items-center">
                            <i className="material-icons gx-mr-2">arrow_back</i>
                            <IntlMessages id="back"/>
                        </div>
                    </Link>
                    <div className="gx-ml-3 gx-flex-row  gx-align-items-center">
                        <span className="gx-mr-2">{data.name}</span>
                        <i className="material-icons" style={{cursor: 'pointer', color: '#f7c43d'}} 
                                onClick={this.onChangeCustomerStar.bind(this)}>
                            {this.state.starred ? "star" : "star_border"}
                        </i>
                    </div>
                </div>                    
            </div>
            <div className="gx-flex-row">
                <div className="gx-d-none gx-d-lg-block">
                    <ButtonGroup className="gx-customer-list-buttongroup">
                        <Button><i className="material-icons">assignment_turned_in</i></Button>
                        <Button><i className="material-icons">build</i></Button>
                        <Button><i className="material-icons">more_horiz</i></Button>
                    </ButtonGroup>
                    <Button className="gx-customized-button gx-customized-text-button gx-ml-10"><IntlMessages id="customer.profile.edit"/></Button>
                </div>
                <div className="gx-d-lg-none">
                    <i className="material-icons gx-pointer gx-text-grey">more_vert</i>
                </div>
            </div>
        </div>


        <ProfileCard data={data} />

        <CustomerJobPanel data={data} />

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

  
export default CustomerProfile;
