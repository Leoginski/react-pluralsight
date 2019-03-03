import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({tasks, name})=>(
    <div>
        <div>
            <h3>
                {name}
            </h3>
        </div>
        <div>
            {tasks.map(task=>(<div>{task.name}</div>))}
        </div>
    </div>
)

const mapStateToProps = (state, ownProps)=>{
    let groupID = ownProps.id;
    return {
        name:ownProps.name,
        id:ownProps.id,
        tasks: state.tasks.filter(task=>task.group === groupID)
    }
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);