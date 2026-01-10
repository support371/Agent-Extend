import { Link } from "wouter";
import { ArrowRight, Search, Shield, Truck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrustStats } from "@/components/trust-stats";
import { CategoryGrid } from "@/components/category-grid";
import { ProcessTimeline } from "@/components/process-timeline";
import { TestimonialGrid } from "@/components/testimonial-card";
import { DisclaimerStrip } from "@/components/disclaimer-block";

const pillars = [
  {
    icon: Search,
    title: "Discovery",
    description: "Curated, education-forward species exploration with region-aware eligibility signals.",
  },
  {
    icon: Shield,
    title: "Verified Acquisition",
    description: "Listings from vetted sellers with documentation and ethical sourcing requirements.",
  },
  {
    icon: Truck,
    title: "Compliant Logistics",
    description: "End-to-end cross-border transport aligned to welfare and destination rules.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541199160986-749756f65805?w=1920&h=1080&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-md">
                <Shield className="w-4 h-4 text-emerald-400" />
                Institutional Compliance Standards Certified
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                Institutional Animal Discovery & Acquisition
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                The premier regulated ecosystem for verified species acquisition and welfare-first global transport logistics.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link href="/explore">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white border-0 h-14 px-8 text-lg shadow-xl shadow-emerald-900/20" data-testid="button-hero-explore">
                    Explore Species
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/verify">
                  <Button size="lg" variant="outline" className="bg-white/5 border-white/30 text-white backdrop-blur-md hover:bg-white/10 h-14 px-8 text-lg" data-testid="button-hero-verify">
                    Verify Eligibility
                  </Button>
                </Link>
                <Link href="/shipping">
                  <Button size="lg" variant="outline" className="bg-white/5 border-white/30 text-white backdrop-blur-md hover:bg-white/10 h-14 px-8 text-lg" data-testid="button-hero-shipping">
                    Transport Quote
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-white/60 text-sm">Verified Sellers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-1">99.8%</div>
                  <div className="text-white/60 text-sm">Compliance Rate</div>
                </div>
                <div className="hidden md:block">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-white/60 text-sm">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold mb-6 tracking-tight">The Institutional Model</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our platform integrates three critical layers that transform complex animal acquisition into a seamless, compliant journey.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {pillars.map((pillar, index) => (
                <Card key={index} className="group hover-elevate border-2 transition-all duration-300">
                  <CardContent className="p-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <pillar.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Trust & Governance</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our platform is built on rigorous verification, comprehensive documentation, and welfare-first principles.
              </p>
            </div>
            <TrustStats />
          </div>
        </section>

        <section className="py-24 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold mb-4 tracking-tight">Featured Categories</h2>
                <p className="text-xl text-muted-foreground">
                  Explore species by category with real-time, region-aware eligibility assessment.
                </p>
              </div>
              <Link href="/explore">
                <Button variant="outline" className="h-12 px-6 text-base group" data-testid="button-view-all-categories">
                  View All Categories
                  <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <CategoryGrid />
          </div>
        </section>

        <section className="py-24 bg-muted/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 tracking-tight">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A sophisticated 9-step workflow that transforms regulatory complexity into a clear, transparent transaction narrative.
              </p>
            </div>
            <ProcessTimeline compact />
            <div className="text-center mt-16">
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg group" data-testid="button-learn-more-process">
                  Detailed Process Breakdown
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-20 lg:grid-cols-2 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10" />
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&h=600&fit=crop"
                    alt="Institutional animal care facility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-white dark:bg-card p-8 rounded-2xl shadow-xl max-w-xs border border-border/50 hidden md:block">
                  <div className="text-emerald-600 font-bold text-lg mb-2">Institutional Ready</div>
                  <p className="text-sm text-muted-foreground">Certified protocols for zoos, research centers, and government programs.</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold mb-8 tracking-tight">Institutional Solutions</h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  Specialized acquisition frameworks for zoos, conservation programs, and research facilities. 
                  Our institutional accounts provide dedicated logistics management and compliance-audited workflows.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {[
                    "Dedicated Account Management",
                    "Bulk Transport Logistics",
                    "Audited Compliance Trails",
                    "Priority Document Review",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                      <span className="font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/institutional">
                  <Button size="lg" className="h-14 px-8 text-lg" data-testid="button-institutional-inquiry">
                    Explore Institutional Services
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Case Outcomes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from institutions and professionals who have successfully completed acquisitions through our platform.
              </p>
            </div>
            <TestimonialGrid />
          </div>
        </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <DisclaimerStrip />
        </div>
      </section>
    </>
  );
}
