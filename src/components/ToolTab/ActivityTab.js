import React, {Component} from "react";

import ActivityListItem from "components/List/ActivityListItem";
import IntlMessages from "util/IntlMessages";

const data = [
    {
        name: "Robert Brannon",
        job: "#00546",
        type: "Paid invoice",
        datetime: "4/24/2019 15:26",
        avatar: require("assets/images/avatar/avatar01.png")
    },
    {
        name: "Leana Rosebell",
        job: "#00542",
        type: "Completed job",
        datetime: "4/22/2019 14:26",
        avatar: require("assets/images/avatar/avatar03.png")
    },
    {
        name: "Tomas Belford",
        job: "#00542",
        type: "Created job",
        datetime: "4/20/2019 5:53",
        avatar: require("assets/images/avatar/avatar04.png")
    },{
        name: "Robert Brannon",
        job: "#00546",
        type: "Paid invoice",
        datetime: "4/24/2019 15:26",
        avatar: require("assets/images/avatar/avatar01.png")
    },
    {
        name: "Leana Rosebell",
        job: "#00542",
        type: "Completed job",
        datetime: "4/22/2019 14:26",
        avatar: require("assets/images/avatar/avatar03.png")
    },
    {
        name: "Tomas Belford",
        job: "#00542",
        type: "Created job",
        datetime: "4/20/2019 5:53",
        avatar: require("assets/images/avatar/avatar04.png")
    },{
        name: "Robert Brannon",
        job: "#00546",
        type: "Paid invoice",
        datetime: "4/24/2019 15:26",
        avatar: require("assets/images/avatar/avatar01.png")
    },
    {
        name: "Leana Rosebell",
        job: "#00542",
        type: "Completed job",
        datetime: "4/22/2019 14:26",
        avatar: require("assets/images/avatar/avatar03.png")
    },
    {
        name: "Tomas Belford",
        job: "#00542",
        type: "Created job",
        datetime: "4/20/2019 5:53",
        avatar: require("assets/images/avatar/avatar04.png")
    },{
        name: "Robert Brannon",
        job: "#00546",
        type: "Paid invoice",
        datetime: "4/24/2019 15:26",
        avatar: require("assets/images/avatar/avatar01.png")
    },
    {
        name: "Leana Rosebell",
        job: "#00542",
        type: "Completed job",
        datetime: "4/22/2019 14:26",
        avatar: require("assets/images/avatar/avatar03.png")
    },
    {
        name: "Tomas Belford",
        job: "#00542",
        type: "Created job",
        datetime: "4/20/2019 5:53",
        avatar: require("assets/images/avatar/avatar04.png")
    },{
        name: "Robert Brannon",
        job: "#00546",
        type: "Paid invoice",
        datetime: "4/24/2019 15:26",
        avatar: require("assets/images/avatar/avatar01.png")
    },
    {
        name: "Leana Rosebell",
        job: "#00542",
        type: "Completed job",
        datetime: "4/22/2019 14:26",
        avatar: require("assets/images/avatar/avatar03.png")
    },
    {
        name: "Tomas Belford",
        job: "#00542",
        type: "Created job",
        datetime: "4/20/2019 5:53",
        avatar: require("assets/images/avatar/avatar04.png")
    }
];

class ActivityTab extends Component {
    
  state = {
      
  };

  constructor(props, context) {
    super(props, context);

  }

  render() {
    const {className, title} = this.props;
    return (
        <div className={"gx-customer-tab " + className } >
            <div className="gx-customer-tab-header" >
                <h5 className="gx-text-uppercase">
                    <IntlMessages id={title} />
                </h5>
            </div>
            <div className={ className + "-scroll" } >
                <div className="gx-customer-tab-content">
                    {data.map((item, index) => (
                        <ActivityListItem key={index} avatar={item.avatar} name={item.name} datetime={item.datetime} >
                            { item.type } <span className="gx-link">{item.job}</span>
                        </ActivityListItem>
                    ))}
                </div>
            </div >
        </div> 
    );
  }
};

export default ActivityTab;
