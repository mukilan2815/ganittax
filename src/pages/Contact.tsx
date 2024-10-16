import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to a server
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-16 py-16">
      {/* Contact Hero */}
      <section className="bg-yellow-400 text-gray-800">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            We're here to answer your questions and provide expert tax advice.
            Reach out to us today!
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-yellow-500 mr-4" />
                <p>(678) 388-9199</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-yellow-500 mr-4" />
                <p>info@ganittax.com</p>
              </div>
              <div className="flex items-start">
                <MapPin className="text-yellow-500 mr-4 mt-1" />
                <p>
                  6065 Roswell Road, #450
                  <br />
                  Atlanta, GA 30328-4011
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.4110659983!2d-84.35791892357796!3d33.90999027322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50f5b9ad49f61%33A0x8e8f5b9ad49f61!2s6065%20Roswell%20Rd%20NE%20%23450%2C%20Atlanta%2C%20GA%2030328%2C%20USA!5e0!3m2!1sen!2sin!4v1633021234567!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
