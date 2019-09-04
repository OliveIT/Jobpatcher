import React, {Component} from "react";
import IntlMessages from "util/IntlMessages";
import {Link} from "react-router-dom";
import {Tabs} from "antd";
import {Steps, Button, message} from "antd";

const { Step } = Steps;

const steps = [
    {
        title: 'Choose customer',
        content: 'First-content',
    },
    {
        title: 'Job items',
        content: 'Second-content',
    },
    {
        title: 'Schedule',
        content: 'Last-content',
    },
];

class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        current: 0,
        };
    }

    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
    };

    render() {
        const { current } = this.state;
        return (
            <div>
                <div className="gx-dispatch-topmenu" style={{display: "flex", alignItems: "center", justifyContent: "space-between", height: 60+"px"}}>
                    <h5>Steps</h5>
                    <div>
                    <Steps current={current} onChange={this.onChange}>
                        {steps.map(item => (
                        <Step key={item.title} title={item.title} >
                        
                        </Step>
                        ))}
                    </Steps>
                    </div>
                    <div>
                        <Button>save</Button>
                        <Button>next</Button>
                    </div>
                </div>
                <div className="steps-content">{steps[current].content}</div>
            </div>
        );
    }
}

export default TopMenu;