import { useState } from "react";
import { Link } from "wouter";
import { Search, Filter, Lock, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ComplianceBanner } from "@/components/compliance-banner";
import { ListingCard } from "@/components/listing-card";
import type { Listing, AnimalSpecies, SellerProfile } from "@shared/schema";

const mockListings: Array<{ listing: Listing; species: AnimalSpecies; seller: SellerProfile }> = [
  {
    listing: {
      id: "1",
      speciesId: "1",
      sellerId: "1",
      title: "Highland Cattle Breeding Pair",
      description: "Purebred Highland cattle from certified Scottish bloodlines. Health documents complete.",
      originCountry: "United Kingdom",
      quantity: 2,
      price: 5000,
      status: "approved",
      healthDocStatus: "approved",
      verificationBadges: ["verified_seller", "health_docs"],
      createdAt: new Date(),
      approvedAt: new Date(),
    },
    species: {
      id: "1",
      commonName: "Highland Cattle",
      scientificName: "Bos taurus",
      category: "livestock",
      careLevel: "intermediate",
      description: "Hardy breed known for distinctive long horns.",
      welfareNotes: null,
      careGuidance: null,
      imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=300&fit=crop",
    },
    seller: {
      id: "1",
      userId: "1",
      businessName: "Highland Heritage Farms",
      businessType: "Breeding Farm",
      licenseNumber: "UK-LVS-2024-001",
      permitReferences: null,
      auditStatus: "approved",
      description: "Certified Highland cattle breeder since 1985.",
      country: "United Kingdom",
      verifiedAt: new Date(),
    },
  },
  {
    listing: {
      id: "2",
      speciesId: "3",
      sellerId: "2",
      title: "Atlantic Salmon Fingerlings - 1000 units",
      description: "Disease-free fingerlings from controlled hatchery environment.",
      originCountry: "Norway",
      quantity: 1000,
      price: 2500,
      status: "approved",
      healthDocStatus: "approved",
      verificationBadges: ["verified_seller"],
      createdAt: new Date(),
      approvedAt: new Date(),
    },
    species: {
      id: "3",
      commonName: "Atlantic Salmon",
      scientificName: "Salmo salar",
      category: "aquaculture",
      careLevel: "advanced",
      description: "Prized fish species for aquaculture.",
      welfareNotes: null,
      careGuidance: null,
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    },
    seller: {
      id: "2",
      userId: "2",
      businessName: "Nordic Aqua Systems",
      businessType: "Aquaculture Facility",
      licenseNumber: "NO-AQU-2024-042",
      permitReferences: null,
      auditStatus: "approved",
      description: "Leading salmon hatchery in Scandinavia.",
      country: "Norway",
      verifiedAt: new Date(),
    },
  },
  {
    listing: {
      id: "3",
      speciesId: "4",
      sellerId: "3",
      title: "Captive-Bred Green Tree Python - Adult",
      description: "Healthy adult specimen from established captive breeding program.",
      originCountry: "Germany",
      quantity: 1,
      price: 1200,
      status: "pending_review",
      healthDocStatus: "submitted",
      verificationBadges: ["verified_seller"],
      createdAt: new Date(),
      approvedAt: null,
    },
    species: {
      id: "4",
      commonName: "Green Tree Python",
      scientificName: "Morelia viridis",
      category: "captive_bred_specialty",
      careLevel: "expert",
      description: "Stunning arboreal snake species.",
      welfareNotes: null,
      careGuidance: null,
      imageUrl: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400&h=300&fit=crop",
    },
    seller: {
      id: "3",
      userId: "3",
      businessName: "EuroReptile Breeding",
      businessType: "Specialty Breeder",
      licenseNumber: "DE-REP-2024-089",
      permitReferences: null,
      auditStatus: "approved",
      description: "CITES-registered specialty reptile breeder.",
      country: "Germany",
      verifiedAt: new Date(),
    },
  },
];

const countries = [
  { code: "US", name: "United States" },
  { code: "UK", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
];

export default function MarketplacePage() {
  const [isAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");

  if (!isAuthenticated) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Marketplace Access Required</h1>
            <p className="text-muted-foreground mb-6">
              The marketplace is available to verified users only. Sign in or create an account to view listings and initiate acquisition workflows.
            </p>
            <div className="space-y-3">
              <Link href="/login">
                <Button className="w-full" data-testid="button-sign-in">
                  Sign In
                </Button>
              </Link>
              <Link href="/verify">
                <Button variant="outline" className="w-full" data-testid="button-create-account">
                  Create & Verify Account
                </Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              All transactions require verification and legal eligibility. Listings are subject to destination country regulations.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <section className="bg-muted/30 border-b py-8">
          <div className="max-w-7xl mx-auto px-4">
            <ComplianceBanner message="Listings and shipments require verification and legal eligibility. Ineligible categories are automatically hidden based on your destination." />
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search listings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-listings"
                />
              </div>
              <Select value={destinationCountry} onValueChange={setDestinationCountry}>
                <SelectTrigger className="w-full md:w-[250px]" data-testid="select-destination">
                  <SelectValue placeholder="Select destination country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2" data-testid="button-more-filters">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>

            {!destinationCountry && (
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 rounded-lg p-4 mb-8 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-900 dark:text-amber-200">Select your destination country</p>
                  <p className="text-sm text-amber-800 dark:text-amber-300 mt-1">
                    Choosing a destination will automatically filter listings to show only species eligible for import.
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {mockListings.length} listings
              </p>
              <Select defaultValue="recent">
                <SelectTrigger className="w-[180px]" data-testid="select-sort-listings">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockListings.map(({ listing, species, seller }) => (
                <ListingCard key={listing.id} listing={listing} species={species} seller={seller} />
              ))}
            </div>
          </div>
        </section>
    </>
  );
}
