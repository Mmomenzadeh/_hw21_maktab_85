import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../../redux/slice/ContactSlice";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EmptyInput = (e) => {
  const { name, email, relationship, family ,phoneNumber } = e.target;
  family.value = "";
  name.value = "";
  email.value = "";
  relationship.value = "";
  family.value = "";
  phoneNumber.value =""
};

const Form = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const OnSubmit = (data, e) => {
    e.preventDefault();
    dispatch(createContact(data));
    EmptyInput(e)
    toast.success("با موفقیت ثبت شد ");
  };
  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <h1>وب اپلیکشن مدیریت مخاطبین</h1>
      <input
        type="text"
        name="name"
        placeholder="نام ..."
        {...register("name", {
          required: true,
          minLength: 2,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.name && <p className="error">مقدار معتبر وارد نمایید</p>}
      <input
        type="text"
        name="family"
        placeholder="نام خانوادگی ..."
        {...register("family", {
          required: true,
          minLength: 2,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.family && <p className="error">مقدار معتبر وارد نمایید</p>}
      <input
        type="number"
        name="phoneNumber"
        placeholder="شماره تماس ..."
        {...register("phoneNumber", {
          required: true,
          maxLength: 11,
          minLength: 11,
          pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
        })}
      />
      {errors.phoneNumber && (
        <p className="error">شماره تلفن معتبر وارد نمایید</p>
      )}
      <select
        name="relationship"
        {...register("relationship", { required: true })}
      >
        <option value="نسبت">نسبت</option>
        <option value="اعضایی خانواده">اعضایی خانواده</option>
        <option value="دوست">دوست</option>
        <option value="همکار">همکار</option>
      </select>
      {errors.relationship && (
        <p className="error">یک گزیینه را انتخاب نمایید</p>
      )}
      <input
        type="email"
        placeholder="ایمیل ..."
        name="email"
        {...register("email", {
          required: true,
          minLength: 4,
          pattern:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      {errors.email && <p className="error">ایمیل معتبر وارد نمایید</p>}
      <button>اضافه کردن</button>
    </form>
  );
};

export default Form;
