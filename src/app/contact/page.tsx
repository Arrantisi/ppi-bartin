import Address from "@/components/contact/address";
import ContactUs from "@/components/contact/contact-us";
import FormContact from "@/components/contact/form-contact";
import Footer from "@/components/home/footer";
import { ScrollContext } from "@/context/smooth-scorrel-context";
import React from "react";

const ContactPage = () => {
  return (
    <ScrollContext>
      <div className="h-screen w-full mt-40">
        <ContactUs />
        <FormContact />
        <Address />
        <Footer />
      </div>
    </ScrollContext>
  );
};

export default ContactPage;
