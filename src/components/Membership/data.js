export const membership_price = [
    {
      type: 'solo',
      title: 'membership.solo',
      monthly: 29,
      users: 1,
      popular: false,
      color: '#f55555'
    }, {
      type: 'team',
      title: 'membership.team',
      monthly: 59,
      users: 3,
      popular: false,
      color: '#f7c43d'
    }, {
      type: 'business',
      title: 'membership.business',
      monthly: 99,
      users: 7,
      popular: true,
      color: '#39bf58'
    }, {
      type: 'enterprise',
      title: 'membership.enterprise',
      monthly: 149,
      users: -1,
      popular: false,
      color: '#08bdc5'
    }
];
  
export const memberships = [
    {
      category: "membership.content.office",
      contents: [
        {
          title: "membership.content.office.livereport",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.office.unlimited",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.office.customer",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.office.dispatcher",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.office.payroll",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.office.support",
          type: "check",
          data: [ true, true, true, true ]
        }
      ]
    },
    {
      category: "membership.content.beforejob",
      contents: [
        {
          title: "membership.content.beforejob.jobcreate",
          type: "text",
          data: [ "membership.unlimited", "membership.unlimited", "membership.unlimited", "membership.unlimited" ]
        },
        {
          title: "membership.content.beforejob.realdispatch",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.beforejob.dragdrop",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.beforejob.servicelist",
          type: "text",
          data: [ "membership.unlimited", "membership.unlimited", "membership.unlimited", "membership.unlimited" ]
        },
        {
          title: "membership.content.beforejob.estimate",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.beforejob.sharing",
          type: "text",
          data: [ "membership.unlimited", "membership.unlimited", "membership.unlimited", "membership.unlimited" ]
        }
      ]
    },
    {
      category: "membership.content.onjob",
      contents: [
        {
          title: "membership.content.onjob.gps",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.onjob.employeetime",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.onjob.interactive",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.onjob.modification",
          type: "check",
          data: [ true, true, true, true ]
        }
      ]
    },
    {
      category: "membership.content.afterjob",
      contents: [
        {
          title: "membership.content.afterjob.invoice",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.afterjob.tax",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.afterjob.onlinepay",
          type: "check",
          data: [ true, true, true, true ]
        }
      ]
    },
    {
      category: "membership.content.communication",
      contents: [
        {
          title: "membership.content.communication.customer",
          type: "value",
          text: "membership.textpermonth",
          data: [ 250, 500, 750, 1000 ]
        },
        {
          title: "membership.content.communication.job",
          type: "value",
          text: "membership.textpermonth",
          data: [ 250, 500, 750, 1000 ]
        },
        {
          title: "membership.content.communication.emailjob",
          type: "text",
          data: [ "membership.unlimited", "membership.unlimited", "membership.unlimited", "membership.unlimited" ]
        },
        {
          title: "membership.content.communication.estimates",
          type: "text",
          data: [ "membership.unlimited", "membership.unlimited", "membership.unlimited", "membership.unlimited" ]
        },
        {
          title: "membership.content.communication.livechatting",
          type: "check",
          data: [ true, true, true, true ]
        },
        {
          title: "membership.content.communication.mobileapp",
          type: "check",
          data: [ true, true, true, true ]
        }
      ]
    }
];
