import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";

const FramerMotion = dynamic(() => import("framer-motion"), { ssr: false });

export default function Home() {
  const [motion, setMotion] = useState(null);
  useEffect(() => {
    import("framer-motion").then((mod) => setMotion(mod.motion));
  }, []);

  if (!motion) return null;

  const services = [
    { title: "Concrete Foundations", description: "Durable and expertly crafted foundations for commercial buildings and industrial projects.", image: "/concrete-foundation.jpg" },
    { title: "Parking Lots & Driveways", description: "High-quality concrete parking lots and driveways built to last.", image: "/parking-lot.jpg" },
    { title: "Sidewalks & Walkways", description: "Safe, smooth, and durable concrete sidewalks for commercial spaces.", image: "/sidewalks.jpg" },
    { title: "Industrial Concrete Work", description: "Specialized concrete solutions for warehouses, factories, and more.", image: "/industrial-concrete.jpg" },
  ];

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Head>
        <title>Just Concrete Pros - Commercial Concrete Solutions</title>
        <meta name="description" content="Premium commercial concrete services for property managers and real estate developers." />
      </Head>
      
      <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50 shadow-lg">
        <h1 className="text-2xl font-bold">Just Concrete Pros</h1>
        <div>
          <Link href="/about"><span className="mx-4 hover:text-yellow-400 cursor-pointer">About</span></Link>
          <Link href="/services"><span className="mx-4 hover:text-yellow-400 cursor-pointer">Services</span></Link>
          <Link href="/contact"><span className="mx-4 hover:text-yellow-400 cursor-pointer">Contact</span></Link>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative z-10 p-5">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Just Concrete Pros</h1>
          <p className="mt-4 text-xl text-gray-200">"Solid Foundations, Lasting Impressions"</p>
          <Button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-lg">Get a Free Quote</Button>
        </motion.div>
      </section>

      <section className="py-16 px-5 md:px-20">
        <h2 className="text-4xl font-semibold text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
              {service.image && <Image src={service.image} alt={service.title} width={500} height={300} className="rounded-md" priority />}
              <h3 className="mt-4 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-4xl font-semibold">Get in Touch</h2>
        <p className="mt-4 text-lg">Contact us for a free consultation on your commercial concrete project.</p>
        <Button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-lg">Contact Us</Button>
      </section>
    </div>
  );
}
