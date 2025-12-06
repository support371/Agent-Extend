import { useState } from "react";
import { Link } from "wouter";
import { 
  Package, MapPin, FileText, Upload, Clock, 
  CheckCircle, Plane, Lock, Plus, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ComplianceBanner } from "@/components/compliance-banner";

interface ShipmentSummary {
  id: string;
  title: string;
  origin: string;
  destination: string;
  status: string;
  progress: number;
  documentStatus: string;
  estimatedDeparture: string;
}

const mockShipments: ShipmentSummary[] = [
  {
    id: "SHP-2024-001",
    title: "Highland Cattle - 2 units",
    origin: "United Kingdom",
    destination: "United States",
    status: "documents_pending",
    progress: 40,
    documentStatus: "3 of 5 complete",
    estimatedDeparture: "Jan 15, 2025",
  },
  {
    id: "SHP-2024-002",
    title: "Atlantic Salmon Fingerlings",
    origin: "Norway",
    destination: "Canada",
    status: "in_transit",
    progress: 75,
    documentStatus: "All complete",
    estimatedDeparture: "Dec 28, 2024",
  },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  quote_requested: { label: "Quote Requested", className: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" },
  quote_provided: { label: "Quote Provided", className: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400" },
  documents_pending: { label: "Documents Pending", className: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" },
  documents_approved: { label: "Documents Approved", className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" },
  booking_confirmed: { label: "Booking Confirmed", className: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400" },
  in_transit: { label: "In Transit", className: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400" },
  customs_clearance: { label: "Customs Clearance", className: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400" },
  delivered: { label: "Delivered", className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" },
};

export default function ShippingPage() {
  const [isAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Shipping Portal Access</h1>
            <p className="text-muted-foreground mb-6">
              The shipping portal is available to verified buyers and sellers. Sign in to manage shipments, track deliveries, and upload documents.
            </p>
            <div className="space-y-3">
              <Link href="/login">
                <Button className="w-full" data-testid="button-sign-in-shipping">
                  Sign In
                </Button>
              </Link>
              <Link href="/verify">
                <Button variant="outline" className="w-full" data-testid="button-verify-shipping">
                  Verify Your Account
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <section className="bg-muted/30 border-b py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">Shipping Portal</h1>
                <p className="text-muted-foreground">
                  Manage shipments, track deliveries, and handle documentation
                </p>
              </div>
              <Button className="gap-2" data-testid="button-create-shipment">
                <Plus className="h-4 w-4" />
                Create Shipment
              </Button>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <ComplianceBanner 
              message="All shipments require complete documentation and welfare plan approval before booking confirmation."
              className="mb-8"
            />

            <div className="grid gap-6 md:grid-cols-4 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{mockShipments.length}</p>
                      <p className="text-sm text-muted-foreground">Active Shipments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-muted-foreground">Pending Documents</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <Plane className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">1</p>
                      <p className="text-sm text-muted-foreground">In Transit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-muted-foreground">Completed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Active Shipments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockShipments.map((shipment) => (
                    <div
                      key={shipment.id}
                      className="border rounded-lg p-4 hover-elevate"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-mono text-muted-foreground">
                              {shipment.id}
                            </span>
                            <Badge
                              variant="secondary"
                              className={`text-xs no-default-hover-elevate no-default-active-elevate ${statusConfig[shipment.status]?.className}`}
                            >
                              {statusConfig[shipment.status]?.label}
                            </Badge>
                          </div>
                          <h3 className="font-semibold mb-2">{shipment.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5" />
                              {shipment.origin} → {shipment.destination}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <FileText className="h-3.5 w-3.5" />
                              {shipment.documentStatus}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              Est. {shipment.estimatedDeparture}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <div className="w-full sm:w-32">
                            <Progress value={shipment.progress} className="h-2" />
                            <p className="text-xs text-muted-foreground mt-1 text-center">
                              {shipment.progress}% complete
                            </p>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1" data-testid={`button-view-shipment-${shipment.id}`}>
                            View Details
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
