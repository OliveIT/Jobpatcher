
import React from "react";
import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";

const UserCount = ({users}) => {
    return (
        <Auxiliary>
            {users === -1 &&
                <span>
                    <IntlMessages id="membership.unlimited" />
                    <IntlMessages id="membership.table.users" />
                </span>
            }
            {users === 1 &&
                <span>
                    {users}
                    <IntlMessages id="membership.table.user" />
                </span>
            }            
            {users > 1 &&
                <span>
                    {users}
                    <IntlMessages id="membership.table.users" />
                </span>
            }
        </Auxiliary>
    );
}


export default UserCount;