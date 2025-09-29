import { useState } from "react";
import { ChevronDown, Calculator, FileText, TrendingUp, Shield, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const servicesData = [
  {
    id: 1,
    title: "Company Accounts & Tax Returns",
    description: "Complete company accounts preparation and filing with HMRC and Companies House",
    icon: Calculator,
    price: "From £70",
    features: [
      "Accurate financial statements preparation",
      "HMRC and Companies House compliance",
      "Timely submission of all required documents",
      "Expert guidance throughout the process",
      "Support for businesses of small and medium sizes"
    ],
    details: "We take the stress out of preparing and filing your company accounts. Our expert team ensures your accounts are accurate, fully compliant with HMRC and Companies House requirements, and submitted on time. Whether you're a small business or a growing company, we provide clear, reliable support so you can focus on running your business."
  },
  {
    id: 2,
    title: "Self Assessment Tax Returns",
    description: "Expert handling of your Self Assessment submissions and HMRC compliance",
    icon: FileText,
    price: "From £50",
    features: [
      "Accurate income and expense calculation",
      "Direct HMRC submission",
      "Tax relief optimization",
      "Expert review and guidance",
      "Penalty avoidance"
    ],
    details: "Sorting out your own tax return can be time-consuming and confusing. With our Self Assessment service, you'll have an expert making sure everything is done right the first time. From calculating your income and expenses to submitting directly to HMRC, we make the process simple and stress-free."
  },
  {
    id: 3,
    title: "Expert Bookkeeping Services",
    description: "Comprehensive managed bookkeeping solutions for your business",
    icon: TrendingUp,
    price: "From £60/month",
    features: [
      "Transaction recording and categorization",
      "Bank reconciliation",
      "Invoice and expense management",
      "Monthly financial reports",
      "Cash flow analysis",
      "Real-time financial insights"
    ],
    details: "Stay on top of your finances with our fully managed bookkeeping solutions. We record, organise, and maintain your business transactions with accuracy and efficiency, giving you clear insights into your cash flow and financial health. Whether you're a startup or an established business, our bookkeeping services keep everything running smoothly behind the scenes."
  },
  {
    id: 4,
    title: "VAT Accountants",
    description: "Professional VAT calculation, reporting and compliance services",
    icon: Shield,
    price: "",
    features: [
      "VAT return preparation and submission",
      "VAT scheme optimization",
      "HMRC compliance",
      "All VAT schemes supported",
      "VAT planning and strategy",
      "Error correction and dispute resolution"
    ],
    details: "Managing VAT can be complex, but our team makes it simple. We handle everything from accurate VAT calculations and timely submissions to full compliance with HMRC requirements. Whether you're on standard, flat-rate, or another VAT scheme, we ensure your business stays compliant while maximising efficiency."
  },
  {
    id: 5,
    title: "Documentation Services - Apostille",
    description: "Professional apostille services for international document legalization",
    icon: BookOpen,
    price: "£190",
    features: [
      "Complete FCDO process management",
      "Document preparation and formatting",
      "Expert guidance on requirements",
      "2-3 working days turnaround",
      "Secure document handling"
    ],
    details: "We provide a fast, reliable, and professional service to ensure your company documents are correctly apostilled and ready for international use. We handle the entire apostille process with the Foreign, Commonwealth & Development Office, ensuring all documents are correctly prepared and formatted.",
    note: "All-inclusive fee of £190 per document covers official apostille fee, handling, and administration with no hidden costs."
  }
];

export default function Services() {
  const [openServices, setOpenServices] = useState<number[]>([]);

  const toggleService = (id: number) => {
    setOpenServices(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-section-title-slide">
            Our <span className="text-primary animate-text-shimmer">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Comprehensive accounting solutions designed to support your business at every stage of growth
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {servicesData.map((service, index) => (
            <Card 
              key={service.id} 
              className="hover:shadow-lg md:hover:shadow-2xl transition-all duration-300 md:hover:-translate-y-2 bg-card/90 backdrop-blur-sm border-l-4 border-l-primary relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start gap-4 sm:gap-6 mb-2">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg transition-all duration-300 group-hover:bg-primary/20 flex-shrink-0">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-xl sm:text-2xl font-bold mb-1 line-clamp-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base text-muted-foreground line-clamp-2">
                          {service.description}
                        </CardDescription>
                      </div>
                      {service.price && (
                        <div className="bg-primary/10 px-3 py-2 rounded-full self-start">
                          <span className="text-base sm:text-lg font-bold text-primary whitespace-nowrap">
                            {service.price}
                            {service.id === 5 && <span className="text-sm font-normal ml-1">per document</span>}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10 p-4 sm:p-6 pt-0">
                <Collapsible open={openServices.includes(service.id)}>
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between p-3 sm:p-4 h-auto hover:bg-primary/10 transition-all duration-300 group/btn border border-primary/20 rounded-lg hover:border-primary/40"
                      onClick={() => toggleService(service.id)}
                    >
                      <span className="text-primary font-semibold text-sm sm:text-base">
                        {openServices.includes(service.id) ? "Show Less" : "Read More Details"}
                      </span>
                      <ChevronDown 
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-primary transition-transform duration-300 ${
                          openServices.includes(service.id) ? 'rotate-180' : ''
                        }`} 
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 sm:mt-6">
                    <div className="bg-secondary/10 p-4 sm:p-6 rounded-lg border-l-2 border-primary/30">
                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {service.details}
                        </p>
                        
                        <div className="grid gap-3 sm:gap-4">
                          <h4 className="font-semibold text-foreground text-sm sm:text-base">
                            Key Features:
                          </h4>
                          <ul className="grid gap-2 sm:gap-3">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm sm:text-base">
                                <span className="text-primary mt-1 flex-shrink-0">•</span>
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {service.note && (
                          <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                            <p className="text-xs italic text-muted-foreground leading-relaxed">
                              {service.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}