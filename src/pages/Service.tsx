import React from "react";
import {
  Briefcase,
  DollarSign,
  FileText,
  Shield,
  BarChart,
  Users,
  TrendingUp,
  PieChart,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection.tsx";

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <AnimatedSection animation="fadeIn">
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="text-yellow-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </AnimatedSection>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Briefcase size={48} />,
      title: "Accounting and Bookkeeping",
      description:
        "Comprehensive accounting services to keep your finances in order and your business compliant.",
    },
    {
      icon: <DollarSign size={48} />,
      title: "FBAR/FATCA Reporting",
      description:
        "Expert assistance with Foreign Bank Account Reporting and FATCA compliance for international assets.",
    },
    {
      icon: <FileText size={48} />,
      title: "ITIN Application Assistance",
      description:
        "Streamlined process for obtaining Individual Taxpayer Identification Numbers for non-resident aliens.",
    },
    {
      icon: <Shield size={48} />,
      title: "Tax Representation for Audits/Notices",
      description:
        "Professional representation and support during tax audits and in response to IRS notices.",
    },
    {
      icon: <BarChart size={48} />,
      title: "Customized Financial Reporting",
      description:
        "Tailored financial reports providing deep insights into your business's financial health.",
    },
    {
      icon: <Users size={48} />,
      title: "Business Consulting",
      description:
        "Strategic business advice to help your company grow and succeed in a competitive market.",
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Financial Forecasting",
      description:
        "Accurate financial projections to help you make informed decisions about your business's future.",
    },
    {
      icon: <PieChart size={48} />,
      title: "Tax Planning Strategies",
      description:
        "Proactive tax planning to minimize your tax liability and maximize your wealth.",
    },
  ];

  return (
    <div className="space-y-16 ">
      {/* Services Hero */}
      <section className="bg-yellow-400 text-gray-800">
        <div className="container mx-auto px-4 py-16">
          <AnimatedSection animation="slideInFromBottom">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Our Services
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Comprehensive tax and financial solutions tailored to your needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideInFromLeft">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Additional Services
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Taxation Expertise
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Estate and Succession Planning</li>
                  <li>Partnership & Corporate Tax Preparation</li>
                  <li>Business Tax Return Preparation</li>
                  <li>Individual Tax Preparation & Planning</li>
                  <li>Out-of-State Returns</li>
                  <li>Gift & Estate Tax Return Preparation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Business Consulting
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cash Flow Management</li>
                  <li>Payroll Accounting for Employees & Contractors</li>
                  <li>Bookkeeping for Businesses</li>
                  <li>Gift/Estate Tax Return/Exempt Organization Filing</li>
                  <li>New Business Incorporation</li>
                  <li>Business Tax Return Filing – Form 1120/1120-S/1065</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Process */}
      <section className="container mx-auto px-4">
        <AnimatedSection animation="slideInFromRight">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Service Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-400 text-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {`Step ${index + 1}`}
                </h3>
                <p>
                  {`Description for step ${
                    index + 1
                  }, detailing the process. This ensures clarity and enhances user experience.`}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Additional Resources Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Additional Resources
            </h2>
            <p className="text-center mb-4">
              Explore our range of resources to better understand your financial
              and tax needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Blog</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest trends and insights in the tax
                  and finance world.
                </p>
                <a href="/blog" className="text-yellow-500 hover:underline">
                  Read our Blog
                </a>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Webinars</h3>
                <p className="text-gray-600 mb-4">
                  Join our webinars to gain expert insights into various
                  financial topics.
                </p>
                <a href="/webinars" className="text-yellow-500 hover:underline">
                  View Upcoming Webinars
                </a>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">FAQs</h3>
                <p className="text-gray-600 mb-4">
                  Find answers to common questions about our services and tax
                  processes.
                </p>
                <a href="/faq" className="text-yellow-500 hover:underline">
                  Check FAQs
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <AnimatedSection animation="fadeIn">
        <section className="bg-yellow-400 text-gray-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Let us help you navigate your financial journey with confidence.
            </p>
            <a
              href="/contact"
              className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition duration-300"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Services;
