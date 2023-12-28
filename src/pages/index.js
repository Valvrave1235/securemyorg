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



const IndexPage = () => {
  return (
    <Layout >
      <section className="flex flex-col gap-4 bg-stone-300">
        <h2>
          We help companies <br />
          scale while being secure
        </h2>  
        <p>
          Hi, we’re a cyber security and devops agency which helps fast paced
          startups scale. ada berubah
        </p>
        <button>
          <Rocket />
          Book a Call
        </button>
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
          
        </h2>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>Alexander</h2>
            <p>Product Marketeer Growth, Twillio</p>
          </div>
          <p>We have been using Synchrowork for a few months now, and we have already seen a significant improvement in our team productivity. The ability to assign tasks, set deadlines, and track progress has been invaluable to us. We are also really impressed with the collaboration features. The ability to share files, leave comments, and chat with team members in real time has made it much easier for us to work together on projects. We are very happy with the Synchrowork and would highly recommend it to any team that is looking to improve their productivity and efficiency</p>
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
