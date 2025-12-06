import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Globe, MapPin, LogIn, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/shipping", label: "Shipping" },
  { href: "/welfare", label: "Welfare" },
  { href: "/coverage", label: "Coverage" },
  { href: "/institutional", label: "Institutions" },
  { href: "/how-it-works", label: "How It Works" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
];

const regions = [
  { code: "NA", label: "North America" },
  { code: "EU", label: "Europe" },
  { code: "APAC", label: "Asia Pacific" },
  { code: "LATAM", label: "Latin America" },
  { code: "MEA", label: "Middle East & Africa" },
];

export function Header() {
  const [location] = useLocation();
  const [language, setLanguage] = useState("en");
  const [region, setRegion] = useState("NA");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="bg-muted/50 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-muted-foreground" data-testid="button-language-selector">
                  <Globe className="h-3.5 w-3.5" />
                  <span>{languages.find(l => l.code === language)?.label}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    data-testid={`menu-item-language-${lang.code}`}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-muted-foreground" data-testid="button-region-selector">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{regions.find(r => r.code === region)?.label}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {regions.map((reg) => (
                  <DropdownMenuItem
                    key={reg.code}
                    onClick={() => setRegion(reg.code)}
                    data-testid={`menu-item-region-${reg.code}`}
                  >
                    {reg.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="text-xs text-muted-foreground hidden sm:block">
            Eligibility varies by destination
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="font-semibold text-xl hidden sm:block">TerraLegit</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "text-sm",
                    location === link.href && "bg-accent"
                  )}
                  data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm" className="hidden sm:flex gap-2" data-testid="button-login">
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
            </Link>
            <Link href="/verify">
              <Button size="sm" className="hidden sm:flex" data-testid="button-verify">
                Verify Account
              </Button>
            </Link>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start",
                          location === link.href && "bg-accent"
                        )}
                        data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                  <div className="border-t my-4" />
                  <Link href="/login" onClick={() => setMobileOpen(false)}>
                    <Button variant="outline" className="w-full gap-2" data-testid="mobile-button-login">
                      <LogIn className="h-4 w-4" />
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/verify" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full" data-testid="mobile-button-verify">
                      Verify Account
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
