import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Fraud Detection ML System",
      description:
        "Built a comprehensive fraud detection system using machine learning algorithms to identify fraudulent transactions. Implemented multiple ML models with data preprocessing, feature engineering, and real-time prediction capabilities.",
      image: "/images/fraud.png",
      tags: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Machine Learning"],
      liveUrl: "https://frauddetectionm.streamlit.app/",
      githubUrl: "https://github.com/nidhisanni/fraud-detection-ml"
    },
    {
      title: "YouTube Adview Prediction",
      description:
        "Built regression models (Linear, SVR, Decision Tree, Random Forest, ANN with Keras) to predict YouTube adviews. Performed comprehensive data cleaning, visualization, feature transformation, and normalization before model training.",
      image: "/images/adview.png",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Keras", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "https://github.com/nidhisanni/-youtube-adview-prediction.git"
    },
    {
      title: "Titanic Survival Prediction",
      description:
        "Built a machine learning model to predict passenger survival on the Titanic dataset. Focused on data preprocessing, feature engineering, and evaluating multiple ML models to achieve ~80% accuracy with Random Forest.",
      image: "/images/titanic.png",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
      liveUrl: "#",
      githubUrl: "https://github.com/nidhisanni/titanic-ml-project"
    },
    {
      title: "AI Weather Assistant with Chatbot",
      description:
        "Developed an interactive Streamlit app providing real-time weather updates and an AI-powered chatbot using Google Gemini API. Features include 5-day forecasts, auto-detect location, chat history, and smart suggestions.",
      image: "/images/weather.png",
      tags: ["Python", "Streamlit", "Gemini API", "OpenWeather API"],
      liveUrl: "https://ai-weather-app-internship.vercel.app/",
      githubUrl: "https://github.com/nidhisanni/Ai-weather-app-internship.git"
    },
    {
      title: "AI Chatbot Project",
      description:
        "Portfolio version of an AI chatbot using Google Gemini API. Engages users in natural conversation, offers weather tips, and supports session history and smart suggestion buttons.",
      image: "/images/ai.png",
      tags: ["Python", "Streamlit", "Gemini API"],
      liveUrl: "https://nidhichat.vercel.app/",
      githubUrl: "https://github.com/nidhisanni/myaichatbot"
    },
    {
      title: "FastAPI ML Model Deployment",
      description:
        "Created a FastAPI-based deployment pipeline for ML models. Demonstrated deployment with Iris dataset classification model. Documented with Swagger UI and comprehensive workflow diagrams.",
      image: "/images/fastapi.png",
      tags: ["Python", "FastAPI", "Uvicorn", "Scikit-learn", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/nidhisanni/iris-fastapi-deployment.git"
    },
    {
      title: "Flask Blog Web App",
      description:
        "Built a full-stack blog platform with user authentication and CRUD operations. Customized and deployed as a comprehensive web development project showcasing backend skills.",
      image: "/images/flask.png",
      tags: ["Flask", "SQLite", "HTML", "CSS", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "https://github.com/nidhisanni/nidhi-tech-blog.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A curated showcase of my most impactful projects, demonstrating practical skills in AI, machine learning, and full-stack development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl !== "#" && (
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/nidhisanni" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}