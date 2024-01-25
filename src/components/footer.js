// src/components/Footer.js
import React from 'react';
import { Link } from 'gatsby';
import { Button } from "./ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const Footer = () => {
    const form = useForm ({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }


    return (
        <footer className="bg-[#19191B] text-white p-10">
            <div className="md:max-w-screen-lg lg:max-w-screen-xl lg:px-12 mx-auto flex flex-col md:flex-row justify-between items-start">
                {/* Links Section */}
                <div className='py-12 md:py-0'>
                    <h5 className="text-xl font-bold mb-4">Useful Links</h5>
                    <ul className="space-y-3">
                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="/pricing" className="hover:underline">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy" className="hover:underline">Privacy policy</Link>
                        </li>
                        <li>
                            <Link to="/terms" className="hover:underline">Terms and condition</Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="md:w-1/3">
                    <h5 className="text-xl font-bold mb-4">Get industry insight and how to be secure in your inbox</h5>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex mt-4">
                            <FormField
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="name@email.com" {...field} className="rounded-l-xl bg-stone-50 placeholder:text-stone-400 text-stone-950" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="flex bg-[#00ab36] hover:bg-green-600 text-white p-2 rounded-r-xl border-2 border-[#00ab36] hover:border-green-600">
                                Subscribe
                            </Button>
                        </form>
                    </Form>
                    <div className='flex flex-col gap-1 pt-8'>
                        <h3 className='font-bold m-0'>Address</h3>
                        <p>Bengaluru, 560102, Karnataka, India</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
