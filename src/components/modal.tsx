import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { createNewUser, IUsers } from '../redux/users/usersSlice';
import { useAppDispatch } from '../redux/hooks';
interface IMyModal {
    show: boolean,
    onHide: () => void,
    setstatus: (v: string) => void | null,
    status: string,
    //update
    dataupdate: null | IUsers,
    setdataupdate: (v: null | IUsers) => void | null
}
const MyModal = (props: IMyModal) => {
    const { status, onHide, dataupdate, setdataupdate } = props
    const dispatch = useAppDispatch()
    const defaultData = {
        email: '',
        name: ''
    }
    const defaultValid = {
        validEmail: true,
        validName: true,
    }
    const [formData, setFormData] = useState<IUsers>(defaultData)
    const [validFormData, setValidFormData] = useState(defaultValid)
    useEffect(() => {
        if (dataupdate) {
            setFormData({
                name: dataupdate.name,
                email: dataupdate.email,
                id: dataupdate.id
            })
        }
    }, [dataupdate])
    const validate = () => {
        setValidFormData(defaultValid)
        let { email, name } = formData
        const validateRules = [
            { condition: !email, msg: 'Email is required', validError: 'validEmail' },
            { condition: !name, msg: 'Name is required', validError: 'validName' },
        ]
        for (const rule of validateRules) {
            if (rule.condition) {
                toast.error(rule.msg)
                let { validError } = rule
                setValidFormData({ ...defaultValid, [validError]: false })
                return false
            }
        }
        return true
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = () => {
        let userData = formData
        if (validate()) {
            if (status === 'CREATE') {
                dispatch(createNewUser({ email: userData.email, name: userData.name }))
            } else {

            }
        }
    }
    const resetFormData = () => {
        setValidFormData(defaultValid)
        setFormData(defaultData)
        setdataupdate(null)
        onHide()
    }
    return (
        <Modal
            {...props}
            centered
        >
            <Modal.Header onClick={() => resetFormData()} closeButton>
                <Modal.Title>
                    {status === 'CREATE' ? 'Add new' : 'Update'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FloatingLabel
                    label="Name"
                    className="mb-3"
                >
                    <Form.Control
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        type="text" placeholder="name" />
                </FloatingLabel>
                <FloatingLabel
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email" placeholder="name@example.com" />
                </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={resetFormData}>Close</Button>
                <Button variant='success' onClick={handleSubmit}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default MyModal