import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProcessTimeline } from "@/components/process-timeline";
import { DisclaimerBlock } from "@/components/disclaimer-block";

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-muted/30 border-b py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">How It Works</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Converting compliance complexity into a clear, transparent acquisition journey. Each step is designed to ensure safety, legality, and animal welfare.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <ProcessTimeline />
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why This Process Matters</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  International animal transport involves complex regulatory requirements across multiple jurisdictions. Our structured approach ensures every transaction meets the highest standards of compliance and animal welfare.
                </p>
                <ul className="space-y-4">
                  {[
                    "Full documentation trail for every transaction",
                    "Veterinary oversight at critical checkpoints",
                    "Real-time tracking and welfare monitoring",
                    "Post-delivery support and guidance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <DisclaimerBlock type="eligibility" />
                <DisclaimerBlock type="regulatory" />
                <DisclaimerBlock type="welfare" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Begin your journey by exploring our verified species catalog or verifying your eligibility for specific categories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/explore">
                <Button size="lg" className="gap-2" data-testid="button-start-explore">
                  Explore Animals
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/verify">
                <Button size="lg" variant="outline" data-testid="button-start-verify">
                  Verify Eligibility
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
