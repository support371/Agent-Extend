import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  eligibilityNote?: string;
}

const categories: Category[] = [
  {
    id: "livestock",
    name: "Livestock",
    description: "Farm animals for agricultural purposes",
    imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=300&fit=crop",
  },
  {
    id: "companion",
    name: "Companion",
    description: "Pets and domestic animals",
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
    eligibilityNote: "Regional restrictions apply",
  },
  {
    id: "aquaculture",
    name: "Aquaculture",
    description: "Fish and aquatic species",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
  },
  {
    id: "captive_bred_specialty",
    name: "Captive-Bred Specialty",
    description: "Specialty species from certified breeders",
    imageUrl: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400&h=300&fit=crop",
    eligibilityNote: "Eligibility-gated",
  },
];

interface CategoryGridProps {
  className?: string;
}

export function CategoryGrid({ className }: CategoryGridProps) {
  return (
    <div className={cn("grid grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/explore?category=${category.id}`}
          className="group relative overflow-hidden rounded-lg aspect-[4/3]"
          data-testid={`link-category-${category.id}`}
        >
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-semibold text-white mb-1">{category.name}</h3>
            <p className="text-sm text-white/80 line-clamp-1">{category.description}</p>
            {category.eligibilityNote && (
              <span className="inline-block mt-2 text-xs bg-white/20 text-white px-2 py-0.5 rounded">
                {category.eligibilityNote}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
