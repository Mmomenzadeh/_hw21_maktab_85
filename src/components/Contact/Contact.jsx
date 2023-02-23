import "./Contact.css";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Contact = ({item}) => {
  const [showModal, setShowModal] = useState(false);
  
  const handleDelete = () => {
    setShowModal(true);
  };

  return (
    <>
       <div className="card">
          <div className="card-header">
            <p>{item.name}</p>
            <div className="icons">
              <FaTrashAlt  className="icon" onClick={()=>handleDelete()} />
              <FiEdit className="icon" />
            </div>
          </div>
          <div className="card-body">
            <p>{item.relationship}</p>
            <p>{item.email}</p>
            <p>{item.phoneNumber}</p>
          </div>
        </div>

        {showModal ? <Modal setShowModal={setShowModal} id={item.id} /> : null}
    </>
  );
};

export default Contact;
