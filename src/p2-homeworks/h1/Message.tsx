import React from 'react'
import mClass from './Message.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={mClass.message}>
            <div className={mClass.message_ava}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={mClass.message_parts}>
                <div>
                    <div className={mClass.user_name}>
                        {props.name}
                    </div>
                    <div className={mClass.message_text}>
                        {props.message}
                    </div>
                </div>
                <div className={mClass.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
