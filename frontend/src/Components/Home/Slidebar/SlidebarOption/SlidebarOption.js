import React from 'react'
import "./SlidebarOption.css"

const SlidebarOption = (props) => {
    const { text, Icon, active } = props;
    return (
        <div className={`slidebar-option ${active && "slidebar-option_active"}`}>
            <Icon className="slidebar-option__icon" />
            <h2 className='slidebar-option__label'>{text}</h2>
        </div>
    )
}

export default SlidebarOption