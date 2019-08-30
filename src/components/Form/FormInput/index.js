import React from "react";
import IntlMessages from "util/IntlMessages";

const FormInput = ({title, placeholder, icon, className, type}) => {
    if( !type )
        type = "text";

    return (
        <div className={"gx-form-input " + className }>
            {title &&
                <div className="gx-form-input-title"><IntlMessages id={title} /></div>
            }
            <div className="gx-form-input-input">
                <input placeholder={placeholder} type={type} className={icon ? "icon" : ""}/>
                { icon &&
                    <div className="gx-form-input-icon">
                        <i className="material-icons">{icon}</i>
                    </div>
                }
            </div>
        </div>
    );
}

export default FormInput;