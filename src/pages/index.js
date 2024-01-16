import React, { useEffect, useState } from "react";
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image";
import "../styles/global.css";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";

import { graphql } from "gatsby";
import { Button } from "@/components/ui/button";

import bgGreen from "../images/bg-green.png";
import bgGreen1 from "../images/bg-green_1.png";
import bgGreen2 from "../images/bg-green_2.png";
import bgGreen3 from "../images/bg-green_3.png";
import BgHex from "../images/bg-hex.png";
import VgMagenta from "../images/bg-magenta.png";
import Bgpurple from "../images/bg-purple.png";
import BgYellow from "../images/bg-yellow.png";
import bgBlueMagenta from "../images/bg-blue_magenta.png";
import bgBlueSky from "../images/bg-blue_sky.png";
import Rocket from "../assets/rocket.svg";
import LogoElastic from "../assets/logo_elastic.svg";
import LogoFramer from "../assets/logo_framer.svg";
import LogoPipedrive from "../assets/logo_pipedrive.svg";
import LogoGitlab from "../assets/logo_gitlab.svg";
import LogoMonday from "../assets/logo_monday.svg";
import LogoBooking from "../assets/logo_booking.svg";
import LogoDescript from "../assets/logo_descript.svg";
import LogoDiscord from "../assets/logo_discord.svg";
import LogoMaze from "../assets/logo_maze.svg";
import LogoUpwork from "../assets/logo_upwork.svg";
import LogoWealthsimple from "../assets/logo_wealthsimple.svg";
import LogoBraze from "../assets/logo_braze.svg";
import View from "../assets/view.svg";
import Follow from "../assets/follow.svg";
import Duration from "../assets/duration.svg";
import Percentation from "../assets/percentation.svg";
import Layout from "../components/layout";
import { formatDate } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useAnimation } from "framer-motion";

import Shield from "../assets/shield.svg";
import Key from "../assets/key.svg";
import Contact from "../assets/contact.svg";
import Video from "../assets/video.svg";
import Number1 from "../assets/number1.svg";
import Number2 from "../assets/number2.svg";
import Number3 from "../assets/number3.svg";
import Client from "../assets/client.svg";
import Log from "../assets/log.svg";
import Tabel from "../assets/tabel.svg";
import BgGreen from "../assets/bg-green.svg";
import AlexBeluchi from "../images/alex_beluchi.png";
import Alexander from "../images/alexander.png";
import Mark from "../images/mark.png";
import MarthaAndrews from "../images/martha_andrews.png";
import Arrow from "../assets/arrow.svg";
import ArrowGray from "../assets/arrow_gray.svg";
import ArrowRight from "../assets/arrow_right.svg";
import Agency from "../blog/agency.png";
import Freelance from "../blog/freelance.png";
import Management from "../blog/management.png";
import RightDisable from "../assets/right_disable.svg";
import RightEnable from "../assets/right_enable.svg";
import LeftDisable from "../assets/left_disable.svg";
import LeftEnable from "../assets/left_enable.svg";
import Rocket2 from "../assets/rocket_2.svg";
import Objek from "../images/objek.png";
import Plus1 from "../assets/plus1.svg";
import Plus2 from "../assets/plus2.svg";
import Plus3 from "../assets/plus3.svg";
import Plus4 from "../assets/plus4.svg";

import Ripling from "../assets/ripling.svg";
import Yahoo from "../assets/yahoo.svg";
import Spacebasic from "../assets/spacebasic.svg";
import Gojek from "../assets/gojek.svg";
import Cloudanix from "../assets/cloudanix.svg";
import Blinkit from "../assets/blinkit.svg";
import Berrybox from "../assets/berrybox.svg";

import { Link } from "gatsby";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      // Reset the animation when the element is not in view
      controls.start({ y: 100, opacity: 0 });
    }
  }, [controls, inView]);

  return { ref, controls };
};

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();
  // For the hero section
  const heroControls = useAnimation();
  useEffect(() => {
    heroControls.start({ y: 0, opacity: 1 });
  }, [heroControls]);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });



  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // Ensures the animation only happens once
  });

  useEffect(() => {
    if (sectionInView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, sectionInView]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isScrolled) {
        setIsScrolled(true);
        controls.start({ y: 0, opacity: 1 });
      } else if (window.scrollY <= 50 && isScrolled) {
        setIsScrolled(false);
        controls.start({ y: 100, opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, isScrolled]);

  const trustedCompaniesAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const testimonyAnimation = useScrollAnimation();
  const cybersecurity = useScrollAnimation();
  const process = useScrollAnimation();
  const sayaboutus = useScrollAnimation();
  const blogsandarticles = useScrollAnimation();
  const faq = useScrollAnimation();
  const asideAnimation1 = useScrollAnimation();
  const asideAnimation2 = useScrollAnimation();
  const asideAnimation3 = useScrollAnimation();


  return (
    <Layout>
      <div className="px-4">
        <motion.section
          initial={{ y: 100, opacity: 0 }} // Start from below
          animate={heroControls}
          transition={{ duration: 0.5, delay: 0.2 }} // Delayed start for visibility
          className="hero-section relative"
          // style={{ backgroundImage: 'url(/bg-green.png)' }}
        >
          <section className="flex flex-col gap-4 relative py-40 md:pt-[15rem] text-center justify-center items-center  md:max-w-screen-lg mx-auto ">
            <div className="z-10 relative flex flex-col justify-center items-center gap-4">
              <h2 className="text-4xl md:text-6xl font-bold w-12/12 md:leading-tight text-transparent bg-clip-text bg-text-gradient ">
                Scale Securely in 3 Simple Steps
              </h2>
              <p className="mt-4 text-white bg-clip-text  bg-text-gradient text-md w-8/12  ">
                We are your cybersecurity partner, to ensure your app, code and cloud security.
              </p>
              <Button className="mt-8 bg-stone-50 text-stone-950  rounded-xl w-fit text-xl font-bold px-4 py-6 gap-2 hover:bg-green-600 my-12">
                <Rocket className="w-6 h-8" />
                Book a Call
              </Button>
            </div>
           

           
          </section>
          <BgGreen className="block w-full h-full z-0 top-0 absolute object-cover"/>
          <hr className=" border-white border-b-4  md:max-w-screen-lg mx-auto " />
        </motion.section>
      
        <motion.div
          ref={trustedCompaniesAnimation.ref}
          initial={{ y: 100, opacity: 0 }}
          animate={trustedCompaniesAnimation.controls}
          transition={{ duration: 0.5 }}
          className="trusted-companies-section md:max-w-screen-lg mx-auto"
        >
          <section className="md:py-24 py-12 flex flex-col gap-14">
            <motion.div
              ref={sectionRef}
              initial={{ y: 100, opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className="animated-section"
            >
            <h2 className="md:text-4xl text-3xl font-bold">
              You’re in safe hands, some of the <span className="text-[#09DE4C]"> companies</span>  we <br className="hidden md:flex" /> have worked with.
            </h2>
            </motion.div>
            <motion.div
              ref={servicesAnimation.ref}
              initial={{ y: 100, opacity: 0 }}
              animate={servicesAnimation.controls}
              transition={{ duration: 0.5 }}
              className="services-section"
            >
              <div className="md:hidden">
                <Marquee >
                  <div className="mx-4">
                    <LogoElastic />
                  </div>
                  <div className="mx-4">
                    <LogoFramer />
                  </div>
                  <div className="mx-4">
                    <LogoPipedrive />
                  </div>
                  <div className="mx-4">
                    <LogoGitlab />
                  </div>
                  <div className="mx-4">
                    <LogoMonday />
                  </div>
                  <div className="mx-4">
                    <LogoBooking />
                  </div>
                  <div className="mx-4">
                    <LogoDescript />
                  </div>
                  <div className="mx-4">
                    <LogoDiscord />
                  </div>
                  <div className="mx-4">
                    <LogoMaze />
                  </div>
                  <div className="mx-4">
                    <LogoUpwork />
                  </div>
                  <div className="mx-4">
                    <LogoWealthsimple />
                  </div>
                  <div className="mx-4">
                    <LogoBraze />
                  </div>
                </Marquee>
              </div>
              <motion.div
                ref={sectionRef}
                initial={{ y: 100, opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5 }}
                className="animated-section"
              >
              <div className="hidden md:flex flex-col gap-14">
                <div className="flex justify-between items-center"> 
                    <Ripling/>
                    <Yahoo/>
                    <Gojek/>
                    <Blinkit/>
                    <Cloudanix/>
                </div>
                  <div className="flex items-center gap-24"> 
                    <Spacebasic />
                    {/* <Berrybox /> */}
                    <StaticImage 
                    src="../images/berrybox.webp" 
                    alt="berrybox" 
                    className="w-[15rem] h-auto" 
                    />
                </div>
                {/* <div className="flex gap-8">
                  <LogoElastic />
                  <LogoFramer />
                  <LogoPipedrive />
                  <LogoGitlab />
                  <LogoMonday />
                  <LogoBooking />
                </div>
                <div className="flex gap-8">
                  <LogoDescript />
                  <LogoDiscord />
                  <LogoMaze />
                  <LogoUpwork />
                  <LogoWealthsimple />
                  <LogoBraze />
                </div> */}
              </div>
              </motion.div>
            </motion.div>

            <motion.div
              ref={sectionRef}
              initial={{ y: 100, opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className="animated-section"
            >
              <div className=" md:pt-12   grid grid-cols-2 gap-4 md:flex md:flex-row">
                <div className="flex md:pr-12 py-1 ">
                  {/* <StaticImage
                  quality={100}
                    src="../images/numbers/1.png"
                    className="w-full h-full"
                    alt="recurring"
                  /> */}
                  <View className="overflow-visible " />
                  {/* Vulnerabilities Found */}
                </div>
                <div className="flex md:px-12 py-1 ">
                  <Follow className="overflow-visible " />
                  {/* Private Data Saved */}
                </div>
                <div className="flex md:px-12 py-1 ">
                  <Duration className="overflow-visible " />
                  {/* For First Critical Bug */}
                </div>
                <div className="flex md:px-12 py-1 ">
                  <Percentation className="overflow-visible " />
                  {/* Recurring Client */}
                </div>
              </div>
            </motion.div>
          </section>
          <hr className=" border-white border-b-4" />
        </motion.div>
 
        <motion.div
          ref={testimonyAnimation.ref}
          initial={{ y: 100, opacity: 0 }}
          animate={testimonyAnimation.controls}
          transition={{ duration: 0.5 }}
          className="services-section md:max-w-screen-lg mx-auto"
        >
          <section className="bg-transparent text-gray-100 py-24 flex flex-col gap-4">
            <h2 className="text-4xl font-extrabold w-full md:w-8/12  py-8">
              Our services for <br />
              your <span className="text-[#09DE4C]">cyber security</span>
            </h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-center">
              <div className="rounded-xl p-8 bg-[#19191B] border-[#343B46] flex flex-col gap-4 justify-center items-center ">
                <Shield className="w-full h-auto" />
                <h3 className="text-2xl font-bold">Cloud Security</h3>
                <p>
                  We help you secure your AWS and GCP cloud while automating your
                  cloud security using terraform.
                </p>
              </div>
              <div className="rounded-xl p-8 bg-[#19191B] border-[#343B46] flex flex-col gap-4 justify-center items-center ">
                <Key className="w-full h-auto" />
                <h3 className="text-2xl font-bold">VAPT</h3>
                <p>
                  We uncover and fix security vulnerabilities of mobile and web,
                  while providing solutions to mitigate risk.
                </p>
              </div>

              <div className="rounded-xl p-8 bg-[#19191B] border-[#343B46] flex flex-col gap-4 justify-center items-center ">
                <Contact className="w-full h-auto" />
                <h3 className="text-2xl font-bold">Security Training</h3>
                <p>
                  Equip your team with the knowledge and skills to safeguard
                  company data and applications.
                </p>
              </div>
              <div className="rounded-xl p-8 bg-[#19191B] border-[#343B46] flex flex-col gap-4 justify-center items-center ">
                <Video className="w-full h-auto" />
                <h3 className="text-2xl font-bold">Security Content Creation</h3>
                <p>
                  We craft engaging security demos, insightful blogs, and ractical
                  tutorials for our clients.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
        <motion.div
          ref={cybersecurity.ref}
          initial={{ y: 100, opacity: 0 }}
          animate={cybersecurity.controls}
          transition={{ duration: 0.5 }}
          className="services-section md:max-w-screen-lg mx-auto"
        >
          <section className="py-24 flex flex-col gap-4">
            <h3 className="md:text-4xl md:w-8/12 leading-10 py-12 text-3xl font-bold">
              The world moves fast, we keep pace. Cut through the noise with our{" "}
              <span className="text-[#09DE4C]">process</span>
            </h3>
            <div className="flex gap-4">
              <div className="flex flex-col gap-12 py-12 ">
               
                <div className="flex flex-col md:flex-row gap-4">
                  
                  <div className="flex w-12/12 gap-4 flex-col md:flex-row  ">
                    <Number1 className="md:w-1/12 " />
                    <div className="w-full">
                      <h4 className="text-[#09DE4C] text-2xl mb-4 font-extrabold">Discover</h4>
                      <p className="md:w-1/2">
                        Starting with the initial phase of getting to know about
                        the project, here we set expectations and what are the
                        tasks that needed to be done for the client.
                      </p>
                    </div>
                  </div>
                  <motion.div
                    ref={asideAnimation1.ref}
                    initial={{ y: 100, opacity: 0 }}
                    animate={asideAnimation1.controls}
                    transition={{ duration: 0.5 }}
                  >
                    <aside className="rounded-xl p-8 bg-[#19191B] border-[#343B46] flex flex-col gap-4 justify-center items-center">
                      <Client className="w-[20rem] h-auto" />
                    </aside>
                  </motion.div>
                </div>
           
                <div className="flex flex-col md:flex-row  gap-4">
                  <div className="flex w-12/12 gap-4 md:flex-row flex-col">
                    <Number2 className="md:w-1/12" />
                    <div className="flex flex-col w-full ">
                      <h4 className="text-[#09DE4C] text-2xl mb-4 font-extrabold">Start Securing</h4>
                      <p className="md:w-1/2">
                        We start assessing the tasks that need to be done and try
                        to meet the ends by doing the testing/ content.
                      </p>
                    </div>
                  </div>
                  <motion.aside
                    ref={asideAnimation2.ref}
                    initial={{ y: 100, opacity: 0 }}
                    animate={asideAnimation2.controls}
                    transition={{ duration: 0.5 }}
                    className="rounded-xl p-8 bg-[#19191B] border-[#343B46] flex flex-col gap-4 justify-center items-center"
                  >
                    <Log className="w-[20rem] h-auto" />
                  </motion.aside>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex w-12/12 gap-4 md:flex-row flex-col">
                    <Number3 className="md:w-1/12" />
                    <div className="flex flex-col w-full">
                      <h4 className="text-[#09DE4C] text-2xl mb-4 font-extrabold">
                        Report Submission
                      </h4>
                      <p className="md:w-1/2">
                        After the tasks is completed we check with the clients
                        with all the to-do’s and take a sign-off by submitting the
                        final report.
                      </p>
                    </div>
                  </div>
                  <motion.div
                    ref={asideAnimation3.ref}
                    initial={{ y: 100, opacity: 0 }}
                    animate={asideAnimation3.controls}
                    transition={{ duration: 0.5 }}
                    
                  >
                    <div className="rounded-xl p-8 bg-[#19191B] border-[#343B46] flex flex-col gap-4 justify-center items-center"><Tabel className="w-[20rem] h-auto" /></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>

        <motion.div
          ref={process.ref}
          initial={{ y: 100, opacity: 0 }}
          animate={process.controls}
          transition={{ duration: 0.5 }}
          className="services-section md:max-w-screen-lg mx-auto"
        >
          <section>
            <h2 className="font-bold md:text-4xl text-3xl md:leading-relaxed">
              People love us. See what they <br className="hidden md:flex" /> have to{" "}
              <span className="text-[#09DE4C] font-bold">say about us</span>
            </h2>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-24">
              <Card className="bg-[#19191B] border-[#343B46]">
                <CardHeader className="flex flex-row gap-4 ">
                  <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                    <Avatar asChild className="w-10 h-10">
                      <StaticImage
                        src="../images/sujay.webp"
                        alt="Sujay"
                      />
                    </Avatar>
                    <a href="https://www.linkedin.com/in/sujaymaheshwari/" className="flex flex-col gap-1">
                      <h3 className="text-xl">Sujay Maheshwari</h3>
                      <p className="text-xs text-stone-400">
                        Founder Cloudanix, YC Startup
                      </p>
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-stone-50 text-sm">
                  <p>
                    We have always had a wonderful experience with Aseem and his team. Their professionalism and timely updates have reassured me of good work. When we had a crucial feature going live, SecureMyOrg conducted timely and thorough testing, ensuring a secure launch and providing us with nuclei templates to keep any upcoming similar features secure as well. Their efficiency and comprehensive reporting exceeded our expectations and also fortified our confidence in their services. They have been an invaluable partner in safeguarding Cloudanix.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#19191B] border-[#343B46]">
                <CardHeader className="flex flex-row gap-4 ">
                  <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                    <Avatar asChild className="w-10 h-10">
                      <StaticImage
                        src="../images/Avinash.webp"
                        alt="Avinash"
                      />
                    </Avatar>
                    <a href="https://www.linkedin.com/in/avinashjain619/" className="flex flex-col gap-1">
                      <h3 className="text-xl">Avinash Jain</h3>
                      <p className="text-xs text-stone-400">
                        Security at Microsoft (Identity Platform)
                      </p>
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-stone-50 text-sm">
                  <p>
                    I have worked with Aseem in Blinkit (Grofers) and I feel very proud to get to know him, such a hard-working and all-rounder in his role. His overall presence has really a positive impact in and outside the team. He dives into unknown problems and always comes up with a solid breakthrough in not much time. He is a developer who can do security which gives him an edge over many others there.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#19191B] border-[#343B46]">
                <CardHeader className="flex flex-row gap-4 ">
                  <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                    <Avatar asChild className="w-10 h-10">
                      <StaticImage
                        src="../images/placholder.webp"
                        alt="Kenny"
                      />
                    </Avatar>
                    <a href="https://www.linkedin.com/in/kgotama/" className="flex flex-col gap-1">
                      <h3 className="text-xl">Kenny Gotama</h3>
                      <p className="text-xs text-stone-400">
                        Gojek Product Security
                      </p>
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-stone-50 text-sm">
                  <p>
                    I have worked with Aseem for a year. He has a great technical skillset combined with being an excellent problem solver which has helped a lot to solve the Security challenge in the organization. One of the great impressions that has always been shown constantly is the calmness, and creativity that is reflected in every challenge.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#19191B] border-[#343B46]">
                <CardHeader className="flex flex-row gap-4 ">
                  <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                    <Avatar asChild className="w-10 h-10">
                      <StaticImage
                        src="../images/srekar.webp"
                        alt="Sreekar"
                      />
                    </Avatar>
                    <a href="https://www.linkedin.com/in/sreekaro/" className="flex flex-col gap-1">
                      <h3 className="text-xl">Sreekar Obulampalli</h3>
                      <p className="text-xs text-stone-400">
                        Founder @ BerryBox Benefits | InsurTech, HealthTech
                      </p>
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-stone-50 text-sm">
                  <p>
                    We were referred to Aseem by one of our employees who had happened to know Aseem. To begin with, Aseem helped us understand our security posture. He helped put the basics in place, gave us valuable inputs and was part of the discussions when we chose our ISMS platform in the process of getting audited for various standards and certifications. He also helped with execution of our VAPT (Vulnerability Assessment and Penetration Test) and subsequent work on risk mitigations from the findings. SecureMyOrg and Aseem have been a valuable asset for Berrybox. We achieved all this in a very short span of time in about a month.
                  </p>
                </CardContent>
              </Card>
              {/* <Card className="bg-[#19191B] border-[#343B46]">
                <CardHeader className="flex flex-row gap-4 ">
                  <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                    <Avatar asChild className="w-14 h-14">
                      <StaticImage
                        src="../images/alex_beluchi.png"
                        alt="alex beluchi"
                      />
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl">Alex Beluchi</h3>
                      <p className="text-sm text-stone-300">
                        Product Marketeer Growth, Twillio
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-stone-50 text-sm">
                  <p>
                    Synchrowork has been a lifesaver for our team. Before we
                    started using it, we were struggling to keep track of our
                    tasks and deadlines. Now, everything is organized and
                    centralized, and we can easily see what everyone is working
                    on. This has helped us to be more efficient and productive. We
                    are also really impressed with the customer support. They are
                    always quick to respond to our questions and help us to get
                    the most out of the product.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#19191B] border-[#343B46]">
                <CardHeader className="flex flex-row gap-4 ">
                  <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                    <Avatar asChild className="w-14 h-14">
                      <StaticImage
                        src="../images/martha_andrews.png"
                        alt="martha andrews"
                      />
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl">Martha Andrews</h3>
                      <p className="text-sm text-stone-300">
                        Product Marketeer Growth, Twillio
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-stone-50">
                  <p>
                    Since we started using Synchrowork, our team productivity has
                    increased by 20%. The easy-to- use interface and powerful
                    features make it easy for us to manage our tasks, collaborate
                    with each other, and track our progress. We are very happy
                    with the results and would highly recommend this product to
                    other teams
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#19191B] border-[#343B46]">
                <CardHeader className="flex flex-row gap-4 ">
                  <CardTitle className="flex flex-row gap-4 justify-center items-center text-stone-50 ">
                    <Avatar asChild className="w-14 h-14">
                      <StaticImage src="../images/mark.png" alt="mark" />
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold text-gray-200">Mark</h3>
                      <p className="text-xs">
                        Product Marketeer Growth, Twillio
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-stone-50">
                  <p>
                    We have been using the [team management product name] for over
                    a year now, and we love it! It has helped us to improve our
                    team communication and collaboration, and it has made it much
                    easier for us to track our progress and meet our deadlines. We
                    are especially impressed with the task management features.
                    The ability to assign tasks, set due dates, and track progress
                    has been invaluable to us. We would highly recommend the [team
                    management product name] to any team that is looking to
                    improve their productivity and efficiency
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#19191B] border-[#343B46]">
                <CardHeader className="flex flex-row gap-4 ">
                  <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                    <Avatar asChild className="w-14 h-14">
                      <StaticImage src="../images/alexander.png" alt="alexander" />
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl">Alexander</h3>
                      <p className="text-sm text-stone-300">
                        Product Marketeer Growth, Twillio
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-stone-50">
                  <p>
                    WWe have been using Synchrowork for a few months now, and we
                    have already seen a significant improvement in our team
                    productivity. The ability to assign tasks, set deadlines, and
                    track progress has been invaluable to us. We are also really
                    impressed with the collaboration features. The ability to
                    share files, leave comments, and chat with team members in
                    real time has made it much easier for us to work together on
                    projects. We are very happy with the Synchrowork and would
                    highly recommend it to any team that is looking to improve
                    their productivity and efficiency
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#19191B] border-[#343B46]">
                <CardHeader className="flex flex-row gap-4 ">
                  <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                    <Avatar asChild className="w-14 h-14">
                      <StaticImage
                        src="../images/martha_andrews.png"
                        alt="martha andrews"
                      />
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl">Martha Andrews</h3>
                      <p className="text-sm text-stone-300">
                        Product Marketeer Growth, Twillio
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-stone-50 ">
                  <p>
                    We have been using the [team management product name] for a
                    few months now, and we are very happy with the results. It has
                    helped us to organize our tasks and projects, and it has made
                    it much easier for us to collaborate with each other. We are
                    also impressed with the reporting features. We are now able to
                    get real-time insights into our team's performance, which has
                    helped us to make better decisions
                  </p>
                  <Link
                    href="Martha Andrews"
                    className="flex gap-2 pt-6 text-gray-500 font-bold items-center "
                  >
                    Read Case Study
                    <ArrowGray className="mt-1 text-gray-500" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-[#19191B] border-[#343B46]">
                <CardHeader className="flex flex-row gap-4 ">
                  <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                    <Avatar asChild className="w-14 h-14">
                      <StaticImage
                        src="../images/alex_beluchi.png"
                        alt="alex beluchi"
                      />
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl">Alex Beluchi</h3>
                      <p className="text-sm text-stone-300">
                        Product Marketeer Growth, Twillio
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-stone-50">
                  <p>
                    The [team management product name] has been a great investment
                    for our team. It has helped us to improve our communication
                    and collaboration, and it has made it much easier for us to
                    track our progress and meet our deadlines. We are especially
                    impressed with the user interface. It is very easy to use and
                    navigate. We would highly recommend this product to any team
                    looking to improve their productivity and efficiency
                  </p>
                  <Link
                    href="Martha Andrews"
                    className="flex gap-2 pt-6 text-gray-500 font-bold items-center "
                  >
                    Read Case Study
                    <ArrowGray className="mt-1 text-gray-500" />
                  </Link>
                </CardContent>
              </Card> */}
            </section>
          </section>
        </motion.div>
        
        <motion.div
          ref={sayaboutus.ref}
          initial={{ y: 100, opacity: 0 }}
          animate={sayaboutus.controls}
          transition={{ duration: 0.5 }}
          className="animated-section md:max-w-screen-lg mx-auto"
        >
          <section className="py-24">
            <Carousel>
              <div className="flex justify-between w-full items-center md:flex-row flex-col ">
                <div>
                  <h2 className="md:text-4xl text-3xl text font-bold ">
                    We believe in giving back to the society.
                  </h2>
                  <h2 className="md:text-4xl text-3xl font-bold ">
                    Check out our{" "}
                    <span className="text-[#09DE4C]">blogs and articles</span>
                  </h2>
                </div>
                <div className="flex gap-4 h-full justify-end self-start md:justify-center md:self-end items-end pt-4 mt-8">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </div>
              <CarouselContent className="items-center ">
                {posts.map(({ node }) => (
                  <CarouselItem
                    className="md:basis-1/3 text-sm rounded-xl  bg-[#19191B] border-[#343B46] flex flex-col gap-4 justify-center items-center mx-3 h-fit p-0 rounded-t-lg my-12"
                    key={node.fields.slug}
                  >
                    <Link
                      to={node.fields.slug}
                      className="flex flex-col gap-4 rounded-t-xl"
                    >
                      <GatsbyImage
                        image={getImage(node.frontmatter.thumbnail)}
                        alt={node.frontmatter.title}
                        className="h-1/2 object-cover rounded-t-xl w-full"
                      />
                      <div className="px-8 pr-8 py-4 pb-8 flex flex-col gap-4">
                        <p className="text-[#FBCE00]">
                          {node.frontmatter.category}
                        </p>
                        <h3 className="font-bold text-base">
                          {node.frontmatter.title}
                        </h3>
                        <p className="line-clamp-3 text-gray-200">
                          {node.frontmatter.description || node.excerpt}
                        </p>
                        <div className="flex gap-4 justify-between w-full pt-6 font-semibold">
                          <p>{formatDate(node.frontmatter.date)}</p>
                          <Link
                            to={node.fields.slug}
                            className="text-[#09DE4C] justify-center items-center flex gap-2 font-semibold"
                          >
                            Read More <Arrow className="w-3 h-auto mt-1" />
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </section>
        </motion.div>


        <motion.div
          ref={faq.ref}
          initial={{ y: 100, opacity: 0 }}
          animate={faq.controls}
          transition={{ duration: 0.5 }}
          className="animated-section md:max-w-screen-lg mx-auto"
        >
          <section
            className="flex gap-4 p-4  my-12 rounded-3xl relative"
            style={{
              background: 'linear-gradient(180deg, rgba(35, 39, 46, 0) 0%, rgba(35, 39, 46, 0.00838519) 11.79%, rgba(35, 39, 46, 0.0324148) 21.38%, rgba(35, 39, 46, 0.0704) 29.12%, rgba(35, 39, 46, 0.120652) 35.34%, rgba(35, 39, 46, 0.181481) 40.37%, rgba(35, 39, 46, 0.2512) 44.56%, rgba(35, 39, 46, 0.328119) 48.24%, rgba(35, 39, 46, 0.410548) 51.76%, rgba(35, 39, 46, 0.4968) 55.44%, rgba(35, 39, 46, 0.585185) 59.63%, rgba(35, 39, 46, 0.674015) 64.66%, rgba(35, 39, 46, 0.7616) 70.88%, rgba(35, 39, 46, 0.846252) 78.62%, rgba(35, 39, 46, 0.926281) 88.21%, #23272E 100%)'
            }}
          >
            <div className="py-12 pt-24 px-8 pb-[10rem] md:pb-0">
              <h3 className="text-4xl font-bold">
                Have problems with <br />
                security and scaling? <br />
                Let’s talk
              </h3>
              <Button className="mt-8 bg-stone-50 text-stone-950 rounded-xl w-fit text-xl font-bold px-4 py-6 gap-2 hover:bg-green-600 my-12" asChild>
                <a href="https://cal.com/securemyorg/firstmeet">
                  <Rocket2 className="w-6 h-8" />
                  Book a Call
               </a>
              </Button>
            </div>
            <StaticImage src="../images/objek.png" alt="object" className="md:w-[28rem] w-[15rem]  h-auto absolute -bottom-[0rem] -right-0" />
            {/* <Objek /> */}
          </section>

        </motion.div>
      </div>
    </Layout>
  );
};

// Add this query below your component
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            category
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Secure My Org - Enterprise Security in 3 Simple Steps</title>;
