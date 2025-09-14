// src/pages/team.tsx
import React from "react";
import { Linkedin, Code, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// ---------- Type definitions ----------
interface Member {
  name: string;
  role: string;
  image: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
    color: string;
  }>;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    external?: string;
  };
}

// ---------- teamMembers & developerMembers (kept as you provided) ----------
const teamMembers: Member[] = [
  {
    name: "Radhika Shukla",
    role: "Technical Lead",
    image: "/radhika.png",
    description:
      "Radhika Shukla is the Technical Lead at Altronix and a 4th-year Engineering student. Passionate about technology and innovation, she enjoys exploring solutions, leading projects, and driving meaningful impact through her work.",
    stats: [
      { value: "5+", label: "Years Experience", color: "primary" },
      { value: "50+", label: "Projects Built", color: "secondary" },
      { value: "15+", label: "Technologies", color: "accent" },
      { value: "100+", label: "Students Mentored", color: "primary" },
    ],
    social: {
      github: "https://github.com/radhika",
      linkedin:
        "https://www.linkedin.com/in/radhishukla03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailto:radhika@altonix.com",
      external: "https://altonix.com/radhika",
    },
  },
  {
    name: "Mithanshu Hedau",
    role: "Technical Lead",
    image: "/mithanshu.jpg",
    description:
      "Mithanshu Hedau is the Technical Lead at Altronix and a 4th-year Engineering student. Passionate about technology and innovation, he drives technical initiatives and projects, striving to build impactful real-world solutions.",
    stats: [
      { value: "3+", label: "Years Experience", color: "primary" },
      { value: "30+", label: "Projects Built", color: "secondary" },
      { value: "10+", label: "Technologies", color: "accent" },
      { value: "50+", label: "Students Mentored", color: "primary" },
    ],
    social: {
      github: "https://github.com/mithanshu",
      linkedin:
        "https://www.linkedin.com/in/mithanshu-hedau-15066b282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailto:mithanshu@altonix.com",
      external: "https://altonix.com/mithanshu",
    },
  },
  {
    name: "Meharsh Chandure",
    role: "Technical Lead",
    image: "/meharsh-up.png",
    description:
      "Meharsh Chandure is the Technical Lead at Altronix and a 4th-year Engineering student. Passionate about technology and innovation, he leads initiatives and explores modern solutions to create impactful projects.",
    stats: [
      { value: "2+", label: "Years Experience", color: "primary" },
      { value: "20+", label: "Projects Built", color: "secondary" },
      { value: "8+", label: "Technologies", color: "accent" },
      { value: "30+", label: "Students Mentored", color: "primary" },
    ],
    social: {
      github: "https://github.com/meharsh",
      linkedin:
        "https://www.linkedin.com/in/meharsh-chandure?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailto:meharsh@altonix.com",
      external: "https://altonix.com/meharsh",
    },
  },
];

const developerMembers: Member[] = [
  {
    name: "Aman Verma",
    role: "Joint Technical Head",
    image: "/aman.jpg",
    description:
      "Aman Verma is the Joint Technical Head at Altonix and a 3rd-year Engineering student. Passionate about technology and innovation, he contributes to impactful projects and plays a key role in driving technical initiatives.",
    stats: [
      { value: "2+", label: "Years Experience", color: "primary" },
      { value: "20+", label: "Projects Built", color: "secondary" },
      { value: "8+", label: "Technologies", color: "accent" },
      { value: "30+", label: "Students Mentored", color: "primary" },
    ],
    social: {
      github: "https://github.com/amit",
      linkedin: "https://www.linkedin.com/in/aman-verma-cse/",
      email: "mailto:amit@altonix.com",
      external: "https://altonix.com/amit",
    },
  },
  {
    name: "Shreyansh Bhagwat",
    role: "Joint Technical Head",
    image: "/shreyansh.jpg",
    description:
      "Shreyansh Bhagwat is the Joint Technical Head at Altonix and a 3rd-year Engineering student. Passionate about technology and problem-solving, he explores innovative solutions and contributes to impactful projects.",
    stats: [
      { value: "1+", label: "Years Experience", color: "primary" },
      { value: "10+", label: "Projects Built", color: "secondary" },
      { value: "5+", label: "Technologies", color: "accent" },
      { value: "15+", label: "Students Mentored", color: "primary" },
    ],
    social: {
      github: "https://github.com/sneha",
      linkedin: "https://www.linkedin.com/in/shreyansh-bhagwat-750569289/",
      email: "mailto:sneha@altonix.com",
      external: "https://altonix.com/sneha",
    },
  },
];

// ---------- Reusable card section component ----------
const CardSection = ({ members, cols = "md:grid-cols-3" }: { members: Member[]; cols?: string }) => (
  <div className="max-w-7xl mx-auto">
    <div className={`grid grid-cols-1 ${cols} gap-20 px-2 justify-evenly`}>
      {members.map((member) => (
        <div
          key={member.name}
          className="glass rounded-3xl p-8 px-2 hover-glow border border-primary/10 relative overflow-hidden flex flex-col"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center lg:items-start">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="w-full h-full rounded-3xl overflow-hidden border-3 border-primary/20 relative group">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <img src={member.image} alt={member.name} className="w-44 h-44 object-cover rounded-2xl" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute -top-4 -right-2 w-6 h-6 glass rounded-lg flex items-center justify-center animate-float">
                <Award className="h-3 w-3 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 glass rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <Code className="h-4 w-4 text-secondary" />
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-3xl font-bold mb-2 text-gradient text-center lg:text-left">{member.name}</h3>
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse" />
                <span className="text-lg text-muted-foreground font-semibold">{member.role}</span>
              </div>

              <p className="text-base text-muted-foreground mb-6 leading-relaxed max-w-xs lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
                {member.description}
              </p>

              {/* Social Links - safe JSX comments used for optional blocks */}
              <div className="flex justify-center lg:justify-start space-x-4">
                {member.social?.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-12 h-12 rounded-xl justify-center bg-secondary/10 hover:bg-secondary hover:text-white border border-secondary/20 group">
                      <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    </Button>
                  </a>
                )}
                {/* Example: keep other social buttons commented via JSX comment */}
                {/*
                <a href={member.social.email}>
                  <Button size="lg" className="w-12 h-12 rounded-xl bg-accent/10 hover:bg-accent hover:text-white border border-accent/20 group">
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  </Button>
                </a>
                */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ---------- Page component ----------
const Developer = () => {
  return (
    <>
      <Navigation />

      <section className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 hover-glow border border-primary/20">
              <Heart className="h-5 w-5 text-primary animate-glow-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Meet The Visionary</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Meet Our Technical Team</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate innovator bringing together creativity and technical expertise to shape the future of AI and machine learning education.
            </p>
          </div>

          {/* Technical Team */}
          <CardSection members={teamMembers} cols="md:grid-cols-3" />

          {/* Our Developers Heading */}
          <div className="text-center mt-24 mb-12">
            <h2 className="text-5xl lg:text-6xl font-bold text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Meet Our Developers</h2>
          </div>

          {/* Developer Cards */}
          <div className="flex justify-center">
            <CardSection members={developerMembers} cols="md:grid-cols-2" />
          </div>
        </div>
      </section>

      {/* Footer placed AFTER the section, inside top-level fragment */}
      <Footer />
    </>
  );
};

export default Developer;

