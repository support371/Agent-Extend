import { useState } from "react";
import { Search, Filter, X, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SpeciesCard } from "@/components/species-card";
import { ComplianceBanner } from "@/components/compliance-banner";
import type { AnimalSpecies } from "@shared/schema";

const mockSpecies: AnimalSpecies[] = [
  {
    id: "1",
    commonName: "Highland Cattle",
    scientificName: "Bos taurus",
    category: "livestock",
    careLevel: "intermediate",
    description: "Hardy breed known for distinctive long horns and shaggy coat. Excellent for sustainable farming.",
    welfareNotes: "Requires adequate shelter and regular hoof care.",
    careGuidance: "Needs open pasture and supplementary feeding in winter.",
    imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=600&fit=crop",
  },
  {
    id: "2",
    commonName: "German Shepherd",
    scientificName: "Canis lupus familiaris",
    category: "companion",
    careLevel: "intermediate",
    description: "Versatile working dog breed known for intelligence and loyalty. Popular for protection and service.",
    welfareNotes: "Regular exercise and mental stimulation essential.",
    careGuidance: "Daily training sessions and socialization recommended.",
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=600&fit=crop",
  },
  {
    id: "3",
    commonName: "Atlantic Salmon",
    scientificName: "Salmo salar",
    category: "aquaculture",
    careLevel: "advanced",
    description: "Prized fish species for aquaculture. Important for commercial farming and conservation.",
    welfareNotes: "Water quality critical for health and growth.",
    careGuidance: "Requires controlled water temperature and oxygen levels.",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=600&fit=crop",
  },
  {
    id: "4",
    commonName: "Green Tree Python",
    scientificName: "Morelia viridis",
    category: "captive_bred_specialty",
    careLevel: "expert",
    description: "Stunning arboreal snake species. Captive-bred specimens available for qualified keepers.",
    welfareNotes: "Strict temperature and humidity requirements.",
    careGuidance: "Specialized arboreal enclosure with misting system needed.",
    imageUrl: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400&h=600&fit=crop",
  },
  {
    id: "5",
    commonName: "Ring-tailed Lemur",
    scientificName: "Lemur catta",
    category: "conservation",
    careLevel: "expert",
    description: "Iconic Madagascar primate. Available only to accredited institutions for conservation programs.",
    welfareNotes: "Social species requiring group housing.",
    careGuidance: "Institutional facilities only. Strict regulatory requirements.",
    imageUrl: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=400&h=600&fit=crop",
  },
  {
    id: "6",
    commonName: "Laboratory Mouse",
    scientificName: "Mus musculus",
    category: "research",
    careLevel: "beginner",
    description: "Standard laboratory rodent. Available for licensed research facilities only.",
    welfareNotes: "Clean, controlled environment essential.",
    careGuidance: "Specific strains available for various research applications.",
    imageUrl: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=600&fit=crop",
  },
];

const categories = [
  { id: "livestock", label: "Livestock" },
  { id: "companion", label: "Companion" },
  { id: "aquaculture", label: "Aquaculture" },
  { id: "captive_bred_specialty", label: "Captive-Bred Specialty" },
  { id: "conservation", label: "Conservation" },
  { id: "research", label: "Research" },
];

const careLevels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
  { id: "expert", label: "Expert" },
];

const regions = [
  { id: "NA", label: "North America" },
  { id: "EU", label: "Europe" },
  { id: "APAC", label: "Asia Pacific" },
  { id: "LATAM", label: "Latin America" },
  { id: "MEA", label: "Middle East & Africa" },
];

function FilterSidebar({
  selectedCategories,
  setSelectedCategories,
  selectedCareLevels,
  setSelectedCareLevels,
  selectedRegion,
  setSelectedRegion,
}: {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedCareLevels: string[];
  setSelectedCareLevels: (levels: string[]) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}) {
  const toggleCategory = (id: string) => {
    setSelectedCategories(
      selectedCategories.includes(id)
        ? selectedCategories.filter((c) => c !== id)
        : [...selectedCategories, id]
    );
  };

  const toggleCareLevel = (id: string) => {
    setSelectedCareLevels(
      selectedCareLevels.includes(id)
        ? selectedCareLevels.filter((c) => c !== id)
        : [...selectedCareLevels, id]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
                data-testid={`checkbox-category-${category.id}`}
              />
              <Label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Region</h3>
        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger data-testid="select-region">
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            {regions.map((region) => (
              <SelectItem key={region.id} value={region.id}>
                {region.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Care Level</h3>
        <div className="space-y-2">
          {careLevels.map((level) => (
            <div key={level.id} className="flex items-center gap-2">
              <Checkbox
                id={`level-${level.id}`}
                checked={selectedCareLevels.includes(level.id)}
                onCheckedChange={() => toggleCareLevel(level.id)}
                data-testid={`checkbox-level-${level.id}`}
              />
              <Label htmlFor={`level-${level.id}`} className="text-sm cursor-pointer">
                {level.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted/50 rounded-md p-3">
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <p>Availability status and acquisition pathways require account verification.</p>
        </div>
      </div>
    </div>
  );
}

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCareLevels, setSelectedCareLevels] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredSpecies = mockSpecies.filter((species) => {
    const matchesSearch =
      species.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      species.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(species.category);
    const matchesCareLevel =
      selectedCareLevels.length === 0 || selectedCareLevels.includes(species.careLevel);
    return matchesSearch && matchesCategory && matchesCareLevel;
  });

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedCareLevels([]);
    setSelectedRegion("all");
    setSearchQuery("");
  };

  const hasFilters =
    selectedCategories.length > 0 ||
    selectedCareLevels.length > 0 ||
    selectedRegion !== "all" ||
    searchQuery !== "";

  return (
    <>
      <section className="bg-muted/30 border-b py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Explore Animals</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Browse our curated catalog of species. Education-first exploration with region-aware eligibility signals.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-8">
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search species..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                    data-testid="input-search-species"
                  />
                </div>
                <FilterSidebar
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  selectedCareLevels={selectedCareLevels}
                  setSelectedCareLevels={setSelectedCareLevels}
                  selectedRegion={selectedRegion}
                  setSelectedRegion={setSelectedRegion}
                />
                {hasFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="w-full" data-testid="button-clear-filters">
                    <X className="h-4 w-4 mr-2" />
                    Clear Filters
                  </Button>
                )}
              </div>
            </aside>

            <div className="flex-1">
              <div className="lg:hidden flex gap-2 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search species..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                    data-testid="input-search-species-mobile"
                  />
                </div>
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" data-testid="button-mobile-filters">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterSidebar
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        selectedCareLevels={selectedCareLevels}
                        setSelectedCareLevels={setSelectedCareLevels}
                        selectedRegion={selectedRegion}
                        setSelectedRegion={setSelectedRegion}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredSpecies.length} species
                </p>
                <Select defaultValue="name">
                  <SelectTrigger className="w-[180px]" data-testid="select-sort">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="name-desc">Name Z-A</SelectItem>
                    <SelectItem value="care-level">Care Level</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {filteredSpecies.length === 0 ? (
                <div className="text-center py-16">
                  <Search className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No species found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search query.
                  </p>
                  <Button variant="outline" onClick={clearFilters} data-testid="button-clear-filters-empty">
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {filteredSpecies.map((species) => (
                    <SpeciesCard key={species.id} species={species} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
    </>
  );
}