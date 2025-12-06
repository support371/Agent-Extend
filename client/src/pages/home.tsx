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
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1920&h=1080&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                A Regulated Ecosystem for Animal Acquisition
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed">
                Explore verified animals and activate compliant global delivery with welfare-first standards.
              </p>
              <p className="text-sm text-white/70 mb-8 max-w-lg">
                Availability and transport eligibility vary by species, origin, and destination. All transactions require verification.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/explore">
                  <Button size="lg" className="gap-2" data-testid="button-hero-explore">
                    Explore Animals
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/verify">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white backdrop-blur-sm" data-testid="button-hero-verify">
                    Verify Eligibility
                  </Button>
                </Link>
                <Link href="/shipping">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white backdrop-blur-sm" data-testid="button-hero-shipping">
                    Request Shipping Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Three-Layer Model</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform operates on three interconnected pillars that ensure safe, legal, and ethical animal acquisition.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((pillar, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <pillar.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Trust & Governance</h2>
              <p className="text-muted-foreground">
                Built on verification, documentation, and welfare-first principles.
              </p>
            </div>
            <TrustStats />
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Categories</h2>
                <p className="text-muted-foreground">
                  Explore species by category with region-aware eligibility
                </p>
              </div>
              <Link href="/explore">
                <Button variant="ghost" className="gap-1" data-testid="button-view-all-categories">
                  View All
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <CategoryGrid />
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A 9-step process that transforms compliance complexity into a clear transaction narrative.
              </p>
            </div>
            <ProcessTimeline compact />
            <div className="text-center mt-8">
              <Link href="/how-it-works">
                <Button variant="outline" className="gap-2" data-testid="button-learn-more-process">
                  Learn More About Our Process
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Institutional Solutions</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Specialized services for zoos, research facilities, conservation programs, and government agencies. 
                  Our institutional accounts offer dedicated support, bulk transport management, and compliance-managed workflows.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Dedicated account management",
                    "Bulk and scheduled transport",
                    "Compliance-managed accounts",
                    "Priority documentation support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/institutional">
                  <Button className="gap-2" data-testid="button-institutional-inquiry">
                    Institutional Inquiry
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&h=600&fit=crop"
                  alt="Institutional animal care facility"
                  className="w-full h-full object-cover"
                />
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
