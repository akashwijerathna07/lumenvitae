import { Helmet } from "react-helmet-async";

import ContactForm from "../../components/ContactComponents/ContactForm/ContactForm.jsx";

const Contact = () => {
  return (
    <div>

      <Helmet>
        <title>Contact Us - Lumen Vitae Exporters</title>

        <meta
          name="description"
          content="Contact Lumen Vitae to discuss Sri Lankan spice sourcing, product inquiries, export requirements and potential business partnerships."
        />
      </Helmet>

      <ContactForm />

    </div>
  )
}

export default Contact