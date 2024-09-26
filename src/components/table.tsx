import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchUsers, IUsers } from '../redux/users/usersSlice';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import MyModal from './modal';
function TableComponent() {
    const [modalShow, setModalShow] = useState(false);
    const [status, setStatus] = useState('')
    const [dataUpdate, setDataUpdate] = useState<null | IUsers>(null)
    const users = useAppSelector(state => state.users.listUsers)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
        toast('🦄 Wow so easy!');
    }, [])
    const deleteUser = (id: number) => {
        console.log(id)
    }
    const showModal = () => {
        setStatus("CREATE")
        setModalShow(true);
    }
    const showModalUpdate = (id: number, name: string, email: string) => {
        setDataUpdate({ id, name, email })
        setStatus("UPDATE")
        setModalShow(true);
    }
    return (<>
        <MyModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            setStatus={setStatus}
            status={status}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
        />
        <div className='d-flex justify-content-between align-items-center'>
            <h3>List users</h3>
            <Button onClick={showModal} variant="primary">Add new</Button>
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
                                <Button onClick={() => { showModalUpdate(user.id!, user.name, user.email) }} variant="warning">Edit</Button>{' '}
                                <Button onClick={() => { deleteUser(user?.id!) }} variant="danger">Delete</Button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </Table></>
    );
}

export default TableComponent;