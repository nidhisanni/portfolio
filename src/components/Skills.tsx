import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java (DSA)", "SQL"],
    },
    {
      title: "Machine Learning & AI",
      skills: [
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Feature Engineering",
        "Model Deployment",
      ],
    },
    {
      title: "Generative AI & NLP",
      skills: [
        "Google Gemini API",
        "OpenAI GPT",
        "LangChain",
        "Hugging Face",
        "RAG (Retrieval Augmented Generation)",
        "Chatbot Development",
      ],
    },
    {
      title: "Web Development & APIs",
      skills: [
        "Streamlit",
        "Flask",
        "FastAPI",
        "React",
        "HTML/CSS",
        "Bootstrap",
        "RESTful APIs",
      ],
    },
    {
      title: "Data Science & Analytics",
      skills: [
        "Data Cleaning",
        "Exploratory Data Analysis",
        "Data Visualization",
        "Statistical Analysis",
        "Predictive Modeling",
        "A/B Testing",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git/GitHub",
        "Docker",
        "Vercel",
        "VS Code",
        "Jupyter Notebooks",
        "Anaconda/Miniconda",
        "Linux/Windows",
        "SQLite",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-medium mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-center font-medium mb-8">
              Currently Learning
            </h3>
            <div className="flex justify-center flex-wrap gap-3">
              {[
                "Deep Learning with PyTorch",
                "Advanced NLP Techniques"
              ].map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm border-dashed"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}