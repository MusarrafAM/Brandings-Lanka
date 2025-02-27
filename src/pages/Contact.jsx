import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="mx-60">
        <h1 className="text-3xl font-semibold flex items-center justify-center mb-10">
          Contact Us
        </h1>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <ContactForm />
          </div>
          <div className="text-center">
            {/* Contact */}
            <h3 className="text-2xl font-semibold pb-2  ">Contact</h3>
            <div>
              <p className="font-semibold py-2">
                Phone:{" "}
                <a href="tel:+94729967076" className="font-normal">
                  +94 72 996 7076
                </a>
              </p>
            </div>

            <p className="font-semibold py-2">
              Email:{" "}
              <a href="mailto:brandingslanka@gmail.com" className="font-normal">
                brandingslanka@gmail.com
              </a>
            </p>
            {/* Address */}
            <h3 className="mt-4 font-semibold text-2xl pt-2">Address</h3>
            <p className="py-3 text-lg">
              Shopping Complex, H.K. Edmond Mawatha,
              <br />
              Galle 80000.
            </p>
            {/* Social Links */}
            <div>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Geolocation */}

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-center mb-4">Our Location</h3>
          {/* Embed Google Map */}
          <div className="relative w-full mb-10" style={{ paddingBottom: "56.25%" }}>
            <iframe
              title="Brandings Lanka Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52546.249634708794!2d80.21404333146795!3d6.058285437704746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173006d6aeee5%3A0xdd57ee1df06f35e8!2sBRANDINGS%20LANKA!5e0!3m2!1sen!2slk!4v1740645923475!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", top: 0, left: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
