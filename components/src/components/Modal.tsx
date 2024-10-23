import {createPortal} from 'react-dom';

interface ModalProps {
    [x: string]: any
}

function Modal({...rest}: ModalProps) {
    return createPortal(<div>
            <div className='absolute inset-0 bg-gray-300 opacity-80'></div>
            <div className='absolute inset-40 p-10 bg-white'>
                A modal
            </div>
        </div>,
        document.querySelector('.modal-container') as HTMLElement)
}

export default Modal