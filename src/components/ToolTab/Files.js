import React, {Component} from "react";
import { Upload } from "antd";

import IntlMessages from "util/IntlMessages";
import IntlHtmlMessages from "util/IntlHtmlMessages";

import {changeDateFormat} from "util/DateTime";
import CustomScrollbars from "util/CustomScrollbars";

const Dragger = Upload.Dragger;

class Files extends Component {
        
    state = {
        files: [],
        upload_props : {
            name: 'file',
            multiple: true,
            action: '/',
            onChange: this.onChange.bind(this),
        }
    };

    constructor(props, context) {
        super(props, context);
        this.getFileSize = this.getFileSize.bind(this);
    }
    
    onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);

            var files = this.state.files;
            files.push({
                filename: info.file.name,
                filesize: info.file.size,
                date: new Date().toString(),
            });
            this.setState({files: files});
        }
        
        if (status === 'done') {
            //files.push(info.file.name);
            // message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            //files.push(info.file.name);
        }
    }

    getFileSize( size ) {
        if( size < 1024 ) {
            return size + " Bytes";
        } else if( size < 1024 * 1024 ) {
            return (size / 1024).toFixed(2) + " KB";
        } else if( size < 1024 * 1024 * 1024 ) {
            return (size / (1024 * 1024)).toFixed(2) + " MB";
        } else {
            return (size / (1024 * 1024 * 1024)).toFixed(2) + " GB";
        }
    }

    render() {
        return (
            <div className="gx-customer-tab gx-customer-fileupload-tab" >
                <div className="gx-customer-tab-header gx-customer-tab-file-header gx-text-grey" >
                    {this.state.files.length === 0 ?
                        <div className="gx-flex-row gx-w-100 gx-justify-content-center gx-align-items-center gx-text-grey">
                            <div className="gx-text-center">
                                <i className="material-icons gx-fs-xlxl gx-font-weight-medium gx-mb-2">block</i>
                                <div className="gx-fs-md gx-font-weight-medium"><IntlMessages id="customer.profile.files.nofiles" /></div>
                            </div>
                        </div>
                        :                        
                        <div className="gx-customer-fileupload-tab-scroll">
                            <div className="gx-w-100 gx-mt-20 gx-mb-20">                        
                            { this.state.files.map((item, index) => (
                                <div className="gx-activity-list">
                                    <img alt="avatar" src={require('assets/images/file/zip.png')} className="gx-border-0 gx-mr-10"/>
                                    <div className="gx-activity-list-description">
                                        <div className="gx-flex-row"> 
                                            <div className="gx-activity-list-name">{item.filename}</div>                           
                                            <div className="gx-activity-list-datetime">
                                                {changeDateFormat(item.date)}
                                            </div>
                                        </div>                
                                        <div className="gx-activity-list-desc">{this.getFileSize(item.filesize)}</div> 
                                    </div>
                                </div>
                            )) }
                            </div>  
                        </div>
                    }
                </div>
                <div className="gx-customer-tab-content">  
                    <div className="gx-customer-tab-file-upload">
                        <Dragger {...this.state.upload_props}>
                            <div className="gx-flex-row gx-justify-content-center gx-align-items-center" style={{color: '#a5abb5'}}>
                                <i className="material-icons gx-fs-xlxl gx-mr-3">cloud_upload</i>
                                <div className="gx-fs-13-20 gx-font-weight-medium">
                                    <IntlHtmlMessages id="customer.profile.files.dragdrop" />
                                </div>
                            </div>
                        </Dragger>
                    </div>
                </div>
            </div> 
        );
    }
};

export default Files;
