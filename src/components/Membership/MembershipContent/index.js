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

class MembershipContent extends Component {    

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
    const { onChangeType, scroll } = this.props;
    const { type } = this.state;

    return (        
        <Widget styleName="gx-card-full gx-customer-widget gx-mb-0 gx-no-bottom-radius">                    
            <div className="gx-membership-table">
                <div className="gx-membership-table-header" 
                     style={{top: scroll +'px'}}>
                    <div className="gx-membership-table-header-row">
                        <div className="main-header-cell first-col" >
                            <IntlMessages id="membership.table.selectyourplan"/>                            
                        </div>
                        { membership_price.map( (price, index) => (
                            <div key={index} className={ (type === index ? " selected" : "") }
                            style={(type === index || (type + 1) === index ? type === 3 ? {borderColor: membership_price[type].color} : {borderLeftColor: membership_price[type].color} : {}) }>
                                <div className="top-select-bar" style={{backgroundColor: price.color}}>
                                    <div className="gx-membership-custom-option-wrapper gx-d-none gx-d-xl-block">
                                        <CustomOption selected={ type === index } onClick={ () => { onChangeType(index) }} color="white"/>
                                    </div>
                                    <div className="gx-text-uppercase">
                                        <IntlMessages id={price.title}/>
                                    </div>
                                    { price.popular &&    
                                        <div className="gx-membership-poular-wrapper">
                                            <div className="popular-tag" style={{color: price.color}}>
                                                <IntlMessages id="membership.table.tag.popular"/>
                                            </div>
                                        </div>
                                    }
                                </div>                                
                                <div className="price-element" style={{color: price.color}}>
                                    <div className="gx-d-xl-none gx-mb-2">
                                        <CustomOption selected={ type === index } onClick={ () => { onChangeType(index) }} color={price.color}/>
                                    </div>
                                    <div className="price">${price.monthly}</div>
                                    <div className="month"><IntlMessages id="membership.table.monthly" /></div>
                                    <div className="desc gx-text-grey">
                                        <MemberUserCount users={price.users}/>
                                    </div>
                                </div>
                            </div>
                        ))}                        
                    </div>
                </div>
                <div className="gx-membership-table-body"
                    style={{marginTop: -1 * scroll + 'px'}}>
                    { memberships.map( (membership) => (
                        <Auxiliary>
                        <div className="gx-membership-table-row category">
                            <div> <IntlMessages id={membership.category}/> </div>
                            <div style={(type === 0 || (type + 1) === 0 ? {borderLeftColor: membership_price[type].color} : {}) }></div>
                            <div style={(type === 1 || (type + 1) === 1 ? {borderLeftColor: membership_price[type].color} : {}) }></div>
                            <div style={(type === 2 || (type + 1) === 2 ? {borderLeftColor: membership_price[type].color} : {}) }></div>
                            <div style={(type === 3 || (type + 1) === 3 ? type === 3 ? {borderColor: membership_price[type].color} : {borderLeftColor: membership_price[type].color} : {}) }></div>
                        </div>
                        { membership.contents.map((items, content_idx) => (
                            <div key={content_idx} className="gx-membership-table-row normal">
                                <div><IntlMessages id={items.title}/></div>
                                { items.data.map((data, index) => (
                                    <div key={index} style={(type === index || (type + 1) === index ? type === 3 ? {borderColor: membership_price[type].color} : {borderLeftColor: membership_price[type].color} : {}) }>
                                        { items.type === "check" &&
                                            <MembershipCheck check={data} color={membership_price[index].color}/>
                                        }
                                        { items.type === "text" &&
                                            <IntlMessages id={data}/>
                                        }
                                        { items.type === "value" &&
                                            <IntlMessages id={items.text} values={{value: data}}/>
                                        }
                                    </div>
                                ))}                                
                            </div>
                        ))}                        
                        </Auxiliary>
                    ))}
                </div>
            </div>
        </Widget>
    );
  }
};

export default MembershipContent;
