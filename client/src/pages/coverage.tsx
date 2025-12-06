import { useState } from "react";
import { Globe, AlertCircle, CheckCircle, XCircle, FileText, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ComplianceBanner } from "@/components/compliance-banner";

interface CountryData {
  code: string;
  name: string;
  allowedCategories: string[];
  restrictedCategories: string[];
  requiredDocs: string[];
  notes?: string;
}

const countries: CountryData[] = [
  {
    code: "US",
    name: "United States",
    allowedCategories: ["livestock", "companion", "aquaculture"],
    restrictedCategories: ["captive_bred_specialty", "conservation"],
    requiredDocs: ["USDA Health Certificate", "Import Permit", "Veterinary Inspection"],
    notes: "CITES permits required for protected species. State-level restrictions may apply.",
  },
  {
    code: "UK",
    name: "United Kingdom",
    allowedCategories: ["livestock", "companion", "aquaculture", "captive_bred_specialty"],
    restrictedCategories: ["conservation"],
    requiredDocs: ["APHA Export Certificate", "Health Certificate", "CITES (if applicable)"],
    notes: "Post-Brexit regulations require additional documentation for EU origins.",
  },
  {
    code: "DE",
    name: "Germany",
    allowedCategories: ["livestock", "companion", "aquaculture", "captive_bred_specialty"],
    restrictedCategories: ["conservation"],
    requiredDocs: ["EU Health Certificate", "TRACES Entry", "Veterinary Border Inspection"],
    notes: "EU harmonized regulations apply. Some exotic species require special permits.",
  },
  {
    code: "AU",
    name: "Australia",
    allowedCategories: ["livestock", "aquaculture"],
    restrictedCategories: ["companion", "captive_bred_specialty", "conservation"],
    requiredDocs: ["BICON Import Permit", "Quarantine Entry", "Health Certificate"],
    notes: "Strict biosecurity measures. Extended quarantine periods may apply.",
  },
  {
    code: "CA",
    name: "Canada",
    allowedCategories: ["livestock", "companion", "aquaculture"],
    restrictedCategories: ["captive_bred_specialty", "conservation"],
    requiredDocs: ["CFIA Health Certificate", "Import Permit", "Veterinary Declaration"],
    notes: "Provincial regulations may impose additional requirements.",
  },
  {
    code: "JP",
    name: "Japan",
    allowedCategories: ["livestock", "companion", "aquaculture"],
    restrictedCategories: ["captive_bred_specialty", "conservation"],
    requiredDocs: ["MAFF Import Permit", "Health Certificate", "Quarantine Inspection"],
    notes: "Rabies-free country status requires specific vaccination protocols for some species.",
  },
];

const categoryLabels: Record<string, string> = {
  livestock: "Livestock",
  companion: "Companion Animals",
  aquaculture: "Aquaculture",
  captive_bred_specialty: "Captive-Bred Specialty",
  conservation: "Conservation Species",
  research: "Research Animals",
};

export default function CoveragePage() {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const countryData = countries.find((c) => c.code === selectedCountry);

  return (
    <>
      <section className="bg-muted/30 border-b py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Coverage & Eligibility</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Species eligibility differs by destination. Select a country to view allowed categories, restrictions, and documentation requirements.
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <ComplianceBanner
              type="info"
              message="Species eligibility differs by destination. This information is for guidance only and does not replace official regulatory consultation."
              className="mb-8"
            />

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Select Destination
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                      <SelectTrigger data-testid="select-country">
                        <SelectValue placeholder="Choose a country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <div className="mt-6 space-y-4">
                      <h4 className="text-sm font-medium">Available Countries</h4>
                      <div className="space-y-2">
                        {countries.map((country) => (
                          <button
                            key={country.code}
                            onClick={() => setSelectedCountry(country.code)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              selectedCountry === country.code
                                ? "bg-primary text-primary-foreground"
                                : "hover-elevate"
                            }`}
                            data-testid={`button-country-${country.code}`}
                          >
                            {country.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                {!selectedCountry ? (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Globe className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Select a Destination</h3>
                      <p className="text-muted-foreground">
                        Choose a country from the list to view eligibility information, allowed categories, and required documentation.
                      </p>
                    </CardContent>
                  </Card>
                ) : countryData ? (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>{countryData.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Allowed Categories
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {countryData.allowedCategories.map((cat) => (
                              <Badge
                                key={cat}
                                variant="secondary"
                                className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 no-default-hover-elevate no-default-active-elevate"
                              >
                                {categoryLabels[cat] || cat}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-600" />
                            Restricted Categories
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {countryData.restrictedCategories.map((cat) => (
                              <Badge
                                key={cat}
                                variant="secondary"
                                className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 no-default-hover-elevate no-default-active-elevate"
                              >
                                {categoryLabels[cat] || cat}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            Restricted categories require special permits or are prohibited for standard import.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          Required Documentation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {countryData.requiredDocs.map((doc, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-xs font-medium text-primary">{index + 1}</span>
                              </div>
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {countryData.notes && (
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-medium mb-1">Important Notes</h4>
                              <p className="text-sm text-muted-foreground">{countryData.notes}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    <div className="flex gap-4">
                      <Button className="gap-2" data-testid="button-check-eligibility-country">
                        Check My Eligibility
                      </Button>
                      <Button variant="outline" className="gap-2" data-testid="button-contact-support-country">
                        Contact Support
                      </Button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
