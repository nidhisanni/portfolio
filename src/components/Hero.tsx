import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Side - Text (takes 2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit text-sm">
                ML Engineer & AI Developer
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  Nidhi Sanni
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Machine Learning Engineer & AI Developer from Jorhat, Assam,
                passionate about building intelligent solutions. I transform
                data into insights and create AI-powered applications.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-teal-400 hover:opacity-90"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
            </div>

            {/* Get In Touch Button and Social Links aligned */}
            <div className="flex items-center gap-4 pt-2">
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>

              <div className="flex items-center space-x-3">
                <a
                  href="https://github.com/nidhisanni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/nidhisanni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:nidhisanni49@gmail.com"
                  className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image (takes 1 column) */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="w-44 h-44 lg:w-52 lg:h-52 rounded-full border-4 border-blue-300 bg-gray-100 shadow-xl overflow-hidden">
              <img
                src="/images/nidhi.jpg"
                alt="Nidhi Sanni"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
