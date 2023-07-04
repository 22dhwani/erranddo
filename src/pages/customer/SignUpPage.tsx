import { useFormik } from "formik";
import SignUpTopBar from "../../components/customer/home/SignUpTopBar";
import Heading from "../../components/UI/Heading";
import Error from "../../components/UI/Error";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import SignInTopBar from "../../components/customer/home/SignInTopBar";

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.name) {
        errors.name = "Please include a valid name";
      }
      if (!values.email) {
        errors.email = "Please include a valid email";
      } else if (!values.email.includes("@")) {
        errors.email = "Please include a valid email";
      }
      if (!values.phone_number) {
        errors.phone_number = "Please include a valid phone number";
      }
      if (!values.password) {
        errors.password = "Please include a valid password";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Please include a valid confirm password";
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Both the passwords do not match";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const inputClassName =
    "rounded-lg  bg-white dark:text-darktextColor dark:bg-mediumGray shadow-md xs:w-full outline-none pl-3 ";
  return (
    <div className=" !overflow-hidden  h-screen  dark:xs:mt-0 xs:mt-0">
      <SignUpTopBar />
      <div className="bg-[url('assets/SignUpBackground.png')] dark:lg:bg-[url('assets/SignUpBackGroundDark.png')]  bg-cover bg-center bg-no-repeat h-full w-full xs:px-5 md:px-0 flex items-center xl:mt-[3.651474530831099vh] md:justify-center lg:mt-[4.651474530831099vh] xs:mt-[5.051474530831099vh]">
        <div className="bg-gray-100 dark:bg-dimGray dark:bg-opacity-90 lg:w-[30rem] xs:w-max bg-opacity-90 h-max pb-10 lg:ml-auto xl:mr-16 xs:mr-0 rounded-lg ">
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col items-center px-5 ">
                <div className="my-3 text-center">
                  <Heading
                    variant="bigTitle"
                    text="Sign Up as Pro"
                    headingclassName="!font-extrabold !font-poppins-bold tracking-wide dark:text-darktextColor  mt-7"
                  />
                  <Heading
                    variant="headingTitle"
                    text="Welcome to Erranddo. DashBoard"
                    headingclassName="!font-medium !font-poppins-bold tracking-wide dark:text-darktextColor "
                  />
                </div>
                <div className="mt-2 w-full">
                  <Input
                    className={inputClassName}
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <Error
                      className="text-red-600  "
                      error={formik.errors.name}
                    ></Error>
                  ) : null}
                </div>
                <div className="mt-2 w-full">
                  <Input
                    className={inputClassName}
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik?.errors?.email ? (
                    <Error
                      className="text-red-600  "
                      error={formik?.errors?.email}
                    ></Error>
                  ) : null}
                </div>
                <div className="mt-2 w-full">
                  <Input
                    className={inputClassName}
                    type="string"
                    placeholder="Phone Number"
                    id="phone_number"
                    name="phone_number"
                    onChange={formik.handleChange}
                    value={formik.values.phone_number}
                  />
                  {formik.touched.phone_number &&
                  formik?.errors?.phone_number ? (
                    <Error
                      className="text-red-600  "
                      error={formik?.errors?.phone_number}
                    ></Error>
                  ) : null}
                </div>
                <div className="mt-2 w-full">
                  <Input
                    className={inputClassName}
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik?.errors?.password ? (
                    <Error
                      className="text-red-600  "
                      error={formik?.errors?.password}
                    ></Error>
                  ) : null}
                </div>
                <div className="mt-2 w-full">
                  <Input
                    className={inputClassName}
                    type="password"
                    placeholder="Confirm password"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  {formik.touched.confirmPassword &&
                  formik?.errors?.confirmPassword ? (
                    <Error
                      className="text-red-600  "
                      error={formik?.errors?.confirmPassword}
                    ></Error>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center gap-5 px-6 my-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  id="agree"
                  name="agree"
                  onChange={formik.handleChange}
                  checked={formik.values.agree}
                ></input>
                <div className="flex gap-1">
                  <Heading
                    variant="smallTitle"
                    text="I agree to the"
                    headingclassName="!font-medium !font-poppins-bold tracking-wide dark:text-darktextColor "
                  />
                  <Heading
                    variant="smallTitle"
                    text="Terms & Conditions"
                    headingclassName="!font-bold !font-poppins-bold tracking-wide dark:text-darktextColor "
                  />
                </div>
              </div>
              <div className="px-6 mt-4 w-full">
                <Button
                  disabled={!formik.values.agree}
                  type="submit"
                  variant="filled"
                  color="primary"
                  buttonClassName="w-full py-3 font-poppins disabled:bg-gray-400 disabled:text-white"
                  centerClassName="flex justify-center items-center"
                  children="Sign Up As Pro"
                />
              </div>
              <Heading
                variant="smallTitle"
                text="Already have an account? Sign In"
                headingclassName="!font-medium !font-poppins-bold tracking-wide dark:text-darktextColor px-12 mt-4 w-full text-center"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
