import React, { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const CategoryModel = () => {
    const [isOpeneModal, setOpenModal] = useState(true);
   
    const closeModal = () => {
        setOpenModal(false);
    }
    return (
        <div>
            <Modal
                isOpen={isOpeneModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    )
}

export default CategoryModel;