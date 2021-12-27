import React from 'react'

export default function Account(props) {
    return (
        <div>
            Name :<p>{props.user.email}</p>
        </div>
    )
}
