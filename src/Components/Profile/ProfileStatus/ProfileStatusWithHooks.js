import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
            setStatus(props.status)
        }, [props.status]
    );

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <b>Status</b>: <div onDoubleClick={activateEditMode}>{props.status || '----'}</div>
            </div>
            }
            {editMode &&
            <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode}
                   value={status}/>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;