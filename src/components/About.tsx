import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer who loves building intelligent systems that make a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <p>
                I'm a passionate Machine Learning Engineer with expertise in building intelligent systems 
                and AI-powered applications. My experience spans from data preprocessing and model training 
                to deploying production-ready ML solutions using modern frameworks.
              </p>
              <p>
                Currently expanding my knowledge in Generative AI, LangChain, and RAG systems. I enjoy 
                tackling complex problems through data science, building end-to-end ML pipelines, and 
                creating intuitive applications that make AI accessible to everyone.
              </p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Jorhat, Assam, India | Open to Remote Work</span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl">💻</span>
                    </div>
                    <h4 className="font-medium">Always Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Staying up-to-date with the latest AI technologies and best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-sm text-muted-foreground">Kaziranga University, Jorhat, Assam</p>
                  <p className="text-sm text-muted-foreground">Expected Graduation: 2026</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <Badge variant="secondary" className="w-full justify-start">
                    AWS Academy Graduate – AWS ML Foundations
                  </Badge>
                </div>
                <div className="space-y-1">
                  <Badge variant="secondary" className="w-full justify-start">
                    Data Science Bootcamp – Udemy
                  </Badge>
                </div>
                <div className="space-y-1">
                  <Badge variant="outline" className="w-full justify-start">
                    Generative AI with LangChain & OpenAI – Udemy (In Progress)
                  </Badge>
                  <p className="text-xs text-muted-foreground ml-2">by Krish Naik</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <h4 className="font-medium mb-2">Specialization</h4>
              <p className="text-muted-foreground">ML & AI Development</p>
            </div>
            <div className="text-center">
              <h4 className="font-medium mb-2">Projects</h4>
              <p className="text-muted-foreground">4+ ML Projects</p>
            </div>
            <div className="text-center">
              <h4 className="font-medium mb-2">Focus Areas</h4>
              <p className="text-muted-foreground">Regression, NLP, RAG</p>
            </div>
            <div className="text-center">
              <h4 className="font-medium mb-2">Learning</h4>
              <p className="text-muted-foreground">Generative AI, LangChain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}