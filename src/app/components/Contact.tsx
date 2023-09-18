import React from "react";
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl">Get in touch</h2>
          <p className="text-gray-600 text-[18px] pt-2">
            Drop me a line, give me a call, or send me a message by submitting
            the form.
          </p>

          <div className="flex gap-3 items-center">
          <AiOutlineMail size={30} /> avramnicolaedan@gmail.com
          </div>
          <div className="flex gap-3 items-center">
          <BsTelephone size={30} /> 0720000000
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
