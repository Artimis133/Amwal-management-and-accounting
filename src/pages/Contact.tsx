import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+ 44 78 8761 99900",
      subtext: "Mon-Fri 9AM-6PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@amwalmanagment.co.uk",
      subtext: "We respond within 24 hours"
    },
    // {
    //   icon: MapPin,
    //   title: "Address",
    //   details: "123 Financial District, London EC2V 8RF",
    //   subtext: "Near Bank Station"
    // },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      subtext: "Weekend consultations available"
    }
  ];

  // Validation functions
  const validateName = (name: string) => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      return "Name is required";
    }
    if (trimmedName.length < 2) {
      return "Name must be at least 2 characters long";
    }
    if (!/^[a-zA-Z\s\-']+$/.test(trimmedName)) {
      return "Name can only contain letters, spaces, hyphens, and apostrophes";
    }
    return "";
  };

  const validateEmail = (email: string) => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validateMessage = (message: string) => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      return "Message is required";
    }
    if (trimmedMessage.length < 10) {
      return "Message must be at least 10 characters long";
    }
    if (trimmedMessage.length > 1000) {
      return "Message must be less than 1000 characters";
    }
    return "";
  };

  const validateForm = () => {
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError
    });

    return !nameError && !emailError && !messageError;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "073f2d45-0dea-4247-8adf-b8d3c4704540"); 
      formDataToSend.append("name", formData.name.trim());
      formDataToSend.append("email", formData.email.trim());
      formDataToSend.append("message", formData.message.trim());
      formDataToSend.append("subject", `New Contact Form Submission from ${formData.name.trim()}`);
      formDataToSend.append("from_name", "Amwal Managment Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms error:", data);
        toast({
          title: "Error",
          description: data.message || "Failed to send message. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Network Error",
        description: "Unable to send message. Please check your connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-section-title-slide">
            Contact <span className="text-primary animate-text-shimmer">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-section-subtitle-fade">
            Ready to take your business finances to the next level? Get in touch with our expert team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <div className="animate-form-slide-up">
            <Card className="hover:shadow-2xl transition-all duration-700 bg-card/90 backdrop-blur-sm group hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="animate-input-slide-in">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className={`mt-2 transition-all duration-500 hover:border-primary focus:scale-105 hover:shadow-lg disabled:opacity-50 ${
                        errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 animate-pulse">{errors.name}</p>
                    )}
                  </div>
                  <div className="animate-input-slide-in-delayed">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className={`mt-2 transition-all duration-500 hover:border-primary focus:scale-105 hover:shadow-lg disabled:opacity-50 ${
                        errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 animate-pulse">{errors.email}</p>
                    )}
                  </div>
                  <div className="animate-input-slide-in-more-delayed">
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className={`mt-2 w-full px-3 py-2 border border-input bg-background rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-500 hover:border-primary focus:scale-105 hover:shadow-lg disabled:opacity-50 ${
                        errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                      placeholder="Tell us about your accounting needs..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1 animate-pulse">{errors.message}</p>
                    )}
                    <div className="text-right text-sm text-muted-foreground mt-1">
                      {formData.message.trim().length}/1000 characters
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className={`w-full hover:scale-105 transition-all duration-500 animate-button-pulse ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6 animate-contact-cards-slide">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title} 
                className="hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-105 bg-card/90 backdrop-blur-sm group animate-contact-card-pop"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 animate-contact-icon-bounce">
                      <info.icon className="w-6 h-6 text-primary transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-foreground mb-1">{info.details}</p>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {info.subtext}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}