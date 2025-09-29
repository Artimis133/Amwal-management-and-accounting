"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import { ChevronDown } from "lucide-react";
export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div id="home" className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/images/hero.avif')" }}>
  <div className="absolute inset-0 bg-primary/30"></div>

  <div className="relative z-40 flex items-center min-h-screen px-6 pt-20">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-3xl text-left">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-hero-slide-up">
          Trusted accounting 
          <br />
          <span className="text-accent animate-hero-glow">partner</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-hero-fade-in-delayed">
          Empowering your business with trusted accounting solutions that save you time and money.
        </p>
      </div>
    </div>
  </div>

  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
    <ChevronDown className="text-white w-8 h-8" />
  </div>
</div>


      {/* Sections */}
      <Services />
      <About />
      <Contact />

      <Footer />
    </div>
  );
}
