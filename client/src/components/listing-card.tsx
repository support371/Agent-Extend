import { Link } from "wouter";
import { MapPin, FileCheck, Shield, AlertCircle } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VerificationBadge } from "./verification-badge";
import { DocumentStatus } from "./document-status";
import type { Listing, AnimalSpecies, SellerProfile } from "@shared/schema";

interface ListingCardProps {
  listing: Listing;
  species: AnimalSpecies;
  seller: SellerProfile;
}

const placeholderImages: Record<string, string> = {
  livestock: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=300&fit=crop",
  companion: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
  aquaculture: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
  captive_bred_specialty: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400&h=300&fit=crop",
  conservation: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=400&h=300&fit=crop",
  research: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=300&fit=crop",
};

export function ListingCard({ listing, species, seller }: ListingCardProps) {
  const imageUrl = species.imageUrl || placeholderImages[species.category] || placeholderImages.livestock;
  const isApproved = listing.status === "approved";
  const healthDocsComplete = listing.healthDocStatus === "approved";

  return (
    <Card className="overflow-hidden" data-testid={`card-listing-${listing.id}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          {seller.auditStatus === "approved" && (
            <VerificationBadge type="verified_seller" size="sm" />
          )}
          {listing.status === "pending_review" && (
            <Badge variant="secondary" className="text-xs">
              <AlertCircle className="h-3 w-3 mr-1" />
              Approval Required
            </Badge>
          )}
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
          <MapPin className="h-3 w-3" />
          <span>{listing.originCountry}</span>
        </div>
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg leading-tight" data-testid={`text-listing-title-${listing.id}`}>
            {listing.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {species.commonName} · {listing.quantity} {listing.quantity === 1 ? "animal" : "animals"}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Health Documentation</span>
          <DocumentStatus status={listing.healthDocStatus as any} size="sm" />
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span>{seller.businessName}</span>
        </div>

        {listing.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {listing.description}
          </p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link href={`/marketplace/${listing.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full" data-testid={`button-view-listing-${listing.id}`}>
            View Details
          </Button>
        </Link>
        <Button size="sm" data-testid={`button-initiate-eligibility-${listing.id}`}>
          Initiate Eligibility Check
        </Button>
      </CardFooter>
    </Card>
  );
}
