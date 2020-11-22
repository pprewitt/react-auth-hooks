import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';





function AvatarOption(props){

    return(
        <DropdownItem>{props.name} </DropdownItem>
    )
}
export default AvatarOption