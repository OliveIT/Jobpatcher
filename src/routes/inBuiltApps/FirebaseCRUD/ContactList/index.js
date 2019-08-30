import React from "react";
import _ from "lodash";

import ContactCell from "./ContactCell/index";

const ContactList = ({contactList, addFavourite, onSaveContact, onDeleteContact}) => {
  return (
    <div className="gx-contact-main-content">
      {_.map(contactList, (contact, key) =>
        <ContactCell key={key} id={key} contact={contact} onDeleteContact={onDeleteContact}
                     onSaveContact={onSaveContact}
                     addFavourite={addFavourite} />
      )}

    </div>
  )
};

export default ContactList;
