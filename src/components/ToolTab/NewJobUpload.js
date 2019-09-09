import React, {Component} from "react";
import { Upload } from "antd";

import IntlMessages from "util/IntlMessages";
import IntlHtmlMessages from "util/IntlHtmlMessages";

import {changeDateFormat} from "util/DateTime";
import CustomScrollbars from "util/CustomScrollbars";

const Dragger = Upload.Dragger;

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class NewJobUpload extends Component {
        
    state = {
        files: [],
        upload_props : {
            name: 'file',
            multiple: true,
            action: '/',
            onChange: this.onChange.bind(this),
        },
        previewImages: [],
        extension: [],
    };

    constructor(props, context) {
        super(props, context);
        this.getFileSize = this.getFileSize.bind(this);
    }
    
    onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file);

            var files = this.state.files;
            files.push({
                filename: info.file.name,
                filesize: info.file.size,
                date: new Date().toString(),
            });
            this.setState({files: files});

            var extenstions = this.state.extension;
            var ext = "";
            if (info.file.name.lastIndexOf(".") > -1) {
                ext = info.file.name.substr(info.file.name.lastIndexOf(".") + 1);
            }
            extenstions.push(ext);
            this.setState({extension: extenstions});
            this.handlePreview(info.file);
        }        
        if (status === 'done') {
            //files.push(info.file.name);
            // message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            //files.push(info.file.name);
        }
    }

    async handlePreview (file) {
        var preview;
        if (file.type.search("image/") > -1) {
            preview = await getBase64(file.originFileObj);
        }
        else {
            // this.setState({extension:""})
            preview = "";
        }
        var previews = this.state.previewImages;
        previews.push(preview);
        this.setState({previewImages:previews});
    };

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
                <div className="gx-customer-tab-content gx-ss-newjob-upload-btn">  
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
                <div className="gx-customer-tab-header gx-customer-tab-file-header gx-text-grey gx-ss-newjob-upload-display" >
                    {this.state.files.length === 0 ?
                        <div className="gx-flex-row gx-w-100 gx-justify-content-center gx-align-items-center gx-text-grey">
                            <div className="gx-text-center">
                                <i className="material-icons gx-fs-xlxl gx-font-weight-medium gx-mb-2">block</i>
                                <div className="gx-fs-md gx-font-weight-medium"><IntlMessages id="customer.profile.files.nofiles" /></div>
                            </div>
                        </div>
                        :                        
                        <div className="gx-customer-fileupload-tab-scroll">
                            <div className="gx-w-100 gx-my-0">                        
                            { this.state.files.map((item, index) => (
                                
                                <div className="gx-activity-list gx-ss-newjob-upload-file-item gx-d-flex gx-align-items-center gx-justify-content-between">
                                    <div className="gx-ss-newjob-upload-left gx-d-flex gx-align-items-center gx-justify-content-start">
                                        <div className="gx-ss-newjob-upload-img gx-pr-10">
                                            {/* <img alt="avatar" src={require('assets/images/file/zip.png')} className="gx-border-0 gx-mr-10"/> */}
                                            {
                                                this.state.previewImages[index] === "" ?
                                                <div className="gx-d-flex gx-align-items-center gx-justify-content-center gx-ss-upload-img-size gx-ss-non-img">{this.state.extension[index].toUpperCase()}</div>
                                                :
                                                <img alt="avatar" src={this.state.previewImages[index]} className="gx-border-0 gx-m-0 gx-ss-upload-img-size"/>
                                            }
                                        </div>
                                        <div className="gx-activity-list-description gx-flex-column gx-align-items-flex-start gx-justify-content-center">
                                            <div className="gx-activity-list-name">{item.filename}</div>                           
                                            <div className="gx-activity-list-desc">{this.getFileSize(item.filesize)}</div> 
                                            <div className="gx-activity-list-datetime gx-ss-upload-date">{changeDateFormat(item.date)}</div>      
                                        </div>
                                    </div>
                                    <div className="gx-ss-newjob-upload-right">
                                        <i className="material-icons">play_for_work</i>
                                    </div>
                                </div>
                            )) }
                            </div>  
                        </div>
                    }
                </div>
            </div> 
        );
    }
};

export default NewJobUpload;
