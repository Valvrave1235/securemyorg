import React from "react";
import { GatsbyImage, getImage, getImageData,  } from "gatsby-plugin-image";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import alexBeluchiImage from '../images/alex_beluchi.png';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialCard = ({ name, role, testimonial, children }) => {
    return (
        <Card className="bg-[#19191B] border-[#343B46]">
            <CardHeader className="flex flex-row gap-4">
                <CardTitle className="flex flex-row gap-4 justify-center items-center text-stone-50">
                    <Avatar asChild className="w-14 h-14">
                        {children}
                    </Avatar>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold text-gray-200">{name}</h3>
                        <p className="text-xs">{role}</p>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="text-stone-50">
                <p>{testimonial}</p>
            </CardContent>
        </Card>
    );
};

export default TestimonialCard;