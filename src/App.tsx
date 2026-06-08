import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, Video, Layers, Palette, Film } from 'lucide-react';
import { WordsPullUp, WordsPullUpMultiStyle } from './components/Animations';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
    <div className="text-2xl font-serif italic text-primary">Prisma</div>
    <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest">
      <a href="#about" className="hover:text-primary transition">About</a>
      <a href="#work" className="hover:text-primary transition">Work</a>
      <a href="#lab" className="hover:text-primary transition">Lab</a>
    </div>
    <button className="px-5 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition">
      Contact
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-0"
    >
      <source src="https://assets.mixkit.co/videos/preview/mixkit-cinematic-view-of-a-mountain-valley-4217-large.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/40 z-1" />
    
    <div className="relative z-10 max-w-4xl">
      <WordsPullUp 
        text="Crafting visual narratives that linger in the mind" 
        className="text-5xl md:text-8xl font-serif italic leading-tight"
        asterisk={true}
      />
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-8 text-lg md:text-xl text-gray-300 max-w-xl font-light"
      >
        A specialized production lab focused on high-end color grading, visual effects, and the art of cinematic storytelling.
      </motion.p>
      <motion.button 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-10 flex items-center space-x-3 bg-primary text-black px-8 py-4 rounded-full font-bold group hover:scale-105 transition"
      >
        <span>Join the lab</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
      </motion.button>
    </div>
  </section>
);

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0.5]);

  return (
    <section ref={containerRef} id="about" className="py-32 px-6 md:px-20 bg-black">
      <div className="max-w-5xl mx-auto">
        <WordsPullUpMultiStyle 
          className="text-4xl md:text-7xl font-light leading-snug"
          segments={[
            { text: "I am Marcus Chen, ", style: "text-white" },
            { text: "a self-taught director. ", style: "text-primary italic font-serif" },
            { text: "I have skills in color grading, visual effects, and narrative design.", style: "text-gray-400" }
          ]}
        />
        
        <motion.div style={{ opacity }} className="mt-20 border-t border-white/10 pt-10">
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed italic">
            "The camera is an instrument that teaches people how to see without a camera." 
            <span className="block mt-4 text-sm not-italic uppercase tracking-widest text-primary">— Dorothea Lange</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => (
  <section id="work" className="py-32 px-6 md:px-20 bg-black">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[1200px]">
      {/* Card 1 */}
      <div className="relative rounded-3xl overflow-hidden group col-span-1 md:row-span-2">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-1000"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-ink-flow-in-water-34444-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-10 left-10 p-2">
          <div className="bg-primary text-black p-3 rounded-2xl mb-4 inline-block">
            <Film className="w-8 h-8" />
          </div>
          <h3 className="text-4xl font-serif italic mb-4">Cinematic Finish</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Davinci Resolve Expert</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Custom LUT Development</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#111] rounded-3xl p-10 flex flex-col justify-between border border-white/5 hover:border-primary/30 transition">
        <div className="bg-primary/10 text-primary p-4 rounded-full self-start">
          <Palette className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-3xl font-serif italic mb-4">Aesthetic Vision</h3>
          <p className="text-gray-400 mb-6">Translating brand identity into evocative visual languages through color and texture.</p>
          <div className="flex items-center space-x-2 text-primary font-bold">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#111] rounded-3xl p-10 flex flex-col justify-between border border-white/5 hover:border-primary/30 transition">
        <div className="bg-primary/10 text-primary p-4 rounded-full self-start">
          <Layers className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-3xl font-serif italic mb-4">VFX Integration</h3>
          <p className="text-gray-400 mb-6">Seamlessly blending reality with digital enhancements for a hyper-real aesthetic.</p>
          <div className="flex items-center space-x-2 text-primary font-bold">
            <span>Our process</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="md:col-span-2 bg-primary text-black rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h3 className="text-5xl font-serif italic mb-6">Ready to start a project?</h3>
          <p className="text-black/70 text-xl font-medium">Join the lab and let's create something that resonates.</p>
        </div>
        <button className="mt-8 md:mt-0 bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition shadow-xl">
          Get in touch
        </button>
      </div>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-primary selection:text-black">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
      </main>
      <footer className="py-10 px-6 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 PRISMA PRODUCTION LAB. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default App;
