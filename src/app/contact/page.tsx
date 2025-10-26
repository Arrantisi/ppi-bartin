import Address from "@/components/contact/address";
import ContactUs from "@/components/contact/contact-us";
import FormContact from "@/components/contact/form-contact";
import { ScrollContext } from "@/context/smooth-scorrel-context";
import React from "react";

const ContactPage = () => {
  return (
    <ScrollContext>
      <ContactUs />
      <FormContact />
      <Address />
    </ScrollContext>
  );
};

export default ContactPage;
