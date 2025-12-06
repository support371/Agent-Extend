import { useState } from "react";
import { 
  Building2, Microscope, Trees, Flag, 
  CheckCircle, ArrowRight, Users, Shield, Clock, FileText
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const institutionTypes = [
  { id: "zoo", label: "Zoos & Conservation", icon: Trees },
  { id: "research", label: "Research Facilities", icon: Microscope },
  { id: "farm", label: "Farms & Ranches", icon: Building2 },
  { id: "government", label: "Government Programs", icon: Flag },
];

const benefits = [
  {
    icon: Users,
    title: "Dedicated Account Management",
    description: "Personal account manager for all your acquisition and transport needs.",
  },
  {
    icon: Shield,
    title: "Compliance-Managed Workflows",
    description: "End-to-end documentation handling with regulatory expertise.",
  },
  {
    icon: Clock,
    title: "Priority Processing",
    description: "Expedited document review and booking confirmation.",
  },
  {
    icon: FileText,
    title: "Bulk Transport Solutions",
    description: "Scheduled and recurring shipment management at scale.",
  },
];

const inquirySchema = z.object({
  institutionType: z.string().min(1, "Please select an institution type"),
  organizationName: z.string().min(2, "Organization name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  country: z.string().min(2, "Country is required"),
  message: z.string().min(10, "Please provide details about your requirements"),
});

type InquiryForm = z.infer<typeof inquirySchema>;

export default function InstitutionalPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      institutionType: "",
      organizationName: "",
      contactName: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    },
  });

  const onSubmit = async (data: InquiryForm) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Inquiry Submitted",
      description: "Our institutional team will contact you within 2 business days.",
    });
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <>
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=1920&h=800&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Institutional Services
              </h1>
              <p className="text-lg text-white/90 mb-2">
                Specialized solutions for zoos, research facilities, conservation programs, and government agencies.
              </p>
              <p className="text-sm text-white/70">
                Dedicated support, bulk transport management, and compliance-managed workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Solutions by Institution Type</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tailored services designed for the unique requirements of each institutional category.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {institutionTypes.map((type) => (
                <Card key={type.id} className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <type.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{type.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      Specialized support for {type.label.toLowerCase()} with dedicated compliance workflows.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Institutional Benefits</h2>
              <p className="text-muted-foreground">
                Why leading institutions choose TerraLegit for their animal acquisition needs.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <benefit.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold mb-4">Submit an Inquiry</h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your institution and requirements. Our dedicated team will respond within 2 business days.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="institutionType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Institution Type</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-institution-type">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {institutionTypes.map((type) => (
                                <SelectItem key={type.id} value={type.id}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="organizationName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your institution name" {...field} data-testid="input-org-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} data-testid="input-contact-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                              <Input placeholder="Country" {...field} data-testid="input-country" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="email@institution.org" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 000-0000" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Requirements</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your acquisition requirements, species of interest, and any specific compliance needs..."
                              className="min-h-[120px]"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full gap-2" disabled={isSubmitting} data-testid="button-submit-inquiry">
                      {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {[
                        "Response within 2 business days",
                        "Dedicated account manager assignment",
                        "Customized compliance assessment",
                        "Tailored transport solutions proposal",
                        "Pricing and service agreement",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">Direct Contact</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      For urgent institutional inquiries:
                    </p>
                    <p className="font-medium">institutional@terralegit.com</p>
                    <p className="text-muted-foreground">+1-800-INSTITUTION</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
