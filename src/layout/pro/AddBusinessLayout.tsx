import Modal from "../home/Modal";
import Close from "../../assets/close.svg";
import Label from "../../components/UI/Label";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { Formik, FormikErrors } from "formik";
import { OtpValues } from "../../models/user";
import Error from "../../components/UI/Error";
import Heading from "../../components/UI/Heading";

function AddBusinessModal({ onCancel }: { onCancel: () => void }) {
  const validate = (values: OtpValues) => {
    const errors: FormikErrors<OtpValues> = {};
    if (!values.email) {
      errors.email = "Please include a valid Otp of Email";
    }
    if (!values.mobile_number) {
      errors.mobile_number = "Please include a valid Otp of mobile number";
    }
    return errors;
  };
  return (
    <Modal className="bg-slate-100 opacity-90 rounded-lg ">
      <button
        className=" absolute top-5 right-5"
        onClick={() => {
          onCancel();
        }}
      >
        <img src={Close} alt="" className="md:h-5 md:w-5 xs:h-4 xs:w-4 " />
      </button>

      <div className="py-7">
        <Heading
          headingclassName="my-3  text-primaryGreen !font-semibold"
          variant="subHeader"
          text="Please check your email and phone number for the OTPs"
        />
        <Formik<OtpValues>
          initialValues={{
            email: "",
            mobile_number: "",
          }}
          enableReinitialize
          onSubmit={async (values) => {
            const formData = new FormData(); //initialize formdata
            console.log("here");
            formData.set("otp", values.mobile_number);
            formData.set("mail_otp", values.email);
          }}
          validate={validate}
        >
          {(props) => (
            <form autoComplete="off" onSubmit={props.handleSubmit}>
              <div className="py-3">
                <Label required label="Enter OTP for Mobile Number" />
                <Input
                  id="mobile_number"
                  value={props.values.mobile_number}
                  onChange={props.handleChange}
                />
                {props?.touched?.mobile_number &&
                props?.errors?.mobile_number ? (
                  <Error error={props?.errors?.mobile_number} />
                ) : null}
              </div>

              <div className="py-3">
                <Label required label="Enter OTP for Email" />
                <Input
                  id="email"
                  value={props.values.email}
                  onChange={props.handleChange}
                />
                {props?.touched?.email && props?.errors?.email ? (
                  <Error error={props?.errors?.email} />
                ) : null}
              </div>
              <div className="flex w-full justify-center gap-5">
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  children="Cancel"
                  onClick={() => onCancel()}
                  centerClassName="flex justify-center items-center"
                  buttonClassName="!px-3 font-poppins py-3 w-full"
                />
                <Button
                  type="submit"
                  variant="filled"
                  color="primary"
                  children="Verify OTP"
                  centerClassName="flex justify-center items-center"
                  buttonClassName="!px-3 font-poppins py-3 w-full"
                />
              </div>
              {/* <Error error={error} className="text-center mt-3" /> */}
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}

export default AddBusinessModal;