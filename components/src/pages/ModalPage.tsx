import Modal from '../components/Modal';
import Button, {ButtonType} from '../components/Button';
import {useState} from 'react';

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(!showModal)
    }

    return (
        <div>
            <Button type={ButtonType.PRIMARY} onClick={handleClick}>Open modal</Button>
            {showModal && <Modal/>}
        </div>
    )
}

export default ModalPage