import React from "react";
import { notification } from 'antd';

export function Notification (type, msg, duration) {
    notification.config({
        placement: 'bottomRight',
    });

    var icon, backColor;
    if( type === "info") {
        icon = 'chat';
        backColor = '#08bdc5';
    } else if( type === "success" ) {
        icon = 'monetization_on';
        backColor = '#39bf58';
    } else if( type === "warning") {
        icon = 'warning';
        backColor = '#f55555';
    }

    if( duration === '' )
        duration = 0;
    
    const key = `open${Date.now()}` + Math.random() * 100;

    notification.open({
        message: msg,
        description:'',
        duration: duration,
        key: key,
        btn:  <i className='material-icons gx-pointer' style={{color: 'rgba(255,255,255,.5)'}} onClick={() => notification.close(key)}>close</i>,
        style: {
            backgroundColor: backColor,
        },
        icon:   <div className='gx-icon-avatar gx-size-36 ' style={{backgroundColor: 'rgba(255,255,255,.3)'}}>
                    <i className='material-icons gx-w-100 gx-text-center gx-text-white'>{icon}</i>
                </div>,
    });
}