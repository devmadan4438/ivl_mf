import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../../redux/actions';

export default function TaskList() {
    const dispatch = useDispatch();
    const rxTasks = useSelector(state => state.task)

    // Handle side effects  
    useEffect(() => { dispatch({ type: taskActions.LIST }); }, [])

    const handleRemove = (taskId) => dispatch({ type: taskActions.REMOVE_TASK, payload: { id: taskId } });

    return (
        <React.Fragment>
            {
                rxTasks?.loading ? <p>Loading ...</p> :

                    <React.Fragment>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th style={{ width: '30px' }}>#</th>
                                    <th>Title</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Render Tasks */}
                                {
                                    rxTasks?.list?.map(task => <tr key={task.id}>
                                        <td>{task.id}</td>
                                        <td>{task.title}</td>
                                        <td><i className="bi bi-archive-fill pointer" onClick={() => handleRemove(task.id)}></i></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </React.Fragment>
            }
        </React.Fragment>
    )
}
