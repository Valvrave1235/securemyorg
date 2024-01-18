import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { StaticImage } from 'gatsby-plugin-image';
import { Check } from 'lucide-react';
import Layout from '../components/layout';
import { motion, useMotionValue, useTransform, useHover } from 'framer-motion';


// Animation variants for the hover effect

const PricingCard = ({ title, price, features, footnote, buttonText, link }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const maskImage = useTransform(
        [mouseX, mouseY],
        ([latestX, latestY]) =>
            `radial-gradient(circle at ${latestX}px ${latestY}px, rgba(255,255,255,0.8) 0%, rgba(0,0,0,0) 100%)`
    );

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
    };

    return (

       <motion.a 
            className="rounded-xl border border-gray-500 flex flex-col justify-between h-full relative overflow-hidden"
            href={link}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pricing-card-bg absolute inset-0 w-full h-full"
                style={{ maskImage, background: 'linear-gradient(to right, #204d2e, #303428)' }}
            />

            {/* Content of the card */}
            <div className="p-4 z-10 relative">
                <div className="p-4">
                    <h3 className="text-base mt-4 font-light">{title}</h3>
                    <div className="flex gap-3 items-end pt-2">
                        <div className='text-5xl m-0 text-[#09DE4C] font-bold'>
                            {isNaN(price) ? price : `$${price}`}
                        </div>
                        {footnote && <p className="text-sm">{footnote}</p>}
                    </div>
                </div>
                <div className="p-4 flex-grow z-10 relative">
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index} className="text-gray-300 flex text-sm font-medium items-start my-4 gap-3">
                                <div className='bg-purple-500 text-stone-950 w-fit rounded-full p-1'>
                                    <Check size={10} />
                                </div>
                                <div>{feature}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="p-4 z-10 relative">
                <Button className="border border-[#09DE4C] bg-stone-900 justify-center w-full rounded-xl text-white py-2 px-4 hover:bg-[#09DE4C]">
                    {buttonText}
                </Button>
            </div>

        </motion.a>

    );
};

const PricingPage = () => {
    return (
        <Layout >
            <div className="container mx-auto md:max-w-screen-lg  lg:max-w-screen-xl text-white py-32 pt-52">
                <h1 className="text-6xl font-bold text-center mb-6">Simple Transparent <span className='text-[#09DE4C]'>Pricing</span></h1>
                <p className='mb-12 text-center'>Plans that are crafted just for you</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    {/* Pricing cards */}
                    <PricingCard
                        title="VAPT"
                        price="5000"
                        features={[
                            "Web Application Security - OWASP top 10, Business logic issues and more.",
                            "Mobile (Android & iOS) & API Security (GraphQL, REST, SOAP)",
                            "Get report in 2 weeks",
                            "Lifetime access to report portal"
                        ]}
                        footnote="For 10 assets"
                        buttonText="Book A Call"
                        link="https://cal.com/securemyorg/book-a-pentest"
                    />

                    <PricingCard
                        title="Secure Your Cloud"
                        price="Let's Chat"
                        features={[
                            "Amazon Web Services (AWS) - IAM, S3, RDS, SQS, Lambda, Cloudtrail logs etc",
                            "Alibaba Cloud",
                            "Google Cloud Platform (GCP)"
                        ]}
                        buttonText="Book a Call"
                        link="https://cal.com/securemyorg/secure-your-cloud"
                    />

                    <PricingCard
                        title="Cyber Security Partner"
                        price="Let's Chat"
                        features={[
                            "Full-Time resource for expanding your security engineering",
                            "Experienced professional in public cloud — AWS, GCP, Alibaba and Azure.",
                            "Proficient with bash, python and golang for building custom automation."
                        ]}
                        buttonText="Book a Call"
                        link="https://cal.com/securemyorg/cybersecurity-partner"
                    />
                </div>

                <div className="my-24">
                    <h2 className="text-3xl font-bold mb-4">FAQ</h2>
                    <Accordion  collapsible className="my-12">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="font-semibold">
                                We're launching our new Feature/Application/Infrastructure. How do I know we're secure?
                            </AccordionTrigger>
                            <AccordionContent className="">
                                We'll audit your new feature/application/infrastructure to ensure it meets current security standards and provide you with a comprehensive report.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="font-semibold">
                                We want continuous monitoring on our critical assets. Can you provide some solution around it?
                            </AccordionTrigger>
                            <AccordionContent className="">
                                Yes, our continuous monitoring solutions can keep track of your assets and alert you to any security issues in real-time.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="font-semibold">
                                Can you look at our Web3 App?
                            </AccordionTrigger>
                            <AccordionContent className="">
                                Absolutely, our team is well-versed in Web3 applications and can provide a full security audit for you.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger className="font-semibold">
                                Can you help us evaluate a vendor we're onboarding?
                            </AccordionTrigger>
                            <AccordionContent className="">
                                We can assist with vendor evaluations to ensure they meet your security requirements and industry standards.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger className="font-semibold">
                                What all do you require to start a pentest?
                            </AccordionTrigger>
                            <AccordionContent className="">
                                To begin a penetration test, we need a list of assets, your authorization, and a timeline to conduct the tests.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>
        </Layout>
    );
};

export default PricingPage;

export const Head = () => <title>Secure My Org - Enterprise Security in 3 Simple Steps</title>;