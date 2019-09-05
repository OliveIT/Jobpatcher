import React, {Component} from "react";
import {Col, Row, InputNumber, Input, Checkbox, Button} from "antd";
import { injectIntl } from 'react-intl';
import Widget from "components/Widget";
import CheckboxYN from "./CheckboxYN";
import PrivateNoteWidget from "components/AddJob/PrivateNoteWidget";
import UploadFileWidget from "components/AddJob/UploadFileWidget";
import {switchLanguage, updateWindowWidth, setCurrentPage} from "../../../appRedux/actions/Setting";
import {connect} from "react-redux";

class AddJobItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.updateWindowWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      this.props.updateWindowWidth(window.innerWidth)
    });
  }

  render() {
    const {locale, width, navCollapsed, navStyle, pathname, currentPage, setCurrentPage, intl: {formatMessage}} = this.props;
    return (
        <div className="gx-main-content-container gx-mt-30" style={{paddingTop:60}}>
            <Row style={{justifyContent: "center"}}>
                <Col  xxl={20} xl={20} lg={24} md={24} sm={24} xs={24}>
                    <Row>
                        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24} style={{paddingLeft:33}}>
                            <div style={{display: "flex", justifyContent:"space-between",alignItems:"center"}}>
                                <h3 style={{paddingBottom:10}}>
                                    Add job items
                                </h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                            <Row>
                                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{paddingBottom:20}}>
                                    <Widget styleName="gx-card-full gx-dispatcher-job-panel gx-m-0">
                                        <div className="gx-addjob-step2-addjobitem-total-panel">
                                            <div style={{display:"flex",alignItems:"center",height:"60px"}}>
                                                <h4 style={{paddingRight:"10px"}}>SERVICES</h4>
                                                <i className="material-icons" style={{color: "#257cde"}}>add_box</i>
                                            </div>
                                            {width >= 768 ?
                                            <div>
                                                <Widget styleName="gx-card-full gx-dispatcher-job-panel gx-addjob-step2-subpane">
                                                    <div className="gx-panel-title-bar ">
                                                        <Row style={{display:"flex",justifyContent:"space-between"}}>
                                                            <Col xxl={1} xl={1} lg={1} md={1} sm={1}>
                                                            </Col>
                                                            <Col xxl={9} xl={6} lg={6} md={6} sm={6}>
                                                                <h5>Service</h5>
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <h5>QTY</h5>
                                                            </Col>
                                                            <Col xxl={3} xl={3} lg={3} md={3} sm={3}>
                                                                <h5>Rate</h5>
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <h5>Taxable</h5>
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <h5>Amount</h5>
                                                            </Col>
                                                            <Col xxl={1} xl={1} lg={1} md={1} sm={1}>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div className="gx-panel-content">
                                                        <Row style={{display:"flex",justifyContent:"space-between"}}>
                                                            <Col xxl={1} xl={1} lg={1} md={1} sm={1}>
                                                                <i className="material-icons">apps</i>
                                                            </Col>
                                                            <Col xxl={9} xl={6} lg={6} md={6} sm={6}>
                                                            <Input placeholder="Service name" />
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <Input defaultValue={2} style={{direction:"rtl"}} />
                                                            </Col>
                                                            <Col xxl={3} xl={3} lg={3} md={3} sm={3}>
                                                                <InputNumber
                                                                    defaultValue={300}
                                                                    min={1}
                                                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                                                />
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <CheckboxYN/>
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <h5>$600</h5>
                                                            </Col>
                                                            <Col xxl={1} xl={1} lg={1} md={1} sm={1}>
                                                                <i className="material-icons">cancel</i>
                                                            </Col>
                                                        </Row>
                                                        <Row  style={{display:"flex",justifyContent:"space-between"}}>
                                                            <Col xxl={1} xl={1} lg={1} md={1} sm={1}>
                                                            </Col>
                                                            <Col xxl={9} xl={6} lg={6} md={6} sm={6}>
                                                                <Input placeholder="Service description"/>
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                            </Col>
                                                            <Col xxl={3} xl={3} lg={3} md={3} sm={3}>
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <Button type="link" style={{display:"flex",alignItems:"center",paddingRight:"0"}}>
                                                                    <i className="material-icons" style={{paddingRight:"5px"}}>add</i>
                                                                    Service item
                                                                </Button>
                                                            </Col>
                                                            <Col xxl={1} xl={1} lg={1} md={1} sm={1}>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Widget>
                                            </div>
                                            :
                                            <div>
                                                <Widget styleName="gx-card-full gx-dispatcher-job-panel gx-addjob-step2-subpane-mobile">
                                                    <div className="gx-panel-title-bar ">
                                                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                                                            <h5>Service</h5>
                                                            <i className="material-icons">cancel</i>
                                                        </div>
                                                    </div>
                                                    <div className="gx-panel-content">
                                                        <div>
                                                            <div style={{paddingBottom:"10px"}}>
                                                                <Input placeholder="Service name" />
                                                            </div>
                                                            <div style={{paddingBottom:"10px"}}>
                                                                <Input placeholder="Service description"/>
                                                            </div>
                                                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"10px"}}>
                                                                <h5>QTY</h5>
                                                                <Input style={{width: "30%",direction:"rtl"}} defaultValue={2}/>
                                                            </div>
                                                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"10px"}}>
                                                                <h5>Rate</h5>
                                                                <InputNumber
                                                                    defaultValue={300}
                                                                    min={1}
                                                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                                                />
                                                            </div>
                                                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"10px"}}>
                                                                <h5>Taxable</h5>
                                                                <CheckboxYN/>
                                                            </div>
                                                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"10px"}}>
                                                                <h5>Amount</h5>
                                                                <div>$600.00</div>
                                                            </div>
                                                            <div style={{display:"flex",flexFlow:"row-reverse"}}>
                                                                <Button type="link" style={{display:"flex",alignItems:"center",paddingRight:"0"}}>
                                                                    <i className="material-icons" style={{paddingRight:"5px"}}>add</i>
                                                                    Service item
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Widget>
                                            </div>
                                            }
                                            <div style={{display:"flex",alignItems:"center",height:"60px"}}>
                                                <h4 style={{paddingRight:"10px"}}>Materials</h4>
                                                <i className="material-icons" style={{color: "#257cde"}}>add_box</i>
                                            </div>
                                            {width >= 768 ?
                                            <div>
                                                <Widget styleName="gx-card-full gx-dispatcher-job-panel gx-addjob-step2-subpane">
                                                    <div className="gx-panel-title-bar ">
                                                        <Row style={{display:"flex",justifyContent:"space-between"}}>
                                                            <Col xxl={1} xl={1} lg={1} md={1} sm={1}>
                                                            </Col>
                                                            <Col xxl={9} xl={6} lg={6} md={6} sm={6}>
                                                                <h5>Material</h5>
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <h5>QTY</h5>
                                                            </Col>
                                                            <Col xxl={3} xl={3} lg={3} md={3} sm={3}>
                                                                <h5>Rate</h5>
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <h5>Taxable</h5>
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <h5>Amount</h5>
                                                            </Col>
                                                            <Col xxl={1} xl={1} lg={1} md={1} sm={1}>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div className="gx-panel-content">
                                                        <Row style={{display:"flex",justifyContent:"space-between"}}>
                                                            <Col xxl={1} xl={1} lg={1} md={1} sm={1}>
                                                                <i className="material-icons">apps</i>
                                                            </Col>
                                                            <Col xxl={9} xl={6} lg={6} md={6} sm={6}>
                                                            <Input placeholder="Material name" />
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <Input defaultValue={2} style={{direction:"rtl"}} />
                                                            </Col>
                                                            <Col xxl={3} xl={3} lg={3} md={3} sm={3}>
                                                                <InputNumber
                                                                    defaultValue={300}
                                                                    min={1}
                                                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                                                />
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <CheckboxYN/>
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <h5>$600</h5>
                                                            </Col>
                                                            <Col xxl={1} xl={1} lg={1} md={1} sm={1}>
                                                                <i className="material-icons">cancel</i>
                                                            </Col>
                                                        </Row>
                                                        <Row  style={{display:"flex",justifyContent:"space-between"}}>
                                                            <Col xxl={1} xl={1} lg={1} md={1} sm={1}>
                                                            </Col>
                                                            <Col xxl={9} xl={6} lg={6} md={6} sm={6}>
                                                                <Input placeholder="Materal description"/>
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                            </Col>
                                                            <Col xxl={3} xl={3} lg={3} md={3} sm={3}>
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                                                                <Button type="link" style={{display:"flex",alignItems:"center",paddingRight:"0"}}>
                                                                    <i className="material-icons" style={{paddingRight:"5px"}}>add</i>
                                                                    Material item
                                                                </Button>
                                                            </Col>
                                                            <Col xxl={1} xl={1} lg={1} md={1} sm={1}>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Widget>
                                            </div>
                                            :
                                            <div>
                                                <Widget styleName="gx-card-full gx-dispatcher-job-panel gx-addjob-step2-subpane-mobile">
                                                    <div className="gx-panel-title-bar ">
                                                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                                                            <h5>Material</h5>
                                                            <i className="material-icons">cancel</i>
                                                        </div>
                                                    </div>
                                                    <div className="gx-panel-content">
                                                        <div>
                                                            <div style={{paddingBottom:"10px"}}>
                                                                <Input placeholder="Material name" />
                                                            </div>
                                                            <div style={{paddingBottom:"10px"}}>
                                                                <Input placeholder="Material description"/>
                                                            </div>
                                                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"10px"}}>
                                                                <h5>QTY</h5>
                                                                <Input style={{width: "30%",direction:"rtl"}} defaultValue={2}/>
                                                            </div>
                                                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"10px"}}>
                                                                <h5>Rate</h5>
                                                                <InputNumber
                                                                    defaultValue={300}
                                                                    min={1}
                                                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                                                />
                                                            </div>
                                                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"10px"}}>
                                                                <h5>Taxable</h5>
                                                                <CheckboxYN/>
                                                            </div>
                                                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"10px"}}>
                                                                <h5>Amount</h5>
                                                                <div>$600.00</div>
                                                            </div>
                                                            <div style={{display:"flex",flexFlow:"row-reverse"}}>
                                                                <Button type="link" style={{display:"flex",alignItems:"center",paddingRight:"0"}}>
                                                                    <i className="material-icons" style={{paddingRight:"5px"}}>add</i>
                                                                    Material item
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Widget>
                                            </div>
                                            }
                                        </div>
                                    </Widget>
                                </Col>
                            </Row>
                        </Col>

                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                            <Row>
                                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{paddingBottom:20}}>
                                    <PrivateNoteWidget style={{padding:0}}/>
                                </Col>
                                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{paddingBottom:20}}>
                                    <UploadFileWidget style={{padding:0}}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
  }
};
const mapStateToProps = ({settings}) => {
    const {locale, navStyle, navCollapsed, width, pathname, currentPage} = settings;
    return {locale, navStyle, navCollapsed, width, pathname, currentPage}
  };
export default connect(mapStateToProps, {switchLanguage, setCurrentPage, updateWindowWidth})(injectIntl(AddJobItem));
