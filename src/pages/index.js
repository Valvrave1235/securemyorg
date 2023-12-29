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
import Key from "../assets/key,svg"
import Contact from "../assets/contact.svg"
import Video from "../assets/video.svg"
import Number1 from "../assets/number1.svg"
import Number2 from "../assets/number2.svg"
import Number3 from "../assets/number3.svg"
import Client from "../assets/client.svg"
import AlexBeluchi from "../images/alex_beluchi.png"
import Alexander from "../images/alexander.png"
import Mark from "../images/mark.png"
import MarthaAndrews from "../images/martha_andrews.png"



const IndexPage = () => {
  return (
    <Layout >
      <section className="flex flex-col gap-4 ">
        <h2>
          We help companies <br />
          scale while being secure
        </h2>  
        <p>
          Hi, we’re a cyber security and devops agency which helps fast paced
          startups scale. ada berubah
        </p>
        <Button>
          <Rocket />
          Book a Call
        </Button>
        <StaticImage src="../images/bg-green.png" alt="A dinosaur" />
      </section>
      <hr />
      <section>
        <h2>
          You’re  in safe hands, some of the <br /> 
          companies that have trusted us
        </h2>
      <LogoElastic /> <LogoFramer /> <LogoPipedrive /> <LogoGitlab /> <LogoMonday /> <LogoBooking />
      <LogoDescript /> <LogoDiscord /> <LogoMaze /> <LogoUpwork /> <LogoWealthsimple /> <LogoBraze />
        <div>
          <View />
          Vulnerabilities Found
        </div>
        <div>
          <Follow />
          Private Data Saved
        </div>
        <div>
          <Duration />
          For First Critical Bug
        </div>
        <div>
          <Percentation />
          Recurring Client
        </div>
      </section>
      <hr />
      <section>
        <h2>
          Our services for <br />
          your cyber security
        </h2>
          <div>
            <Shield />
            <h3>
            Cloud Security
            </h3>
              <p>
              We help you secure your AWS and GCP cloud while <br />
              automating your cloud security using terraform.
              </p>
          </div>
          <div>
            <Key />
            <h3>
            VAPT
            </h3>
              <p>
              We uncover and fix security vulnerabilities of mobile <br />
              and web, while providing solutions to mitigate risk.
              </p>
          </div>
          <div>
            <Contact />
            <h3>
            Security Training
            </h3>
              <p>
              Equip your team with the knowledge and skills to<br />
              safeguard company data and applications.
              </p>
          </div>
          <div>
            <Video />
            <h3>
            Security Content Creation
            </h3>
              <p>
              We craft engaging security demos, insightful blogs, and <br/>
              ractical tutorials for our clients.
              </p>
          </div>
      </section>
      <section>
        <h3>
          The world moves fast, we <br /> 
          keep pace. Cut through the <br />
          noise with our process
        </h3>
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
          <h4>
          Discover
          </h4>
            <p>
            Starting with the initial phase of getting to know <br />
            about the project, here we set expectations and <br />
            what are the tasks that needed to be done for the <br />
            client.
            </p>
          <Number2 />
          <h4>
          Start Securing
          </h4>
            <p>
            We start assessing the tasks that need to be done <br />
            and try to meet the ends by doing the testing/  <br />
            content.
            </p>
          <Number3 />
          <h4>
          Report Submission
          </h4>
            <p>
          After the tasks is completed we check with the <br />
          clients with all the to-do’s and take a sign-off by <br />
          submitting the final report.
          <div>
          <Client />
          </div>
            </p>
      </section>
      <section>
        <h2>
          People love us. See what they <br />
          have to say about us
        </h2>
          <div>
            <div>
            <img src="../images/alex_beluchi.png" alt="A dinosaur" />
            </div>
          <div>
            <h3>Alex Beluchi</h3>
            <p>Product Marketeer Growth, Twillio</p>
          </div>
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
          </div>
          <div>
            <div>
            <img src="../images/martha_andrews.png" alt=" A dinosaur" />
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
            <img src="../images/mark.png" alt="A dinosaur" />
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
            <img src="../images/alexander.png" alt="A dinosaur" />
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
            <img src="../images/martha_andrews.png" alt="A dinosaur" />
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
          <a href="Martha Andrews">Read Case Study</a>
        </div>
        <section>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>Martha Andrews</h2>
            <p>Product Marketeer Growth, Twillio</p>
          </div>
          <p>We have been using Synchrowork for a few months now, and we have already seen a significant improvement in our team productivity. The ability to assign tasks, set deadlines, and track progress has been invaluable to us. We are also really impressed with the collaboration features. The ability to share files, leave comments, and chat with team members in real time has made it much easier for us to work together on projects. We are very happy with the Synchrowork and would highly recommend it to any team that is looking to improve their productivity and efficiency</p>
        </section>
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
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
