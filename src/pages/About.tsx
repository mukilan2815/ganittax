import React from "react";
import { Users, Award, TrendingUp, Clock, Globe, BookOpen } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection.tsx";

const About: React.FC = () => {
  return (
    <div>
      {/* About Hero */}
      <section className="bg-yellow-400 text-gray-800">
        <div className="container mx-auto px-4 py-16">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              About Ganit Tax
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              We are a team of dedicated tax professionals committed to
              providing expert financial solutions for individuals and
              businesses.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <AnimatedSection animation="slideInFromLeft">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="mb-4">
                Founded in 2010, Ganit Tax has grown from a small local practice
                to a trusted name in tax and financial services. Our journey has
                been driven by a passion for helping clients navigate the
                complex world of taxation and achieve their financial goals.
              </p>
              <p>
                With a team of experienced professionals and a commitment to
                staying ahead of the ever-changing tax landscape, we've built a
                reputation for excellence and reliability in our field.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideInFromRight">
            <div className="md:w-1/2 md:pl-8">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Ganit Tax Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Users className="text-yellow-500 w-12 h-12 mb-4" />,
                title: "Client-Centric Approach",
                description:
                  "We put our clients' needs first, providing personalized solutions tailored to their unique situations.",
              },
              {
                icon: <Award className="text-yellow-500 w-12 h-12 mb-4" />,
                title: "Integrity & Professionalism",
                description:
                  "We uphold the highest standards of ethics and professionalism in all our dealings.",
              },
              {
                icon: <TrendingUp className="text-yellow-500 w-12 h-12 mb-4" />,
                title: "Continuous Improvement",
                description:
                  "We are committed to ongoing learning and staying updated with the latest tax laws and regulations.",
              },
            ].map((value, index) => (
              <AnimatedSection key={index} animation="fadeIn">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  {value.icon}
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            {
              icon: <Users size={48} />,
              value: "10,000+",
              label: "Satisfied Clients",
            },
            {
              icon: <Clock size={48} />,
              value: "15+",
              label: "Years of Experience",
            },
            { icon: <Globe size={48} />, value: "50+", label: "States Served" },
            {
              icon: <BookOpen size={48} />,
              value: "1,000+",
              label: "Tax Returns Filed Annually",
            },
          ].map((achievement, index) => (
            <AnimatedSection key={index} animation="slideInFromBottom">
              <div className="text-center">
                <div className="text-yellow-500 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              name: "John Doe",
              position: "Founder & CEO",
              image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
              name: "Jane Smith",
              position: "Senior Tax Consultant",
              image:
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
              name: "Mike Johnson",
              position: "Financial Advisor",
              image:
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
          ].map((member, index) => (
            <AnimatedSection key={index} animation="fadeIn">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Parallax Section */}
      <section
        className="parallax h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
        }}
      >
        <div className="bg-black bg-opacity-50 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-4">
            We're always looking for talented professionals to join our growing
            team.
          </p>
          <a
            href="/careers"
            className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300"
          >
            View Openings
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <AnimatedSection animation="fadeIn">
        <section className="bg-yellow-400 text-gray-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
            <p className="text-xl mb-8">
              Experience the Ganit Tax difference for yourself.
            </p>
            <a
              href="/contact"
              className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default About;
