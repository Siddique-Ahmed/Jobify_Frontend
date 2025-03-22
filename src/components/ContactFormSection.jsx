import React from "react";
import Button from "../global/Button";
import contacdtImg from "../assets/images/contact_form.webp";

const ContactFormSection = () => {
  return (
    <div className="w-full !px-4 !py-12">
      <div className="!container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 ">
        <section className="!py-8 lg:!py-16 md:!px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[var(--dark-bg)]">
              Contact Us
            </h2>
            <p className="!mb-8 lg:!mb-16 font-light text-black sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
          </div>
          <form action="#" className="max-w-2xl mx-auto space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-black"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 outline-none"
                placeholder="name@domain.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-black"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 outline-none"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-black"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 outline-none"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <div className="text-center flex items-center justify-center mt-10">
              <Button
                isText={true}
                text={"submit"}
                className={
                  "w-full md:w-1/2 rounded-sm text-white font-bold  bg-[var(--dark-bg)] p-2"
                }
              />
            </div>
          </form>
        </section>
        <section className="flex justify-center">
          <img
            src={contacdtImg}
            className="rounded-md object-cover w-full h-full"
          />
        </section>
      </div>
    </div>
  );
};

export default ContactFormSection;
