import React, {Component} from "react";
import {Button, Checkbox, Avatar, Tag, Tabs } from "antd";

import { injectIntl } from 'react-intl';
import IntlMessages from "util/IntlMessages";
import Auxiliary from "util/Auxiliary";

const TabPane = Tabs.TabPane;

const data = [
    "Clean the window frame",
    "Prep the glass and remove any decals",
    "Spray the cleaner onto the glass",
    "Wipe glass clean",
    "Repeat on the bottom pane",
    "Dust baseboards, chair rails, and door panels",
]

const CustomOption = ({text, completed, onChange}) => {
    return (
        <div className={ "gx-todo-option gx-pointer " + (completed ? "checked" : "") } onClick={onChange}>        
            <div className="gx-todo-option-check" >
            {completed &&
                <i className="material-icons"> check </i>
            }
            </div>
            
            <div className="gx-todo-option-text">{text}</div>
        </div>
    )
}

class Todos extends Component {
    
    _element = React.createRef();

  constructor(props, context) {
    super(props, context);

    this.state = {
        todos: [],
        currentTab: 1
    }

    data.map( (todo) => {
        this.state.todos.push( { title: todo, completed: false });
    })

    this.onChangeTodo = this.onChangeTodo.bind(this);
  }
  
  onChangeTabs( tab ) {
    this.setState({currentTab: tab});
  }

  onChangeTodo( idx ) {
    var { todos, currentTab } = this.state;
    
    if( currentTab == 1)
        todos[idx].completed = !todos[idx].completed;
    else {
        var filterIdx = 0;
        console.log( idx );
        for(var i = 0; i < todos.length; i++) {
            if( currentTab == 2 && !todos[i].completed ) {
                if( filterIdx == idx ) {
                    todos[i].completed = !todos[i].completed;
                }
                filterIdx++;
            } else if( currentTab == 3 && todos[i].completed ) {
                if( filterIdx == idx ) {
                    todos[i].completed = !todos[i].completed;
                }
                filterIdx++;
            }
        }
    }

    this.setState({ todos: todos });
  }

  onAddTodo(evt) {
    if(evt.key === 'Enter'){
        if( evt.target.value != '' ) {
            var todos = this.state.todos;
            todos.push({ title: evt.target.value, completed: false });
            this.setState({todos: todos});

            this._element.current.value = "";
        }
    }
  }

  render() {
    const {intl: {formatMessage}} = this.props;
    const {todos, currentTab} = this.state;
    return (
        <Auxiliary>
            <Tabs className="gx-tabs-sidebar gx-tabs-sidebar-sub" defaultActiveKey="1" onChange={this.onChangeTabs.bind(this)}>            
                <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><IntlMessages id="job.sidebar.tab.todos.all"/></span>} key="1">                    
                </TabPane>
                <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><IntlMessages id="job.sidebar.tab.todos.open"/></span>} key="2">
                </TabPane>
                <TabPane tab={<span className="gx-flex-row gx-flex-nowrap gx-align-items-center"><IntlMessages id="job.sidebar.tab.todos.completed"/></span>} key="3">                
                </TabPane>
            </Tabs>

            <div className="gx-py-20">
                <div className="gx-job-todos-content-scroll gx-px-20">
                    { todos.filter((todo) => {
                            if ( currentTab == 2 )
                                return !todo.completed;
                            else if ( currentTab == 3 )
                                return todo.completed;
                            return true;
                        }).map( (todo, index) => (
                        <CustomOption text={todo.title} completed={todo.completed} onChange={ () => { this.onChangeTodo(index) }} />
                    ))}
                </div>

                <div className="gx-div-align-center gx-text-grey gx-mt-12 gx-px-20">
                    <i className="material-icons gx-mr-10">edit</i>
                    <input className="gx-job-tab-input gx-border-0 gx-w-100 " 
                            placeholder={formatMessage({id: 'job.sidebar.tab.todos.addnewtask'})} 
                            onKeyPress={this.onAddTodo.bind(this)}
                            ref={this._element} />
                </div>
            </div>
        </Auxiliary>
    );
  }
};

export default injectIntl(Todos);
