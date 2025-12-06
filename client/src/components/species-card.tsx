import { Link } from "wouter";
import { Lock, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CareLevelBadge } from "./care-level-badge";
import type { AnimalSpecies } from "@shared/schema";

interface SpeciesCardProps {
  species: AnimalSpecies;
}

const placeholderImages: Record<string, string> = {
  livestock: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=600&fit=crop",
  companion: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=600&fit=crop",
  aquaculture: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=600&fit=crop",
  captive_bred_specialty: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400&h=600&fit=crop",
  conservation: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=400&h=600&fit=crop",
  research: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=600&fit=crop",
};

export function SpeciesCard({ species }: SpeciesCardProps) {
  const imageUrl = species.imageUrl || placeholderImages[species.category] || placeholderImages.livestock;

  return (
    <Card className="overflow-hidden group" data-testid={`card-species-${species.id}`}>
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={species.commonName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <CareLevelBadge level={species.careLevel as "beginner" | "intermediate" | "advanced" | "expert"} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-semibold text-white mb-1" data-testid={`text-species-name-${species.id}`}>
            {species.commonName}
          </h3>
          <p className="text-sm text-white/80 italic">{species.scientificName}</p>
        </div>
      </div>
      <CardContent className="p-4 space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {species.description || "Discover more about this species and its care requirements."}
        </p>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 rounded-md px-2 py-1.5">
          <Info className="h-3.5 w-3.5" />
          <span className="italic">Eligibility varies by region</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" />
          <span>Login required for acquisition pathways</span>
        </div>
        <div className="flex gap-2 pt-2">
          <Link href={`/explore/${species.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full" data-testid={`button-view-species-${species.id}`}>
              Learn More
            </Button>
          </Link>
          <Link href="/verify">
            <Button size="sm" data-testid={`button-check-eligibility-${species.id}`}>
              Check Eligibility
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
