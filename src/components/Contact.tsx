import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Download } from "lucide-react";
import emailjs from 'emailjs-com';

export function Contact() {
  // Add state for form fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_959fdnf',      // Your Service ID
      'template_t1k8awt',     // Your Template ID
      form,                   // This sends the form fields as template variables
      'OWbO1EVtVV9tq1fnk'     // Your Public Key
    )
    .then(() => {
      alert("Message sent!");
      setForm({ name: "", email: "", subject: "", message: "" });
    })
    .catch((error) => {
      alert("Failed to send message. Please try again.");
      console.error(error);
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to build intelligent solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name">Name</label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email">Email</label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject">Subject</label>
                      <Input
                        id="subject"
                        placeholder="Project discussion"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message">Message</label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-medium">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:nidhisanni49@gmail.com"
                        className="text-muted-foreground underline hover:text-primary"
                      >
                        nidhisanni49@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 7577893754</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Jorhat, Assam, India | Open to Remote Work</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-medium">Resume</h3>
                <a 
                  href="https://drive.google.com/file/d/1LkXuB79zEtexU6iqicLCAV9vVtpTafiN/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>

              <div className="space-y-6">
                <h3 className="font-medium">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/nidhisanni" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/nidhisanni" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">Currently Available</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm currently seeking opportunities in Machine Learning and AI development. 
                  Let's build intelligent solutions together!
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 dark:text-green-400">Open to ML opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}