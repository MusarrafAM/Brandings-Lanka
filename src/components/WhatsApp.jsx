import { FaWhatsappSquare } from "react-icons/fa";

const WhatsApp = () => {
  const whatsAppStyle = { color: "green", fontSize: "60px" };
  const phoneNumber = "94720126063";
  const message = encodeURIComponent(
    "Hello! I would like to know more about your services."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex group">
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <h5 className="whatsAppText text-sm text-white bg-green-500 rounded-lg py-1 px-2 mr-2  group-hover:block pr-4 my-auto">
          WhatsApp Us
        </h5>
        <FaWhatsappSquare
          style={whatsAppStyle}
          className="cursor-pointer duration-200"
        />
      </a>
    </div>
  );
};

export default WhatsApp;
