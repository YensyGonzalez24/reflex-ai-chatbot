import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button } from "../UI";
import useUser from "../../hooks/useUser";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const UserAuth = () => {
  const { userId, authUserByEmail } = useUser();

  const handleSubmit = async (
    values: { email: string },
    { setSubmitting }: FormikHelpers<{ email: string }>
  ) => {
    try {
      setSubmitting(true);
      await authUserByEmail({ email: values.email });
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <div className="border-2 border-black rounded-lg p-4 w-full max-w-80 flex flex-col items-center">
      <h1 className="w-full text-lg text-black mb-4 text-center">
        Input Your Email to Use the Chatbot
      </h1>
      <Formik
        initialValues={{ email: userId || "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="w-full">
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full border-2 rounded-md  p-2 ${
                  isSubmitting
                    ? "border-ct-white text-ct-white"
                    : "text-black border-black"
                }`}
                disabled={isSubmitting}
              />
              {errors.email && touched.email ? (
                <div className="text-red-500">{errors.email}</div>
              ) : null}
            </div>
            <Button variant="primary" type="submit" isDisabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserAuth;
