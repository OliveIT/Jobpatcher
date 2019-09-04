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

    next() {
        const current = this.state.current + 1;
        if(current === 3) {
            current = 2;
        }
        this.setState({ current });
    }
    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
    };

    render() {
        const { current } = this.state;
        return (
            <div>
                <div className="gx-dispatch-topmenu gx-addjob-topbar">
                    <h3 className="gx-addjob-top-title">Add new job</h3>
                    <div className="gx-addjob-steps">
                        <Steps current={current} onChange={this.onChange}>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                    </div>
                    <div className="gx-addjob-top-btngroup">
                        <Button className="gx-nav-btn gx-nav-customer-btn gx-mb-0 gx-addjob-save-btn">Save without scheduling</Button>
                        <Button className="gx-nav-btn gx-nav-customer-btn gx-mb-0 gx-addjob-next-btn" onClick={() => this.next()}>
                            Next
                        </Button>
                    </div>
                </div>
                <div className="steps-content">{steps[current].content}</div>
            </div>
        );
    }
}

export default TopMenu;