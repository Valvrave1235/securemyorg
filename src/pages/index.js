import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import '../styles/global.css'


import bgGreen from "../images/bg-green.png"
import Rocket from "../assets/rocket.svg"
import LogoElastic from "../assets/logo_elastic.svg"
import LogoFramer from "../assets/logo_framer.svg"
import LogoPipedrive from "../assets/logo_pipedrive.svg"
import LogoGitlab from "../assets/logo_gitlab.svg"
import LogoMonday from "../assets/logo_monday.svg"
import LogoBooking from "../assets/logo_booking.svg"
import LogoDescript from "../assets/logo_descript.svg"
import LogoDiscord from "../assets/logo_discord.svg"
import LogoMaze from "../assets/logo_maze.svg"
import LogoUpwork from "../assets/logo_upwork.svg"
import LogoWealthsimple from "../assets/logo_wealthsimple.svg"
import LogoBraze from "../assets/logo_braze.svg"
import View from "../assets/view.svg"
import Follow from "../assets/follow.svg"
import Duration from "../assets/duration.svg"
import Percentation from "../assets/percentation.svg"
import Layout from "../components/layout";

import { Button } from "@/components/ui/button"

import Shield from "../assets/shield.svg"
import Key from "../assets/key.svg"
import Contact from "../assets/contact.svg"
import Video from "../assets/video.svg"
import Number1 from "../assets/number1.svg"
import Number2 from "../assets/number2.svg"
import Number3 from "../assets/number3.svg"
import Client from "../assets/client.svg"
import Log from "../assets/log.svg"
import Tabel from "../assets/tabel.svg"
import AlexBeluchi from "../images/alex_beluchi.png"
import Alexander from "../images/alexander.png"
import Mark from "../images/mark.png"
import MarthaAndrews from "../images/martha_andrews.png"
import Arrow from "../assets/arrow.svg"
import { Link } from "gatsby";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const IndexPage = () => {
  return (
    <Layout >
      <section className="flex flex-col gap-4 ">
        <h2 className="text-6xl font-bold">
          We help companies <br />
          scale while being secure
        </h2>
        <p>
          Hi, we’re a cyber security and devops agency which helps fast paced
          startups scale.
        </p>
        <Button>
          <Rocket />
          Book a Call
        </Button>
        <StaticImage src="../images/bg-green.png" alt="A dinosaur" />
      </section>
      <hr />
      <section>
        <h2 className="text-4xl font-bold">
          You’re  in safe hands, some of the <br />
          <span className="text-[#09DE4C]">companies</span> that have trusted us
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <LogoElastic />
            <LogoFramer />
            <LogoPipedrive />
            <LogoGitlab />
            <LogoMonday />
            <LogoBooking />
          </div>
          <div className="flex gap-4">
            <LogoDescript />
            <LogoDiscord />
            <LogoMaze />
            <LogoUpwork />
            <LogoWealthsimple />
            <LogoBraze />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div>
            <View className="w-120 h-120" />
            {/* Vulnerabilities Found */}
          </div>
          <div className="flex px-8 w-120 h-120">
            <Follow />
            {/* Private Data Saved */}
          </div>
          <div className="flex px-8 w-120 h-120">
            <Duration />
            {/* For First Critical Bug */}
          </div>
          <div className="flex pX-8 w-120 h-120">
            <Percentation />
            {/* Recurring Client */}
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-4xl font-bold">
          Our services for <br />
          your <span className="text-[#09DE4C]">cyber security</span>
        </h2>
        <div className="flex flex-col md:flex-row flex justify-center">
          <div>
            <Shield />
            <h3 className="text-2xl font-bold">
              Cloud Security
            </h3>
            <p>
              We help you secure your AWS and GCP cloud while <br />
              automating your cloud security using terraform.
            </p>
          </div>
          <div>
            <Key />
            <h3 className="text-2xl font-bold">
              VAPT
            </h3>
            <p>
              We uncover and fix security vulnerabilities of mobile <br />
              and web, while providing solutions to mitigate risk.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex justify-center">
          <div>
            <Contact />
            <h3 className="text-2xl font-bold">
              Security Training
            </h3>
            <p>
              Equip your team with the knowledge and skills to<br />
              safeguard company data and applications.
            </p>
          </div>
          <div>
            <Video />
            <h3 className="text-2xl font-bold">
              Security Content Creation
            </h3>
            <p>
              We craft engaging security demos, insightful blogs, and <br />
              ractical tutorials for our clients.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-4xl font-bold">
          The world moves fast, we <br />
          keep pace. Cut through the <br />
          noise with our <span className="text-[#09DE4C]">process</span>
        </h3>
        <div className="flex">
          <div>
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2">2</span>
                  Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                </span>
              </li>
              <li className="flex items-center">
                <span className="me-2">3</span>
                Confirmation
              </li>
            </ol>
            <Number1 />
            <h4 className="text-[#09DE4C] font-bold">
              Discover
            </h4>
            <p>
              Starting with the initial phase of getting to know <br />
              about the project, here we set expectations and <br />
              what are the tasks that needed to be done for the <br />
              client.
            </p>
            <Number2 />
            <h4 className="text-[#09DE4C] font-bold">
              Start Securing
            </h4>
            <p>
              We start assessing the tasks that need to be done <br />
              and try to meet the ends by doing the testing/  <br />
              content.
            </p>
            <Number3 />
            <h4 className="text-[#09DE4C] font-bold">
              Report Submission
            </h4>
            <p>
              After the tasks is completed we check with the <br />
              clients with all the to-do’s and take a sign-off by <br />
              submitting the final report.
            </p>
          </div>
          <div className="flex flex-col">
            <Client />
            <Log />
            <Tabel />
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-4xl">
          People love us. See what they <br />
          have to <span className="text-[#09DE4C] font-bold">say about us</span>
        </h2>
        <div className="flex flex-wrap gap-8 py-12">
          <Card className="bg-[#19191B] border-[#343B46]">
            <CardHeader className="flex flex-row gap-4 ">
              <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                <StaticImage src="../images/alex_beluchi.png" alt="alex buchi" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl" >Alex Beluchi</h3>
                  <p className="text-sm text-stone-300">Product Marketeer Growth, Twillio</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-stone-50">
              <p>Synchrowork has been a lifesaver for our team. <br />
                Before we started using it, we were struggling to <br />
                keep track of our tasks and deadlines. Now, <br />
                everything is organized and centralized, and we can <br />
                easily see what everyone is working on. This has <br />
                helped us to be more efficient and productive. We <br />
                are also really impressed with the customer <br />
                support. They are always quick to respond to our <br />
                questions and help us to get the most out of the <br />
                product.</p>
            </CardContent>
          </Card>
          <div className="flex flex-wrap gap-8 py-12">
            <Card className="bg-[#19191B] border-[#343B46]">
              <CardHeader className="flex flex-row gap-4 ">
                <CardTitle className="flex flex-row gap-4 text-stone-50 ">
                  <StaticImage src="../images/alex_beluchi.png" alt="alex buchi" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl" >Alex Beluchi</h3>
                    <p className="text-sm text-stone-300">Product Marketeer Growth, Twillio</p>
                  </div>
                </CardTitle>
                <CardHeader />
                <CardContent className="text-stone-50">
                  <p>Synchrowork has been a lifesaver for our team. <br />
                    Before we started using it, we were struggling to <br />
                    keep track of our tasks and deadlines. Now, <br />
                    everything is organized and centralized, and we can <br />
                    easily see what everyone is working on. This has <br />
                    helped us to be more efficient and productive. We <br />
                    are also really impressed with the customer <br />
                    support. They are always quick to respond to our <br />
                    questions and help us to get the most out of the <br />
                    product.</p>
                </CardContent>
            </Card>
          </div>
          <div>
            <div>
              <StaticImage src="../images/martha_andrews.png" alt=" martha andrews" />
            </div>
            <div>
              <h3>Martha Andrews</h3>
              <p>Product Marketeer Growth, Twillio</p>
            </div>
            <p>Since we started using Synchrowork, our team <br />
              productivity has increased by 20%. The easy-to- <br />
              use interface and powerful features make it easy <br />
              for us to manage our tasks, collaborate with each <br />
              other, and track our progress. We are very happy <br />
              with the results and would highly recommend this <br />
              product to other teams.</p>
          </div>
          <div>
            <div>
              <StaticImage src="../images/mark.png" alt="mark" />
            </div>
            <div>
              <h3>Mark</h3>
              <p>Product Marketeer Growth, Twillio</p>
            </div>
            <p>We have been using the [team management <br />
              product name] for over a year now, and we love it! <br />
              It has helped us to improve our team <br />
              communication and collaboration, and it has made <br />
              it much easier for us to track our progress and <br />
              meet our deadlines. We are especially impressed <br />
              with the task management features. The ability to <br />
              assign tasks, set due dates, and track progress has <br />
              been invaluable to us. We would highly recommend <br />
              the [team management product name] to any team <br />
              that is looking to improve their productivity and <br />
              efficiency</p>
          </div>

          <div>
            <div>
              <StaticImage src="../images/alexander.png" alt="alexander" />
            </div>
            <div>
              <h3>Alexander</h3>
              <p>Product Marketeer Growth, Twillio</p>
            </div>
            <p>We have been using Synchrowork for a few months <br />
              now, and we have already seen a significant <br />
              improvement in our team productivity. The ability to <br />
              assign tasks, set deadlines, and track progress has <br />
              been invaluable to us. We are also really impressed <br />
              with the collaboration features. The ability to share <br />
              files, leave comments, and chat with team members <br />
              in real time has made it much easier for us to work <br />
              together on projects. We are very happy with the <br />
              Synchrowork and would highly recommend it to any <br />
              team that is looking to improve their productivity <br />
              and efficiency</p>
          </div>
          <div>
            <div>
              <StaticImage src="../images/martha_andrews.png" alt="martha andrews" />
            </div>
            <div>
              <h3>Martha Andrews</h3>
              <p>Product Marketeer Growth, Twillio</p>
            </div>
            <p>We have been using the [team management <br />
              product name] for a few months now, and we are <br />
              very happy with the results. It has helped us to <br />
              organize our tasks and projects, and it has made <br />
              it much easier for us to collaborate with each <br />
              other. We are also impressed with the reporting <br />
              features. We are now able to get real-time <br />
              insights into our team's performance, which has <br />
              helped us to make better decisions</p>
            <Link href="Martha Andrews" className="flex gap-4  items-center justify-center">
              Read Case Study
              <Arrow />
            </Link>
          </div>
          <div>
            <div>
              <StaticImage src="../images/alex_beluchi.png" alt="alex buchi" />
            </div>
            <div>
              <h3>Alex Beluchi</h3>
              <p>Product Marketeer Growth, Twillio</p>
            </div>
            <p>The [team management product name] has been a <br />
              great investment for our team. It has helped us to <br />
              improve our communication and collaboration, and <br />
              it has made it much easier for us to track our <br />
              progress and meet our deadlines. We are <br />
              especially impressed with the user interface. It is <br />
              very easy to use and navigate. We would highly <br />
              recommend this product to any team looking to <br />
              improve their productivity and efficiency</p>
            <Link href="Alex Buchi" className="flex gap-4  items-center justify-center">
              Read Case Study
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold">
          We believe in giving back to the society. <br />
          Check out our <span className="text-[#09DE4C]">blogs and articles</span>
        </h2>
      </section>
      <section>
        <div>
          <img src="" alt="" />
          <div>
            <div>
              <h4>Management</h4>
              <h2>How to choose the right management tool for your business</h2>
              <p>Choosing the right manakgement tool for your business can be a daunting task, especially when you are new to this field. With so many options available in the market, it can be confusing to select the one that fits your requirements. This is where research and understanding come into play. In this blog, we will discuss some key factors that you should consider while choosing the right management tool for your business.</p>
            </div>
            <div>
              <p>10th Dec, 2023</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <h3 className="text-3xl font-bold capitalize ">faq</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
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
              Yes. It's animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
