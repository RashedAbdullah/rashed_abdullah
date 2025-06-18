"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Twitter, BookOpen, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 80;

    class Particle {
      x;
      y;
      size;
      speedX;
      speedY;
      color;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${Math.floor(
          Math.random() * 100 + 155
        )}, ${Math.floor(Math.random() * 100 + 155)}, 255, 0.8)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      connectParticles();
      requestAnimationFrame(animate);
    }

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(140, 170, 255, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen md:mt-0 mt-16 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Animated Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-900/20 dark:via-indigo-900/10 dark:to-purple-900/20" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:w-1/3 flex justify-center"
          >
            <div className="relative group">
              <div className="relative bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-full p-1">
                <Avatar className="h-64 w-64 sm:h-80 sm:w-80 border-4 border-white/30 dark:border-white/10 shadow-sm">
                  <AvatarImage
                    src="/rashed.jpg"
                    alt="Rashed Abdullah"
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
                    RA
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 bg-white/80 dark:bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/30 dark:border-white/10 shadow-sm"
              >
                <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -8, 8, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-8 -right-8 bg-white/80 dark:bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/30 dark:border-white/10 shadow-sm"
              >
                <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3 space-y-6 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
              Rashed Abdullah
            </h1>

            <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300">
              <span className="inline-block px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-blue-600 dark:text-blue-300 rounded-full shadow-sm">
                Software Developer & Educator
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
              Transforming ideas into{" "}
              <span className="text-blue-600 dark:text-blue-300">
                elegant code
              </span>{" "}
              and knowledge into{" "}
              <span className="text-indigo-600 dark:text-indigo-300">
                empowering education
              </span>
              . Bridging the gap between technology and learning with innovative
              solutions.
            </p>

            {/* Animated Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <motion.div whileHover={{ y: -3 }}>
                <a target="_blank" href="https://github.com/RashedAbdullah">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 text-gray-700 dark:text-white bg-white/80 dark:bg-white/5 backdrop-blur-sm border-gray-300 dark:border-white/10 hover:bg-white dark:hover:bg-white/10"
                  >
                    <Github className="h-5 w-5" />
                    GitHub
                  </Button>
                </a>
              </motion.div>

              <motion.div whileHover={{ y: -3 }}>
                <a target="_blank" href="https://www.linkedin.com/in/rashed4abdullah">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 text-gray-700 dark:text-white bg-white/80 dark:bg-white/5 backdrop-blur-sm border-gray-300 dark:border-white/10 hover:bg-white dark:hover:bg-white/10"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </Button>
                </a>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                <a href="#contact">
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-sm shadow-blue-500/20"
                  >
                    <Mail className="h-5 w-5" />
                    Contact Me
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Floating Tech Stack */}
            <div className="pt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3"
              >
                {[
                  "TypeScript",
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "PostgreSQL",
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
