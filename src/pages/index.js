import React, { useEffect, useState } from "react";
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image";
import "../styles/global.css";
import { useInView } from "react-intersection-observer";

import { graphql } from "gatsby";
import { Button } from "@/components/ui/button";

import bgGreen from "../images/bg-green.png";
import bgGreen1 from "../images/bg-green_1.png"
import bgGreen2 from "../images/bg-green_2.png"
import bgGreen3 from "../images/bg-green_3.png"
import Hex from "../images/hex.png"
import Magenta from "../images/magenta.png"
import purple from "../images/purple.png"
import Yellow from "../images/yellow.png"
import bgBlueMagenta from "../images/bg-blue_magenta.png"
import bgBlueSky from "../images/bg-blue_sky.png"
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
import AlexBeluchi from "../images/alex_beluchi.png";
import Alexander from "../images/alexander.png";
import Mark from "../images/mark.png";
import MarthaAndrews from "../images/martha_andrews.png";
import Arrow from "../assets/arrow.svg";
import ArrowRight from "../assets/arrow_right.svg";
import Agency from "../blog/agency.png";
import Freelance from "../blog/freelance.png";
import Management from "../blog/management.png";
import RightDisable from "../assets/right_disable.svg";
import RightEnable from "../assets/right_enable.svg";
import LeftDisable from "../assets/left_disable.svg";
import LeftEnable from "../assets/left_enable.svg";
import Rocket2 from "../assets/rocket_2.svg";
import Objek from "../images/objek.png"

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
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isScrolled) {
        setIsScrolled(true);
        controls.start({ y: 0, opacity: 1 });
      } else if (window.scrollY <= 50 && isScrolled) {
        setIsScrolled(false);
        controls.start({ y: -100, opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, isScrolled]);

  return (
    <Layout>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={heroControls}
        transition={{ duration: 0.5 }}
      // ... other props
      >
        <section className="flex flex-col gap-4 relative py-40 pt-[15rem] text-center justify-center items-center">
          <div className="z-10 relative flex flex-col justify-center items-center gap-4">
            <h2 className="text-6xl font-bold w-10/12 text-transparent bg-clip-text bg-text-gradient ">
              We help companies scale while being secure
            </h2>
            <p className="mt-4 text-transparent bg-clip-text bg-text-gradient ">
              Hi, we’re a cyber security and devops agency which helps fast
              paced startups scale.
            </p>
            <Button className="mt-8 bg-stone-50 text-stone-950  rounded-xl w-fit text-xl font-bold px-4 py-6 gap-2 hover:bg-green-600 my-12">
              <Rocket className="w-6 h-8" />
              Book a Call
            </Button>
          </div>
          <StaticImage
            src="../images/bg-green.png"
            className="absolute top-0 z-0"
            alt="A dinosaur"
          />
        </section>
      </motion.div>
      <hr className=" border-white border-b-4" />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <section className="py-24 flex flex-col gap-14">
          <h2 className="text-4xl font-bold">
            You’re in safe hands, some of the <br />
            <span className="text-[#09DE4C]">companies</span> that have trusted
            us
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-8">
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
            </div>
          </div>
          <div className="flex flex-col md:flex-row pt-24">
            <div className="flex pr-12 w-120 h-120">
              <View className="w-120 h-120 " />
              {/* Vulnerabilities Found */}
            </div>
            <div className="flex px-12 w-120 h-120">
              <Follow />
              {/* Private Data Saved */}
            </div>
            <div className="flex px-12 w-120 h-120">
              <Duration />
              {/* For First Critical Bug */}
            </div>
            <div className="flex px-12 w-120 h-120">
              <Percentation />
              {/* Recurring Client */}
            </div>
          </div>
        </section>
      </motion.div>
      <hr className=" border-white border-b-4" />
      <section className="bg-transparent text-gray-100 py-24 flex flex-col gap-4">
        <h2 className="text-4xl font-extrabold w-8/12 py-8">
          Our services for <br />
          your <span className="text-[#09DE4C]">cyber security</span>
        </h2>

        <div className="grid grid-cols-2 gap-4 text-center">
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
              Equip your team with the knowledge and skills to safeguard company
              data and applications.
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
      <section className="py-24 flex flex-col gap-4">
        <h3 className="text-4xl font-bold">
          The world moves fast, we keep pace. Cut through the noise with our{" "}
          <span className="text-[#09DE4C]">process</span>
        </h3>
        <div className="flex gap-4">
          <div className="flex flex-col gap-12 py-12 ">
            <div className="flex gap-4">
              <Number1 className="w-1/2" />
              <div className="flex flex-col w-12/12 ">
                <h4 className="text-[#09DE4C] font-bold">Discover</h4>
                <p>
                  Starting with the initial phase of getting to know about the
                  project, here we set expectations and what are the tasks that
                  needed to be done for the client.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Number2 className="w-1/2" />
              <div className="flex flex-col w-12/12 ">
                <h4 className="text-[#09DE4C] font-bold">Start Securing</h4>
                <p>
                  We start assessing the tasks that need to be done and try to
                  meet the ends by doing the testing/ content.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Number3 className="w-1/2" />
              <div className="flex flex-col w-12/12 ">
                <h4 className="text-[#09DE4C] font-bold">Report Submission</h4>
                <p>
                  After the tasks is completed we check with the clients with
                  all the to-do’s and take a sign-off by submitting the final
                  report.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="rounded-xl p-8 bg-[#19191B] border-[#343B46] flex flex-col gap-4 justify-center items-center ">
              <Client className="w-300 h-300" />
            </div>
            <div className="rounded-xl p-8 bg-[#19191B] border-[#343B46] flex flex-col gap-4 justify-center items-center ">
              <Log className="w-300 h-300" />
            </div>
            <div className="rounded-xl p-8 bg-[#19191B] border-[#343B46] flex flex-col gap-4 justify-center items-center ">
              <Tabel className="w-300 h-300" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-4xl">
          People love us. See what they have to{" "}
          <span className="text-[#09DE4C] font-bold">say about us</span>
        </h2>
        <section className="grid grid-cols-3 gap-8 py-24">
          <Card className="bg-[#19191B] border-[#343B46]">
            <CardHeader className="flex flex-row gap-4 ">
              <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                <StaticImage
                  src="../images/alex_beluchi.png"
                  alt="alex beluchi"
                />
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
                Synchrowork has been a lifesaver for our team. Before we started
                using it, we were struggling to keep track of our tasks and
                deadlines. Now, everything is organized and centralized, and we
                can easily see what everyone is working on. This has helped us
                to be more efficient and productive. We are also really
                impressed with the customer support. They are always quick to
                respond to our questions and help us to get the most out of the
                product.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#19191B] border-[#343B46]">
            <CardHeader className="flex flex-row gap-4 ">
              <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                <StaticImage
                  src="../images/martha_andrews.png"
                  alt="martha andrews"
                />
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
                with each other, and track our progress. We are very happy with
                the results and would highly recommend this product to other
                teams
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#19191B] border-[#343B46]">
            <CardHeader className="flex flex-row gap-4 ">
              <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                <StaticImage src="../images/mark.png" alt="mark" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl">Mark</h3>
                  <p className="text-sm text-stone-300">
                    Product Marketeer Growth, Twillio
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-stone-50">
              <p>
                We have been using the [team management product name] for over a
                year now, and we love it! It has helped us to improve our team
                communication and collaboration, and it has made it much easier
                for us to track our progress and meet our deadlines. We are
                especially impressed with the task management features. The
                ability to assign tasks, set due dates, and track progress has
                been invaluable to us. We would highly recommend the [team
                management product name] to any team that is looking to improve
                their productivity and efficiency
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#19191B] border-[#343B46]">
            <CardHeader className="flex flex-row gap-4 ">
              <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                <StaticImage src="../images/alexander.png" alt="alexander" />
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
                impressed with the collaboration features. The ability to share
                files, leave comments, and chat with team members in real time
                has made it much easier for us to work together on projects. We
                are very happy with the Synchrowork and would highly recommend
                it to any team that is looking to improve their productivity and
                efficiency
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#19191B] border-[#343B46]">
            <CardHeader className="flex flex-row gap-4 ">
              <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                <StaticImage
                  src="../images/martha_andrews.png"
                  alt="martha andrews"
                />
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
                We have been using the [team management product name] for a few
                months now, and we are very happy with the results. It has
                helped us to organize our tasks and projects, and it has made it
                much easier for us to collaborate with each other. We are also
                impressed with the reporting features. We are now able to get
                real-time insights into our team's performance, which has helped
                us to make better decisions
              </p>
              <Link
                href="Martha Andrews"
                className="flex gap-4  items-center justify-center"
              >
                Read Case Study
                <Arrow />
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-[#19191B] border-[#343B46]">
            <CardHeader className="flex flex-row gap-4 ">
              <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                <StaticImage
                  src="../images/alex_beluchi.png"
                  alt="alex beluchi"
                />
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
                for our team. It has helped us to improve our communication and
                collaboration, and it has made it much easier for us to track
                our progress and meet our deadlines. We are especially impressed
                with the user interface. It is very easy to use and navigate. We
                would highly recommend this product to any team looking to
                improve their productivity and efficiency
              </p>
              <Link
                href="Alex Beluchi"
                className="flex gap-4  items-center justify-center"
              >
                Read Case Study
                <Arrow />
              </Link>
            </CardContent>
          </Card>
        </section>
      </section>

      {/* <section>
        <h2 className="text-4xl font-bold">
          We believe in giving back to the society. 
          Check out our{" "} <br />
          <span className="text-[#09DE4C]">blogs and articles</span>
        </h2>
        <div>
          <button>
            <LeftDisable />
            <LeftEnable />
          </button>
        </div>
        <div>
          <button>
            <RightDisable />
            <RightEnable />
          </button>
        </div>
      </section> */}

      <section className="py-24">
        <Carousel>
          <div className="flex justify-between w-full items-center ">
            <div>
              <h2 className="text-4xl font-bold ">
                We believe in giving back to the society.
              </h2>
              <h2 className="text-4xl font-bold ">
                Check out our{" "}
                <span className="text-[#09DE4C]">blogs and articles</span>
              </h2>
            </div>
            <div className="flex gap-4 h-full justify-center self-end items-end pt-4 mt-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <CarouselContent className="items-center ">
            {posts.map(({ node }) => (
              <CarouselItem
                className="basis-1/3 text-sm rounded-xl  bg-[#19191B] border-[#343B46] flex flex-col gap-4 justify-center items-center mx-3 h-fit p-0 rounded-t-lg my-12"
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

      <section className="py-24">
        <h3 className="text-3xl font-bold capitalize ">faq</h3>
        <Accordion type="single" collapsible className="w-full py-8">
          <AccordionItem value="item-1">
            <AccordionTrigger>Can you look at our Web3 App ?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section>
        <div>
          <div>
            <h3 className="text-5xl font-bold">
              Have problems with <br />
              security and scaling? <br />
              Let’s talk
            </h3>

            <Button className="mt-8 bg-stone-50 text-stone-950  rounded-xl w-fit text-xl font-bold px-4 py-6 gap-2 hover:bg-green-600 my-12">
              <Rocket2 className="w-6 h-8" />
              Schedule a Call
            </Button>
            <Objek />
          </div>
        </div>
      </section>
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

export const Head = () => <title>Home Page</title>;
