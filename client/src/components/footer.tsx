import { Link } from "wouter";
import { Shield, FileText, Scale, Heart, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  platform: [
    { href: "/explore", label: "Explore Animals" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/shipping", label: "Shipping Portal" },
    { href: "/how-it-works", label: "How It Works" },
  ],
  compliance: [
    { href: "/welfare", label: "Welfare Standards" },
    { href: "/coverage", label: "Coverage Map" },
    { href: "/institutional", label: "Institutional Services" },
    { href: "/documentation", label: "Documentation Guide" },
  ],
  legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/regulatory", label: "Regulatory Compliance" },
    { href: "/prohibited", label: "Prohibited Species List" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-primary font-bold text-xl">T</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">TerraLegit</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              The premier institutional platform for verified animal discovery, global compliance, and welfare-first transport logistics.
            </p>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/90">
              <a href="mailto:support@terralegit.com" className="flex items-center gap-2 hover:bg-white/10 transition-colors rounded-md p-2 -m-2" data-testid="link-email">
                <Mail className="h-4 w-4" />
                support@terralegit.com
              </a>
              <a href="tel:+1-800-TERRA" className="flex items-center gap-2 hover:bg-white/10 transition-colors rounded-md p-2 -m-2" data-testid="link-phone">
                <Phone className="h-4 w-4" />
                +1-800-TERRA
              </a>
            </div>
          </div>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Global Operations
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Compliance & Standards</h4>
            <ul className="space-y-2">
              {footerLinks.compliance.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal & Policies</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-wrap justify-center text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              Verified Sellers
            </span>
            <span className="flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5" />
              Documentation-First
            </span>
            <span className="flex items-center gap-1.5">
              <Scale className="h-3.5 w-3.5" />
              Regulatory Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5" />
              Welfare Checkpoints
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TerraLegit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
