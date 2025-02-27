import { useState } from "react";
import Input from "./Input";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Add state to track submission

  const handleChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (e.g., sending data to a server)

    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitted(false); // Reset the submitted state after the message disappears
    }, 3000); // Message will disappear after 3 seconds
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Your name"
          value={formData.name}
          handleChange={handleChange}
        />
        <Input
          name="email"
          label="Your email"
          value={formData.email}
          handleChange={handleChange}
        />
        <Input
          name="message"
          label="Your message"
          value={formData.message}
          handleChange={handleChange}
        />
        <button type="submit" className="py-2 px-4 bg-black text-white">
          Submit
        </button>
      </form>

      {/* Conditionally render success message */}
      {isSubmitted && (
        <p className="mt-2 text-sm text-green-800">
          Thank you for your message. It has been sent.
        </p>
      )}
    </div>
  );
};

export default ContactForm;
