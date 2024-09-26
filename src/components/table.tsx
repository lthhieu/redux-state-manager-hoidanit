import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchUsers } from '../redux/users/usersSlice';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
function TableComponent() {
    const users = useAppSelector(state => state.users.listUsers)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
        toast('🦄 Wow so easy!');
    }, [])
    const deleteUser = (id: number) => {
        console.log(id)
    }
    return (<>
        <div className='d-flex justify-content-between align-items-center'>
            <h3>List users</h3>
            <Button variant="primary">Add new</Button>
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users?.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button variant="warning">Edit</Button>{' '}
                                <Button onClick={() => { deleteUser(user.id) }} variant="danger">Delete</Button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </Table></>
    );
}

export default TableComponent;