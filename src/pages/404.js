import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Slot } from "@radix-ui/react-slot";
import Layout from '../components/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen bg-stone-950 text-white">
        <motion.h1
          className="text-7xl mb-3 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Oops!
        </motion.h1>
        <motion.p
          className="text-3xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          The page you're looking for can't be found.
        </motion.p>
        <Link
          to="/"
          className="bg-transparent text-white py-2 px-4 rounded-full  flex  gap-2 border-2 font-semibold hover:bg-green-700 transition duration-300 ease-in-out items-center justify-center border border-green-600 w-fit "
        >
          <span>Go Back Home </span>

        </Link>
       
      </div>
    </Layout>
  );
};

export default NotFoundPage;
