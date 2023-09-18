import React from "react";
import Heading from "./Heading";
import TestimonialCard from "./TestimonialCard";

const testimonialData = [
  {
    companyName: "Company A",
    desc: "A leading technology company",
    img: "/user-1.png",
    name: "John Doe",
    designation: "Software Engineer",
  },
  {
    companyName: "Company B",
    desc: "An innovative design agency",
    img: "/user-2.png",
    name: "Jane Smith",
    designation: "Graphic Designer",
  },
  {
    companyName: "Company C",
    desc: "A global finance corporation",
    img: "/user-3.png",
    name: "David Johnson",
    designation: "Financial Analyst",
  },
];

const Testimonials = () => {
  return (
    <div className="container pt-32" data-aos="zoom-in-up">
      <Heading title="Testimonials"  />
      {/*  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonialData.map((item, index) => (
        <TestimonialCard
          key={index}
          companyName={item.companyName}
          desc={item.desc}
          img={item.img}
          name={item.name}
          designation={item.designation}
        />
      ))}
    </div>
    </div>
  );
};

export default Testimonials;
