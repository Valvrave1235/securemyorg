import React from 'react';
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react';
import Layout from '../components/layout';


const PricingCard = ({ title, price, features, buttonText }) => {
    return (
        <Card className="rounded-xl border border-gray-500">
            <CardHeader>
                <CardDescription>{title}</CardDescription>
                <CardTitle className="flex gap-3 items-end pt-2">
                    <div className='text-5xl text-green-500 font-extrabold'>${price}</div>
                    <p className="text-sm">For 10 assets</p>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="my-4">
                    {features.map((feature, index) => (
                        <li key={index} className="text-gray-300 flex items-start gap-4">
                            <div className='bg-purple-500 text-stone-950 w-fit rounded-full p-2'>
                                <Check size={10} />
                            </div>
                            <div>{feature}</div>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button className="mt-4 bg-green-600 text-white rounded py-2 px-4 hover:bg-green-700">
                    {buttonText}
                </Button>
            </CardFooter>
        </Card>
    );
};

const PricingPage = () => {
    return (
        <Layout >
            <div className="container mx-auto py-32 pt-52">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-6xl font-extrabold text-center mb-8">Simple Transparent <span className='text-green-400'>Pricing</span></h1>

                    <p className='text-center mb-24'>Plans that are crafted just for you</p>

                    {/* Pricing Cards Here */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <Card className="rounded-xl border border-gray-500">
                            <CardHeader>
                                <CardDescription >VAPT</CardDescription>
                                <CardTitle className="flex gap-3 items-end pt-2">
                                    <div className='text-5xl m-0 text-green-500 font-extrabold text-green '>$5000</div>
                                    <p className="text-sm">For 10 assets</p>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>


                                <ul className="my-4">
                                    <li className="text-gray-300 flex items-start gap-4">
                                        <div className='bg-purple-500 text-stone-950 w-fit rounded-full p-2'>
                                            <Check size={10}/>
                                        </div> 
                                        <div>Web Application Security - OWASP top 10, Business logic issues and more.</div>
                                        </li>
                                    {/* ... other features */}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="mt-4 bg-green-600 text-white rounded py-2 px-4 hover:bg-green-700">Book A Call</Button>
                            </CardFooter>
                        </Card>

                        <PricingCard
                            title="Secure Your Cloud"
                            price="Contact Us"
                            features={[
                                "Amazon Web Services (AWS) - IAM, S3, RDS, SQS, Lambda, Cloudtrail logs etc",
                                "Alibaba Cloud",
                                "Google Cloud Platform (GCP)"
                            ]}
                            buttonText="Book A Call"
                        />

                        {/* Secure Your Cloud Card */}
                        <div className="bg-black p-6 rounded-lg shadow-lg">
                            <h3 className="text-green-500 text-lg">Secure Your Cloud</h3>
                            <p className="text-2xl font-bold text-white my-4">Let's Chat</p>
                            <ul className="my-4">
                                <li className="text-gray-300">Amazon Web Services (AWS) - IAM, S3, RDS, SQS, Lambda, Cloudtrail logs etc</li>
                                {/* ... other services */}
                            </ul>
                            <button className="mt-4 bg-green-600 text-white rounded py-2 px-4 hover:bg-green-700">Book A Call</button>
                        </div>

                        {/* Cyber Security Partner Card */}
                        <div className="bg-black p-6 rounded-lg shadow-lg">
                            <h3 className="text-green-500 text-lg">Cyber Security Partner</h3>
                            <p className="text-2xl font-bold text-white my-4">Let's Chat</p>
                            <ul className="my-4">
                                <li className="text-gray-300">Full Time resource for expanding your security engineering</li>
                                {/* ... other details */}
                            </ul>
                            <button className="mt-4 bg-green-600 text-white rounded py-2 px-4 hover:bg-green-700">Book A Call</button>

                        </div>

                    </div>

                    <div className="bg-black bg-opacity-80 p-8 rounded-lg">
                        <h2 className="text-3xl font-bold mb-4">FAQ</h2>
                        <Accordion defaultValue="item-1" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="font-semibold">
                                    We're launching our new Feature/Application/Infrastructure. How do I know we're secure?
                                </AccordionTrigger>
                                <AccordionContent className=" p-4 rounded">
                                    We'll audit your new feature/application/infrastructure to ensure it meets current security standards and provide you with a comprehensive report.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="font-semibold">
                                    We want continuous monitoring on our critical assets. Can you provide some solution around it?
                                </AccordionTrigger>
                                <AccordionContent className=" p-4 rounded">
                                    Yes, our continuous monitoring solutions can keep track of your assets and alert you to any security issues in real-time.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="font-semibold">
                                    Can you look at our Web3 App?
                                </AccordionTrigger>
                                <AccordionContent className=" p-4 rounded">
                                    Absolutely, our team is well-versed in Web3 applications and can provide a full security audit for you.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="font-semibold">
                                    Can you help us evaluate a vendor we're onboarding?
                                </AccordionTrigger>
                                <AccordionContent className=" p-4 rounded">
                                    We can assist with vendor evaluations to ensure they meet your security requirements and industry standards.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger className="font-semibold">
                                    What all do you require to start a pentest?
                                </AccordionTrigger>
                                <AccordionContent className=" p-4 rounded">
                                    To begin a penetration test, we need a list of assets, your authorization, and a timeline to conduct the tests.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </motion.div>
            </div>
        </Layout>
    );
};

export default PricingPage;
