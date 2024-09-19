"use client";

import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaFigma,
	FaNodeJs,
	FaJava,
	FaAngular,
} from "react-icons/fa";

import {
	SiTailwindcss,
	SiNextdotjs,
	SiSpringboot,
	SiRabbitmq,
	SiApachekafka,
	SiPostgresql,
	SiMongodb,
	SiElasticsearch,
	SiDocker,
} from "react-icons/si";

import { DiRedis } from "react-icons/di";

// about data
const about = {
	title: "About me",
	description:
		"I'm a passionate Full Stack Developer who loves creating innovative web applications and micro SaaS projects. I thrive on the challenge of building things from the ground up and constantly learning new technologies along the way. Whether it's experimenting with a new tool or refining my skills, I'm always driven by a desire to improve and grow. As an indie hacker at heart, I'm excited by the endless possibilities the web has to offer and am always looking for the next project to dive into.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Costin Gheorghe",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+40) 724 290 256",
		},
		{
			fieldName: "Experience",
			fieldValue: "2+ Years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Romanian",
		},
		{
			fieldName: "Email",
			fieldValue: "gheorghe.costin@yahoo.com",
		},
		{
			fieldName: "Languages",
			fieldValue: "English, Romanian",
		},
	],
};

// experience data
const experience = {
	icon: "/assets/resume/badge.svg",
	title: "Professional Experience",
	description:
		"With a solid foundation in full stack development, I have honed my skills across various roles, ranging from startup environments to freelance projects. My expertise spans both frontend and backend technologies, enabling me to contribute to dynamic teams and projects with high impact.",
	items: [
		{
			company: "3Nyble Technologies",
			position: "Full Stack Developer",
			duration: "February 2024 - Present",
			description:
				"Currently leading the development of scalable web applications, integrating complex backend systems with responsive frontends. Collaborating with cross-functional teams to deliver robust solutions tailored to client needs.",
		},
		{
			company: "Socialinsider",
			position: "Junior Full Stack Developer",
			duration: "June 2022 - February 2024",
			description:
				"Contributed to building data-driven social media analytics tools. Worked on both server-side logic and frontend interfaces, ensuring seamless user experiences and efficient data processing pipelines.",
		},
		{
			company: "Paperchat",
			position: "Self-employed",
			duration: "November 2023 - September 2024",
			description:
				"Managed all aspects of full stack development as a freelancer, creating custom web applications for clients. Focused on delivering tailored solutions, balancing innovation with performance optimization.",
		},
	],
};

// education data
const education = {
	icon: "/assets/resume/cap.svg",
	title: "Education",
	description:
		"I have built a strong academic foundation in computer science and database administration, equipping me with both theoretical knowledge and practical skills. My education has focused on understanding core principles of computing, as well as advanced techniques in managing and optimizing databases.",
	items: [
		{
			institution: "University Politechnica of Bucharest",
			degree: "Master's in Database Administration",
			duration: "2023 - 2025",
			description:
				"Focused on advanced database management, data security, and performance optimization, with hands-on experience in designing and administering complex database systems.",
		},
		{
			institution: "University Politechnica of Bucharest",
			degree: "Bachelor's in Computer Science",
			duration: "2019 - 2023",
			description:
				"Gained a comprehensive understanding of software development, algorithms, and data structures, while working on multiple projects involving both front-end and back-end technologies.",
		},
	],
};

// skills data
const skills = {
	title: "My skills",
	description:
	"Over the years, I've built a versatile skill set that spans across frontend and backend development. From designing intuitive user interfaces to building scalable server-side solutions, I enjoy working with a range of technologies that bring ideas to life. My toolkit is always expanding as I continue to explore new frameworks, tools, and best practices in the fast-evolving world of web development.",
	skillList: [
		// {
		//   icon: <FaHtml5 />,
		//   name: "html 5",
		// },
		// {
		//   icon: <FaCss3 />,
		//   name: "css 3",
		// },
		{
			icon: <FaJs />,
			name: "javascript",
		},
		{
			icon: <FaReact />,
			name: "react.js",
		},
		{
			icon: <SiNextdotjs />,
			name: "next.js",
		},
		{
			icon: <SiTailwindcss />,
			name: "tailwind.css",
		},
		{
			icon: <FaNodeJs />,
			name: "node.js",
		},
		// {
		//   icon: <FaFigma />,
		//   name: "figma",
		// },
		{
			icon: <FaJava />,
			name: "Java",
		},
		{
			icon: <SiSpringboot />,
			name: "Spring",
		},
		{
			icon: <SiApachekafka />,
			name: "Kafka",
		},
		{
			icon: <DiRedis />,
			name: "Redis",
		},
		{
			icon: <FaAngular />,
			name: "Angular",
		},
		{
			icon: <SiPostgresql />,
			name: "PostgreSQL",
		},
		{
			icon: <SiMongodb />,
			name: "MongoDB",
		},
		{
			icon: <SiElasticsearch />,
			name: "ElasticSearch",
		},
		{
			icon: <SiDocker />,
			name: "Docker",
		},
	],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>

					{/* content */}
					<div className="min-h-[70vh] w-full">
						{/* experience */}
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">
									{experience.title}
								</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">
														{item.duration}
													</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.position}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">
															{item.company}
														</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* education */}
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">
									{education.title}
								</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">
														{item.duration}
													</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.degree}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">
															{item.institution}
														</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* skills */}
						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">
										{skills.title}
									</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{skills.description}
									</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
									{skills.skillList.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider
													delayDuration={100}
												>
													<Tooltip>
														<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
															<div className="text-6xl group-hover:text-accent transition-all duration-300">
																{skill.icon}
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className="capitalize">
																{skill.name}
															</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>

						{/* about */}
						<TabsContent
							value="about"
							className="w-full text-center xl:text-left"
						>
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">
									{about.title}
								</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{about.description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item, index) => {
										return (
											<li
												key={index}
												className="flex items-center justify-center xl:justify-start gap-4"
											>
												<span className="text-white/60">
													{item.fieldName}
												</span>
												<span className="text-[15px]">
													{item.fieldValue}
												</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
