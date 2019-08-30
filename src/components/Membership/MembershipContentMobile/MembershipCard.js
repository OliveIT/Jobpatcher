import React, {Component} from "react";
import { Button, Modal } from "antd";

import Widget from "components/Widget";
import IntlMessages from "util/IntlMessages";
import {memberships, membership_price} from "../data";
import Auxiliary from "util/Auxiliary";
import UserCount from "../UserCount";


const CustomOption = ({selected, onClick, color}) => {
    return (
        <div className="gx-membership-custom-option" onClick={onClick} style={{borderColor: color}}>
            {selected &&
                <div className="gx-membership-custom-option-selected" style={{backgroundColor: color}}></div>
            }            
        </div>
    );
}

const MembershipCheck = ({check, color}) => {
    return (
        <div className="gx-membership-item-check" style={{backgroundColor: color}}>
            <i className="material-icons">{check ? "check" : "close"}</i>            
        </div>
    );
}

const MemberUserCount = ({users}) => {
    return (
        <div className="gx-div-align-center gx-justify-content-center">
            <UserCount users={users} />
            <i className="material-icons gx-ml-1">help</i>
        </div>
    );
}

class MembershipCard extends Component {    

  constructor(props, context) {
    super(props, context);    
    
    this.state = {
        type: 0
    };

    this.updateStatWithProps = this.updateStatWithProps.bind(this);
  }

  updateStatWithProps (props) {
        this.setState({type: props.type});
  }

  componentWillMount() {
        this.updateStatWithProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
        this.updateStatWithProps(nextProps);
  }
  
  render() {    
    const { index, current, type, onChangeType, onChangeCard } = this.props;

    return (        
        <Widget styleName="gx-card-full gx-customer-widget gx-membership-card gx-h-100">  
            <div className="gx-membership-card-header">
                <div className="top-select-bar" style={{backgroundColor: membership_price[index].color}}>
                    { index === current &&
                    <div className="gx-membership-custom-option-wrapper">
                        <CustomOption selected={ type === index } onClick={ () => { onChangeType(index) }} color="white"/>
                    </div>
                    }
                    { index < current &&
                        <div className="gx-membership-card-left" onClick={() => {onChangeCard(index)}}>
                            <i className="material-icons">chevron_right</i>
                        </div>
                    }
                    { index > current &&
                        <div className="gx-membership-card-right" onClick={() => {onChangeCard(index)}}>
                            <i className="material-icons">chevron_left</i>
                        </div>
                    }
                    <div className="gx-text-uppercase">
                        <IntlMessages id={membership_price[index].title}/>
                    </div>
                    { ( index === current && membership_price[index].popular ) &&    
                        <div className="gx-membership-poular-wrapper">
                            <div className="popular-tag" style={{color: membership_price[index].color}}>
                                <IntlMessages id="membership.table.tag.popular"/>
                            </div>
                        </div>
                    }
                </div>                                
                <div className="price-element" style={{color: membership_price[index].color}}>
                    <div className="price">${membership_price[index].monthly}</div>
                    <div className="month"><IntlMessages id="membership.table.monthly" /></div>
                    <div className="desc gx-text-grey">
                        <MemberUserCount users={membership_price[index].users}/>
                    </div>
                </div>
            </div>
            <div className="gx-membership-card-body">
                <div className="gx-membership-card-body-scroll">
                { index == current &&
                
                    <Auxiliary>
                    { memberships.map( (membership) => (
                        <Auxiliary>
                        {membership.contents.map((items, content_idx) => (
                        <div key={content_idx} className="gx-membership-card-item">   
                            { items.type === "check" &&
                                <Auxiliary>
                                    <MembershipCheck check={items.data[index]} color={membership_price[index].color}/>                                
                                    <IntlMessages id={items.title} />
                                </Auxiliary>
                            }
                            { items.type === "text" &&
                                <Auxiliary>
                                    <MembershipCheck check={true} color={membership_price[index].color}/>                                
                                    <div>
                                        <span className="gx-mr-2">
                                            <IntlMessages id={items.data[index]}/>
                                        </span>
                                        <IntlMessages id={items.title} />
                                    </div>
                                </Auxiliary>
                            }
                            { items.type === "value" &&
                                <Auxiliary>
                                    <MembershipCheck check={true} color={membership_price[index].color}/>                                
                                    <div>
                                        <span className="gx-mr-2">
                                            <IntlMessages id={items.text} values={{value: items.data[index]}}/>
                                        </span>
                                        <IntlMessages id={items.title} />
                                    </div>                                    
                                </Auxiliary>
                            }                
                        </div>                    
                        ))}        
                        </Auxiliary>                
                    ))}
                    </Auxiliary>   
                }
                </div>
            </div>
        </Widget>
    );
  }
};

export default MembershipCard;
