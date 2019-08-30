import React from "react";
import {Button, Avatar} from "antd";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
import {changeDateYearFormat} from "util/DateTime";

const data = [
    {
        avatar: 'person',
        name: 'Mark Ronaldo',
        jobId: '#00540',
        status: 'scheduled',
        datetime: '05/04/2019 14:30',
        amount: 400
    },
    {
        avatar: 'business',
        name: 'John Kelvine',
        jobId: '#00550',
        status: 'on the way',
        datetime: '05/04/2019 18:30',
        amount: 550
    },
    {
        avatar: 'person',
        name: 'Tom Hamdon',
        jobId: '#00542',
        status: 'started',
        datetime: '05/04/2019 12:30',
        amount: 600
    },
    {
        avatar: 'person',
        name: 'Tom Hamdon',
        jobId: '#00440',
        status: 'scheduled',
        datetime: '05/04/2019 17:30',
        amount: 400
    },
    {
        avatar: 'person',
        name: 'Robert Brannon',
        jobId: '#00430',
        status: 'scheduled',
        datetime: '05/04/2019 5:30',
        amount: 400
    },
]

const Job = () => {
    return (
        <div className="gx-dashboard-overall-panel gx-flex-row gx-h-100">
            <div className="gx-dashboard-overall-table-scroll">
            <table className="gx-dashboard-overall-table gx-customer-panel-table">
                <thead>
                    <tr>
                        <th><IntlMessages id="dashboard.overall.table.jobid"/></th>
                        <th><IntlMessages id="dashboard.overall.table.customer"/></th>
                        <th><IntlMessages id="dashboard.overall.table.created"/></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        data.map( (item, index) => 
                            <tr key={index}>
                                <td>
                                    <Link to="/">{ item.jobId }</Link>                                            
                                </td>
                                <td>            
                                    <div className="gx-flex-row gx-flex-nowrap gx-align-items-center">                                
                                        <div className="gx-main-avatar gx-size-32 gx-mr-2">
                                            <i className="material-icons gx-w-100 gx-text-center gx-text-white">{item.avatar}</i>                                            
                                        </div>
                                        <div className="gx-dashboard-overall-table-item-name">
                                            { item.name }
                                        </div>
                                    </div>
                                </td>
                                <td>                                            
                                    {changeDateYearFormat(item.datetime)}
                                </td>                              
                                <td className="gx-div-align-center gx-flex-nowrap gx-justify-content-end">
                                    <Button className="gx-customized-button gx-customized-text-button"><IntlMessages id="dashboard.overall.table.view"/></Button>                                       
                                    <Button className="gx-customized-button gx-customized-text-button"><IntlMessages id="dashboard.overall.table.schedule"/></Button>                                       
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="gx-dashboard-overall-panel-footer">
                <div className="gx-div-align-center gx-justify-content-end gx-h-100">
                    <span className="gx-div-align-center gx-link">
                        <div className="gx-fs-13-20" ><IntlMessages id="viewall" /></div>
                        <i className="material-icons gx-fs-lg gx-ml-1">arrow_forward</i>
                    </span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Job;