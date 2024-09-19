"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Personal Websites, Blogs, Stores, & CRMs",
    description:
      "Offering end-to-end development of personal websites, blogs, online stores, and custom CRM systems, built from the ground up. From designing and optimizing the database, setting up and managing servers, to creating intuitive user interfaces with modern frameworks like Next.js, React, or Angular, I handle every aspect of the project. This includes hosting, deployment, and ensuring your platform is fully optimized for performance, scalability, and security.",
    href: "",
  },
  {
    num: "02",
    title: "Infrastructure Development & Maintenance",
    description:
      "Designing and maintaining scalable infrastructure for web applications, including database management, server setup, deployment with Docker, and cloud platforms. Expertise in setting up message brokers like Kafka and RabbitMQ to ensure efficient data processing and communication between services.",
    href: "",
  },
  {
    num: "03",
    title: "API Development & Integration",
    description:
      "Building robust, scalable APIs to power web and mobile applications using Node.js, Express, and Python. I specialize in integrating third-party services like social media platforms, payment gateways, and data analytics tools. Additionally, I offer expertise in real-time communication through WebSockets, enabling live updates for applications such as chats, notifications, and dynamic data feeds. I also have experience working with Web3 technologies for blockchain integration, facilitating decentralized applications (dApps) and smart contract interactions.",
    href: "",
  },
  {
    num: "04",
    title: "AI Model Integration",
    description:
      "Harnessing the power of advanced AI and machine learning models to transform and elevate application functionality. From integrating OpenAI models to enable intelligent chatbots and document parsing, to developing personalized user experiences through data-driven insights, I specialize in seamlessly incorporating AI into both existing and new platforms. By leveraging cutting-edge technologies such as natural language processing (NLP) and predictive analytics, I create solutions that enhance automation, improve decision-making, and deliver highly personalized user interactions.",
    href: "",
  },
  {
    num: "05",
    title: "SEO Optimization",
    description:
      "Enhancing your website's search engine performance through comprehensive technical SEO optimization. I focus on improving critical factors like load time, image optimization, font rendering, and overall site speed. By implementing responsive design best practices, I ensure that your site performs flawlessly across devices. My approach also includes optimizing HTML structure, proper use of meta tags, and minimizing render-blocking resources to ensure faster page loads and better rankings on search engines.",
    href: "",
  },
  {
    num: "06",
    title: "Ongoing Maintenance & Support",
    description:
      "Providing ongoing support for existing applications, ensuring they are up-to-date, secure, and optimized for performance with regular maintenance and updates.",
    href: "",
  },
];


import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
