// components/home/hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/social";
import { getIconComponent } from "@/lib/icons";
import { StarHeader } from "@/components/shared/star-header";
// Statically imported so Next.js/webpack verifies this file exists at BUILD
// TIME. A wrong path or missing/un-committed file now fails the build with
// a clear error instead of silently 400-ing on the deployed site.
import profileImage from "@/public/images/profile.webp";

const displayedSkills = [
  "B.Tech AIML Student",
  "AI Builder",
  "Full Stack Developer",
  "Open Source Contributor",
];

export function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  // Parallax effect setup
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 40]);
  const y2 = useTransform(scrollY, [0, 800], [0, 60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % displayedSkills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StarHeader>
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div className="flex flex-col justify-center space-y-4" style={{ y: y1 }}>
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I&apos;m Saksham Singh
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="h-12"
                >
                  <div className="relative flex h-full items-center overflow-hidden">
                    {displayedSkills.map((skill, index) => (
                      <div
                        key={skill}
                        className={`absolute transform transition-all duration-500 ${
                          index === currentSkillIndex
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                      >
                        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">{skill}</h2>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-[600px] text-muted-foreground md:text-xl"
                >
                  Driven by curiosity and powered by code, I build intelligent applications and
                  modern web experiences that solve real-world problems. My focus is on creating
                  products that are fast, scalable, and designed with users in mind.
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Button asChild size="lg" className="group">
                  <Link href="/#projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="/resume.pdf"
                    download="Saksham_Singh_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>

              {/* Social Links - Added here from navbar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-3 pt-2"
              >
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.id}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="rounded-full bg-muted/50 hover:bg-primary/10"
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                      >
                        {getIconComponent(social.icon)}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center"
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="relative aspect-square w-full max-w-md"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Ambient glow */}
                <div className="absolute inset-0 -z-10 scale-105 rounded-full bg-primary/30 blur-3xl" />
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 blur-2xl" />

                <div className="group relative h-full w-full overflow-hidden rounded-full shadow-[0_0_60px_-15px_rgba(0,0,0,0.35)] ring-2 ring-primary/20 ring-offset-4 ring-offset-background transition-all duration-500 hover:shadow-[0_0_80px_-10px_rgba(0,0,0,0.5)] hover:ring-primary/50 dark:shadow-[0_0_60px_-15px_rgba(255,255,255,0.15)]">
                  <Image
                    src={profileImage}
                    alt="Saksham Singh - B.Tech AIML Student"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </StarHeader>
  );
}
