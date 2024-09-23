"use client";

import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button } from "../UI";
import useChat from "~/hooks/useChat";

// Validation schema for Formik
const validationSchema = Yup.object().shape({
  message: Yup.string().required("Message is required"),
});

const ChatInput = () => {
  const { sendMessage } = useChat();

  const handleSubmit = async (
    { message }: { message: string },
    { resetForm, setSubmitting }: FormikHelpers<{ message: string }>
  ) => {
    try {
      await sendMessage(message);
      resetForm();
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="w-full mt-4">
          <div>
            <Field
              name="message"
              disabled={isSubmitting}
              type="text"
              placeholder="Type your message here"
              className={`w-full border-2 rounded-md  p-2 ${
                isSubmitting
                  ? "border-ct-white text-ct-white"
                  : "text-black border-black"
              }`}
            />
            {errors.message && touched.message ? (
              <div className="text-red-500">{errors.message}</div>
            ) : null}
          </div>
          <Button variant="primary" type="submit" isDisabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ChatInput;
