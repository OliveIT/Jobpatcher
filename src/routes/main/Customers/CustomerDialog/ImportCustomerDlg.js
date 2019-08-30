import React, {Component} from "react";
import {Button, Upload } from "antd";

import IntlMessages from "util/IntlMessages"; 
import IntlHtmlMessages from "util/IntlHtmlMessages"; 

const Dragger = Upload.Dragger;

const steps = [
    "customer.importdlg.content.steps.1st",
    "customer.importdlg.content.steps.2nd",
    "customer.importdlg.content.steps.3rd",
];

class ImportCustomerDlg extends Component {

  constructor(props, context) {
    super(props, context);    
    
    this.state = {
        file: "",
        upload_props : {
            name: 'file',
            multiple: false,
            action: '/',
            onChange: this.onChange.bind(this),
        }
    };
  }
  
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
        console.log(info.file, info.fileList);

        this.setState({file: {
            filename: info.file.name,
            filesize: info.file.size,
            date: new Date().toString(),
        }});
    }
    
    if (status === 'done') {
        //files.push(info.file.name);
        // message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
        //files.push(info.file.name);
    }
  }

  Buttons () {
    const {onCancel, onImport} = this.props;
      return (
        <div className="gx-flex-row gx-flex-nowrap gx-w-100">            
            <Button className="gx-flex-1-same gx-fs-13-20 gx-font-weight-medium gx-mb-0" 
                            style={{width: '128px', color: 'white', backgroundColor: '#a5abb5', border: 'none'}} 
                            onClick={onCancel}><IntlMessages id="cancel"/></Button>
            <Button className="gx-flex-1-same gx-fs-13-20 gx-font-weight-medium gx-mb-0" type="primary"
                    style={{width: '128px'}} 
                    onClick={onImport}><IntlMessages id="import"/></Button>
        </div>
      );
  }

  render() {
    const {onCancel, onImport} = this.props;
    return (
        <div className="gx-edit-customer-dlg" >
            <div className="gx-customer-import-dlg-wrapper">
                <div className="gx-text-center">
                    <img src={require('assets/images/customer/import.png')} />
                    <div className="gx-m-10">
                        <h4>
                            <IntlMessages id="customer.importdlg.content.subtitle" />
                        </h4>
                    </div>
                    <div className="gx-customer-importdlg-desc">
                        <div>
                            <IntlMessages id="customer.importdlg.content.desc" />
                        </div>
                        <div>
                            <IntlMessages id="customer.importdlg.content.steps" />
                        </div>
                    </div>
                </div>
                <div className="gx-flex-row gx-w-100 gx-align-items-center">
                    <div className="gx-flex-1-same gx-mr-20 gx-d-none gx-d-md-block">
                        { steps.map( (step, index) =>
                            <div key={index} className="gx-flex-row gx-flex-nowrap gx-w-100 gx-align-items-center gx-pt-10 gx-pb-10">
                                <div className="gx-customer-importdlg-step">
                                    { index + 1 }
                                </div>
                                <div className="gx-customer-importdlg-stepdesc">
                                    <IntlHtmlMessages id={step} />
                                </div>
                            </div>
                        )}                            
                    </div>
                    <div className="gx-customer-tab-file-upload gx-flex-1-same" style={{height: '172px'}}>
                        <Dragger {...this.state.upload_props}>
                            <div className="gx-flex-column gx-justify-content-center gx-align-items-center" style={{color: '#a5abb5'}}>
                                <i className="material-icons gx-fs-xlxl gx-mr-3">cloud_upload</i>
                                <div className="gx-fs-13-20 gx-font-weight-medium">
                                    <IntlHtmlMessages id="customer.importdlg.content.dragdrop" />
                                </div>
                            </div>
                        </Dragger>
                    </div>
                </div>
                
                <div className="gx-customer-importdlg-btn-container gx-d-none gx-d-md-block">
                    {this.Buttons()}
                </div>
            </div>

            <div className="gx-customized-modal-footer gx-d-md-none" >
                { this.Buttons() }
            </div>
        </div> 
    );
  }
};

export default ImportCustomerDlg;
