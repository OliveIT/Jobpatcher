import React, {Component} from "react";
import {Button, Drawer} from "antd";
import CustomScrollbars from "util/CustomScrollbars";

import ContactList from "./ContactList";
import AppModuleHeader from "components/AppModuleHeader/index";
import InfoView from "components/InfoView/index";
import AddContact from "./AddContact";
import IntlMessages from "util/IntlMessages";
import {connect} from "react-redux";
import _ from "lodash";
import {onAddContact, onDeleteContact, onGetAllContact, onUpdateContact} from "../../../appRedux/actions/Contact";

let contactId = 723812738;

const filterOptions = [
  {
    id: 1,
    name: 'All contacts',
    icon: 'all-contacts'
  }, {
    id: 2,
    name: 'Frequently contacted',
    icon: 'frequent'

  }, {

    id: 3,
    name: 'Starred contacts',
    icon: 'star'
  }
];

class FirebaseCRUD extends Component {


  constructor() {
    super();
    this.state = {
      noContentFoundMessage: 'No Contact found in selected folder',
      alertMessage: '',
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      user: {
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        avatar: 'https://via.placeholder.com/150x150'
      },
      searchUser: '',
      filterOption: 'All contacts',
      allContact: [],
      contactList: [],
      selectedContact: null,
      addContactState: false,
    }
  }

  componentWillMount() {
    this.props.onGetAllContact();
  }

  componentWillReceiveProps(nextProps) {
    console.log("contactList", nextProps.contactList)
    if (nextProps.contactList) {
      this.setState({
        allContact: nextProps.contactList,
        contactList: nextProps.contactList,
      })
    }
  }

  ContactSideBar = (user) => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-contacts gx-mr-4"/>
          <span><IntlMessages id="chat.contacts"/></span>
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
                    onClick={this.onAddContact}>
              <i className="icon icon-add gx-mr-2"/>
              <span>Add New Contact</span>
            </Button>
          </div>
          <div className="gx-module-side-nav">
            <ul className="gx-module-nav">
              {filterOptions.map(option => <li key={option.id} className="gx-nav-item">
                  <span
                    className={`gx-link ${option.id === this.state.selectedSectionId ? 'active' : ''}`} onClick={
                    this.onFilterOptionSelect.bind(this, option)
                  }>
                    <i className={`icon icon-${option.icon}`}/>
                    <span>{option.name}</span>
                  </span>
                </li>
              )}

            </ul>
          </div>
        </CustomScrollbars>
      </div>
    </div>

  };

  addFavourite = (id, data) => {
    let contact = data;
    contact.starred = !data.starred;
    this.props.onUpdateContact(id, contact);
  };

  onAddContact = () => {
    this.setState({addContactState: true});
  };
  onContactClose = () => {
    this.setState({addContactState: false});
  };
  onFilterOptionSelect = (option) => {
    switch (option.name) {
      case 'All contacts': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          contactList: this.state.allContact
        });
        break;
      }
      case 'Frequently contacted': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          contactList: _.filter(this.state.allContact, (contact, key) => contact.frequently)
        });
        break;
      }
      case 'Starred contacts': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          contactList: _.filter(this.state.allContact, (contact) => contact.starred)
        });
        break;
      }
      default:
        break;
    }

  };
  onSaveContact = (id, data) => {
    if (id) {
      this.props.onUpdateContact(id, data);
    } else {
      this.props.onAddContact(data);
    }
  };
  onDeleteContact = (data) => {
    this.props.onDeleteContact(data);
  };
  filterContact = (userName) => {
    const {filterOption} = this.state;
    if (userName === '') {
      this.setState({contactList: this.state.allContact});
    } else {
      const filterContact = _.filter(this.state.allContact, (contact) =>
        contact.name.toLowerCase().indexOf(userName.toLowerCase()) > -1);
      if (filterOption === 'All contacts') {
        this.setState({contactList: filterContact});
      } else if (filterOption === 'Frequently contacted') {
        this.setState({contactList: filterContact.filter((contact) => contact.frequently)});

      } else if (filterOption === 'Starred contacts') {
        this.setState({contactList: filterContact.filter((contact) => contact.starred)});
      }
    }
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false,
    });
  };

  updateContactUser(evt) {
    this.setState({
      searchUser: evt.target.value,
    });
    this.filterContact(evt.target.value)
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  render() {
    const {user, contactList, addContactState, drawerState, noContentFoundMessage} = this.state;
    return (
      <div className="gx-main-content">
        <div className="gx-app-module">

          <div className="gx-d-block gx-d-lg-none">
            <Drawer
              placement="left"
              closable={false}
              visible={drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.ContactSideBar()}
            </Drawer>
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.ContactSideBar(user)}
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                  <i className="icon icon-menu gx-icon-btn" aria-label="Menu"
                     onClick={this.onToggleDrawer.bind(this)}/>
              </span>

              <AppModuleHeader placeholder="Search contact" notification={false} apps={false}
                               user={this.state.user}
                               onChange={this.updateContactUser.bind(this)}
                               value={this.state.searchUser}/>
            </div>
            <div className="gx-module-box-content">

              <div className="gx-module-box-topbar">

              </div>
              <CustomScrollbars className="gx-module-content-scroll">
                {contactList.length === 0 ?
                  <div className="gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : <ContactList contactList={contactList}
                                 addFavourite={this.addFavourite}
                                 onDeleteContact={this.onDeleteContact.bind(this)}
                                 onSaveContact={this.onSaveContact.bind(this)}/>
                }


              </CustomScrollbars>

            </div>
          </div>
        </div>

        <AddContact open={addContactState} contact={{
          'id': contactId++,
          'name': '',
          'thumb': '',
          'email': '',
          'phone': '',
          'designation': '',
          'starred': false,
          'frequently': false,
        }} onSaveContact={this.onSaveContact}
                    onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/>
        <InfoView/>
      </div>
    )
  }
}

const mapStateToProps = ({contact}) => {
  const {contactList, selectedContact} = contact;
  return {contactList, selectedContact}
};
export default connect(mapStateToProps, {
  onGetAllContact,
  onAddContact,
  onUpdateContact,
  onDeleteContact
})(FirebaseCRUD);
