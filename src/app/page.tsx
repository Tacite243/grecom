'use client';
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CallToAction from "@/components/callToAction";
import TestimonialsSection from "@/components/tesitmonials";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import Team from "@/components/team";
import RecentPosts from "@/components/posts";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Features from "@/components/features";
import Portfolio from "@/components/portfolio";

export default function Home() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  useEffect(() => {

    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
      delay: 100,
      offset: 200,
    });
  })
  return (
    <>
      <main className="main">
        <Hero />
        <About />
        <Features />
        <CallToAction />
        <Services />
        <Portfolio />
        {/* <Team /> */}
        <TestimonialsSection />
        {/* <Pricing /> */}
        {/* <Faq /> */}
        <RecentPosts />
        <Contact />
      </main>
    </>
  );
}
