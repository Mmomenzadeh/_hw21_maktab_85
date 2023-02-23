import "./Modal.css"
import {AiOutlineCloseCircle} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/slice/ContactSlice";
import { toast } from 'react-toastify';
const Modal = ({setShowModal , id}) => {

  const dispatch =useDispatch()

  const handleCloseModal=()=>{
    setShowModal(false)
  }

  const handleDelete=()=>{
    dispatch(deleteContact(id))
    toast.success("successfuly deleted")
  }
  return (
    <div className="modal-container">
      <div className="modal-background"></div>
      <div className="modal">
        <div className="modal-close-btn">
        <AiOutlineCloseCircle style={{color:"#aa4b6b" , fontSize:"25px"}} onClick={handleCloseModal}/>
        </div>
        <h3> کاربر گرامی از حذف خود مطمن هستدید ؟ </h3>
        <div className="modal-btn">
            <button onClick={handleDelete}>بله حذف میکنم</button>
            <button onClick={handleCloseModal}>خیر</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
