import { Link } from "wouter";
import { 
  Heart, Shield, Thermometer, Users, 
  FileText, Phone, AlertTriangle, CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/footer";

const welfareStandards = [
  {
    icon: Thermometer,
    title: "Climate Control",
    description: "Species-appropriate temperature and humidity maintained throughout transport with real-time monitoring.",
  },
  {
    icon: Heart,
    title: "Fitness Assessment",
    description: "Pre-transport veterinary evaluation ensures all animals meet fitness-to-travel criteria.",
  },
  {
    icon: Shield,
    title: "Secure Containment",
    description: "IATA-compliant containers designed for species-specific comfort, security, and ventilation.",
  },
  {
    icon: Users,
    title: "Trained Handlers",
    description: "Certified animal transport specialists with species-specific expertise at every touchpoint.",
  },
];

const handlingProtocols = [
  "Pre-departure health screening by licensed veterinarian",
  "Species-appropriate fasting protocols before transport",
  "Climate-controlled holding facilities at origin and destination",
  "Real-time GPS tracking and environmental monitoring",
  "Scheduled welfare checkpoints during extended journeys",
  "Emergency veterinary support available 24/7",
  "Post-arrival acclimation guidance and support",
];

const partners = [
  { name: "IATA Live Animals Board", role: "Transport Standards" },
  { name: "World Organisation for Animal Health", role: "Health Protocols" },
  { name: "Global Veterinary Network", role: "Clinical Support" },
  { name: "Animal Transport Association", role: "Certification" },
];

export default function WelfarePage() {
  return (
    <>
      <section className="bg-muted/30 border-b py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Welfare & Standards</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Our commitment to animal welfare is non-negotiable. Every shipment adheres to the highest standards of care, from origin to destination.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold mb-6">Welfare Charter</h2>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    TerraLegit operates under a strict welfare charter that prioritizes animal wellbeing at every stage of the acquisition and transport process. We believe that ethical animal commerce and responsible logistics are not only compatible but inseparable.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Every seller on our platform must demonstrate compliance with welfare requirements. Every shipment must pass fitness-to-travel assessments. Every route must include appropriate welfare checkpoints. There are no exceptions.
                  </p>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <strong>Our Commitment:</strong> All shipments must meet our welfare and fitness-to-travel thresholds. Animals that do not meet these standards will not be approved for transport.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold mb-6">Core Standards</h2>
              <div className="grid gap-6 md:grid-cols-2 mb-12">
                {welfareStandards.map((standard, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <standard.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{standard.title}</h3>
                          <p className="text-sm text-muted-foreground">{standard.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6">Handling Protocols</h2>
              <Card className="mb-12">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {handlingProtocols.map((protocol, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{protocol}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold mb-6">Partner Network</h2>
              <div className="grid gap-4 sm:grid-cols-2 mb-12">
                {partners.map((partner, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <p className="font-medium">{partner.name}</p>
                      <p className="text-sm text-muted-foreground">{partner.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6">Emergency Escalation</h2>
              <Card className="mb-12">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Emergency Support</h3>
                      <p className="text-muted-foreground mb-4">
                        Our emergency response team is available 24/7 to address any welfare concerns during transport. Immediate action protocols are in place for all contingencies.
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="gap-2" data-testid="button-emergency-line">
                      <Phone className="h-4 w-4" />
                      Emergency Line: +1-800-WELFARE
                    </Button>
                    <Button variant="outline" className="gap-2" data-testid="button-report-concern">
                      <FileText className="h-4 w-4" />
                      Report a Concern
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How do you ensure animals are fit for travel?",
                    a: "All animals undergo a pre-transport health assessment by a licensed veterinarian within 72 hours of departure. This includes physical examination, health certificate issuance, and confirmation of species-specific fitness criteria.",
                  },
                  {
                    q: "What happens if an animal becomes unwell during transport?",
                    a: "Our emergency protocols are activated immediately. The nearest veterinary facility is contacted, and transport is paused if necessary. The animal's welfare always takes priority over delivery timelines.",
                  },
                  {
                    q: "How are welfare checkpoints conducted?",
                    a: "Trained handlers inspect animals at predetermined intervals, checking for signs of stress, adequate hydration, proper ventilation, and temperature levels. All observations are documented and reported.",
                  },
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">{faq.q}</h4>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </>
  );
}
