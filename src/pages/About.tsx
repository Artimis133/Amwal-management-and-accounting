


export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
     

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-section-title-slide">
            About <span className="text-primary animate-text-shimmer">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-section-subtitle-fade">
            Helping UK startups and growing businesses build strong financial foundations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-content-slide-right">
            <h3 className="text-3xl font-bold text-foreground mb-6 animate-heading-bounce">
              Your Trusted Financial Partners
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="hover:text-foreground transition-colors duration-500 animate-paragraph-fade-up">
                At Amwal Management and Accounting, we are more than just number-crunchers we are your strategic
                 partner in building a thriving business. Founded right here in the United Kingdom, we understand
                  the unique opportunities and challenges that UK businesses face. Our mission is
                 to empower startups and growing businesses with clear, actionable financial insights that drive success.
              </p>
              <p className="hover:text-foreground transition-colors duration-500 animate-paragraph-fade-up-delayed">
                The name 'Amwal' comes from the Arabic word for 'wealth' or 'assets,' reflecting our core belief:
                 your business's financial health is its greatest asset. We started because we saw a gap. Many growing 
                 businesses were receiving reactive, generic accounting services, not the proactive, strategic partnership
                  they needed to truly flourish.
              </p>
            </div>
          </div>

          <div className="animate-content-slide-left">
            <img
              src="/images/accounting.jpg"
              alt="Modern office space"
              className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:rotate-1 animate-image-reveal"
            />
          </div>
        </div>

      
      </div>
    </section>
  );
}
