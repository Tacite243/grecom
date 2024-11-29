'use client';

import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Provider } from "react-redux";
import store from "../store";

import CallToAction from "@/components/callToAction";
import TestimonialsSection from "@/components/tesitmonials";
// import Pricing from "@/components/pricing";
// import Faq from "@/components/faq";
// import Team from "@/components/team";
import RecentPosts from "@/components/posts";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Features from "@/components/features";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

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

    // Simulate a loading process
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.add('loaded'); // Hide the loader
    }, 1500); // Loader duration in ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      {loading && (
        <div id="preloader">
          <div className="spinner"></div>
        </div>
      )}
      <main className="main">
        <Hero />
        <About />
        <Features />
        <CallToAction />
        <Services />
        <Portfolio />
        <TestimonialsSection />
        <RecentPosts />
        <Contact />
      </main>
      <Footer />
    </Provider>
  );
}
