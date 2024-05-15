"use client";
import React, { useState } from "react";
import InputField from "./InputField";
import RadioButton from "./RadioButton";
import { useToast } from "@/components/ui/use-toast";
import YourSVGComponent from "./Svg";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/motion";
import CompanyInfo from "./CompanyInfo";

interface ContactData {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
  budget?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [contactData, setContactData] = useState<ContactData>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateBudget = (value: string) => {
    setContactData((prevData) => ({
      ...prevData,
      budget: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Simulate API call
      const response = await mockSupabaseAPI(contactData);
      setContactData({});
      toast({
        description: `Dear ${contactData?.name}, Your work inquiry has been sent!`,
      });
      console.log(response); // Mocked response
    } catch (error) {
      console.error(error);
    }
  };

  const mockSupabaseAPI = async (data: ContactData) => {
    return new Promise((resolve, reject) => {
      // Simulate API request
      setTimeout(() => {
        // Simulate success response
        resolve({ success: true });
        // Simulate error response
        // reject(new Error('Failed to store data in Supabase'));
      }, 1000);
    });
  };

  return (
    <>
      <SectionWrapper className="w-full" idName="contact">
        <motion.div variants={textVariant(0.5)}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="opacity: 1; transform: none;">
                <h1>
                  <span className="font-mona-sans block text-base font-semibold text-neutral-950">
                    Contact us
                  </span>
                  <span className="leading-[3.5rem] trackng-tight font-mona-sans mt-6 block max-w-5xl text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-[3rem]">
                    {`Let’s work together`}
                  </span>
                </h1>
                <div className="font-mona-sans mt-6 max-w-3xl text-xl text-[#525252]">
                  <p>{`We can't wait to work with you`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl mb-32 px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                <div
                  className="lg:order-last"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <form>
                    <h2 className="font-mona-sans text-base font-semibold text-neutral-950">
                      Work Inquiries
                    </h2>
                    <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                      <InputField
                        label="Name"
                        value={contactData?.name}
                        name="name"
                        onChange={handleChange}
                      />
                      <InputField
                        label="Email"
                        value={contactData?.email}
                        name="email"
                        onChange={handleChange}
                      />
                      <InputField
                        label="Company"
                        value={contactData?.company}
                        name="company"
                        onChange={handleChange}
                      />
                      <InputField
                        label="Phone"
                        value={contactData?.phone}
                        name="phone"
                        onChange={handleChange}
                      />
                      <InputField
                        label="Message"
                        value={contactData?.message}
                        name="message"
                        onChange={handleChange}
                      />
                      <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                        <fieldset>
                          <legend className="text-base/6 text-neutral-500">
                            Budget
                          </legend>
                          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <RadioButton
                              label="$25k - $50k"
                              name="budget"
                              value={contactData?.budget}
                              onChange={handleUpdateBudget}
                            />
                            <RadioButton
                              label="$50k - $100k"
                              name="budget"
                              value={contactData?.budget}
                              onChange={handleUpdateBudget}
                            />
                            <RadioButton
                              label="$100k - $150k"
                              name="budget"
                              value={contactData?.budget}
                              onChange={handleUpdateBudget}
                            />
                            <RadioButton
                              label="more than $150k"
                              name="budget"
                              value={contactData?.budget}
                              onChange={handleUpdateBudget}
                            />
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="mt-10 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                    >
                      <span className="relative top-px">
                        {`Let's work together`}
                      </span>
                    </button>
                  </form>
                </div>
                <CompanyInfo />
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <YourSVGComponent />
      </div>
    </>
  );
};

export default Contact;
