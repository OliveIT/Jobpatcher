import React, {Component} from "react";
import ButtonGroup from "antd/lib/button/button-group";

class SelectableButtonGroup extends Component {
    
    constructor(props, context) {
      super(props, context);
  
    }

    render () {
        var {selected, onChange, className} = this.props;
        var children = this.props.children.map((child) => { 
            var cls = child.key === selected ? " selected" : "";
            return React.cloneElement(child, { 
                className: child.props.className ? child.props.className + cls : cls,
                key: child.key,
                onClick: () => { if( onChange ) onChange(child.key) } })
        });

        if( !className )
            className = "";

        return (
            <ButtonGroup className={className + " gx-selectable-buttongroup"}>
                {children}
            </ButtonGroup>
        )
    }
}  

export default SelectableButtonGroup;