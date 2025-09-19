import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            <span className="font-medium">Nidhi Sanni</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
            >
              Get In Touch
            </Button>
            <button
              onClick={() => setDark(!dark)}
              className="ml-2 p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? "🌙" : "☀️"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center pt-24 bg-background">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Text */}
        <div className="flex-1 flex flex-col items-start justify-center space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Nidhi Sanni
            </span>
          </h1>
          <p className="text-lg font-medium text-primary/80">
            AI | Machine Learning | Data Analytics | Generative AI
          </p>
          <p className="text-muted-foreground max-w-xl">
            Passionate about leveraging artificial intelligence and data science to solve complex problems and drive innovation. Building the future with intelligent solutions.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="https://drive.google.com/file/d/1LkXuB79zEtexU6iqicLCAV9vVtpTafiN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition"
            >
              Download Resume
            </a>
            <button
              className="flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>
        </div>
        {/* Right Side: Small Circular Profile Photo */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full border-4 border-blue-300 bg-gray-100 flex items-center justify-center shadow-lg">
              <img
                src="/images/nidhi.jpg"
                alt="Nidhi Sanni"
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            {/* Optional: Add floating icons or decorations here */}
          </div>
        </div>
      </div>
    </section>
  );
}