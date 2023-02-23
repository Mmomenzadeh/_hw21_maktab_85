import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import "./ContactList.css";

const ContactList = () => {
  const state = useSelector((state) => state.list_contact.ContactList);
  console.log(state);
  return (
    <div className="container">
      {state.length > 0 ? (
       state.map((item) => (
          <Contact key={item.id} item={item}  />
        ))
      ) : (
        <div>null</div>
      )}
    </div>
  );
};

export default ContactList;
