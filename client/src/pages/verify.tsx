import { useState } from "react";
import { Link } from "wouter";
import { 
  UserCheck, Mail, Lock, User, MapPin, 
  Building2, ShoppingBag, ArrowRight, CheckCircle 
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const accountTypes = [
  {
    id: "buyer",
    label: "Buyer Account",
    description: "Purchase animals from verified sellers",
    icon: ShoppingBag,
  },
  {
    id: "seller",
    label: "Seller Account",
    description: "List animals for verified buyers",
    icon: Building2,
  },
];

const step1Schema = z.object({
  accountType: z.enum(["buyer", "seller"]),
});

const step2Schema = z.object({
  email: z.string().email("Valid email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const step3Schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  country: z.string().min(2, "Country is required"),
  purpose: z.string().min(1, "Purpose is required"),
});

type Step1Form = z.infer<typeof step1Schema>;
type Step2Form = z.infer<typeof step2Schema>;
type Step3Form = z.infer<typeof step3Schema>;

const purposes = [
  { value: "companion", label: "Companion/Pet" },
  { value: "farm", label: "Farm/Agricultural" },
  { value: "breeding", label: "Breeding Program" },
  { value: "institutional", label: "Institutional/Research" },
  { value: "conservation", label: "Conservation Program" },
];

export default function VerifyPage() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<"buyer" | "seller">("buyer");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const step1Form = useForm<Step1Form>({
    resolver: zodResolver(step1Schema),
    defaultValues: { accountType: "buyer" },
  });

  const step2Form = useForm<Step2Form>({
    resolver: zodResolver(step2Schema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const step3Form = useForm<Step3Form>({
    resolver: zodResolver(step3Schema),
    defaultValues: { fullName: "", country: "", purpose: "" },
  });

  const handleStep1 = (data: Step1Form) => {
    setAccountType(data.accountType);
    setStep(2);
  };

  const handleStep2 = (data: Step2Form) => {
    setStep(3);
  };

  const handleStep3 = async (data: Step3Form) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Account Created",
      description: "Your verification is pending review. We'll notify you once approved.",
    });
    setStep(4);
    setIsSubmitting(false);
  };

  const progress = (step / 4) * 100;

  return (
    <div className="flex-1 flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-lg">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <UserCheck className="h-6 w-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Create & Verify Account</CardTitle>
            <CardDescription>
              {step < 4 ? `Step ${step} of 3 - ` : ""}
              {step === 1 && "Choose your account type"}
              {step === 2 && "Set up your credentials"}
              {step === 3 && "Complete your profile"}
              {step === 4 && "Verification submitted"}
            </CardDescription>
            {step < 4 && (
              <Progress value={progress} className="h-2 mt-4" />
            )}
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <Form {...step1Form}>
                <form onSubmit={step1Form.handleSubmit(handleStep1)} className="space-y-6">
                  <FormField
                    control={step1Form.control}
                    name="accountType"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="space-y-3"
                          >
                            {accountTypes.map((type) => (
                              <div key={type.id}>
                                <RadioGroupItem
                                  value={type.id}
                                  id={type.id}
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor={type.id}
                                  className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover-elevate"
                                  data-testid={`radio-${type.id}`}
                                >
                                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                                    <type.icon className="h-6 w-6 text-muted-foreground" />
                                  </div>
                                  <div className="flex-1">
                                    <p className="font-medium">{type.label}</p>
                                    <p className="text-sm text-muted-foreground">{type.description}</p>
                                  </div>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full gap-2" data-testid="button-next-step1">
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </Form>
            )}

            {step === 2 && (
              <Form {...step2Form}>
                <form onSubmit={step2Form.handleSubmit(handleStep2)} className="space-y-4">
                  <FormField
                    control={step2Form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              className="pl-10"
                              {...field}
                              data-testid="input-verify-email"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={step2Form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              type="password"
                              placeholder="Create a password"
                              className="pl-10"
                              {...field}
                              data-testid="input-verify-password"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={step2Form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              type="password"
                              placeholder="Confirm password"
                              className="pl-10"
                              {...field}
                              data-testid="input-verify-confirm-password"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-3 pt-2">
                    <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1" data-testid="button-back-step2">
                      Back
                    </Button>
                    <Button type="submit" className="flex-1 gap-2" data-testid="button-next-step2">
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </Form>
            )}

            {step === 3 && (
              <Form {...step3Form}>
                <form onSubmit={step3Form.handleSubmit(handleStep3)} className="space-y-4">
                  <FormField
                    control={step3Form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="Your full name"
                              className="pl-10"
                              {...field}
                              data-testid="input-verify-name"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={step3Form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="Your country"
                              className="pl-10"
                              {...field}
                              data-testid="input-verify-country"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={step3Form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose of {accountType === "buyer" ? "Purchase" : "Selling"}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-purpose">
                              <SelectValue placeholder="Select purpose" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {purposes.map((purpose) => (
                              <SelectItem key={purpose.value} value={purpose.value}>
                                {purpose.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-3 pt-2">
                    <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1" data-testid="button-back-step3">
                      Back
                    </Button>
                    <Button type="submit" className="flex-1 gap-2" disabled={isSubmitting} data-testid="button-submit-verify">
                      {isSubmitting ? "Submitting..." : "Submit for Verification"}
                    </Button>
                  </div>
                </form>
              </Form>
            )}

            {step === 4 && (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verification Submitted</h3>
                <p className="text-muted-foreground mb-6">
                  Your account has been created and is pending verification. We'll review your application and notify you within 2-3 business days.
                </p>
                <div className="space-y-3">
                  <Link href="/explore">
                    <Button className="w-full" data-testid="button-explore-while-waiting">
                      Explore While You Wait
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" className="w-full" data-testid="button-back-home">
                      Return to Home
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {step < 4 && (
              <p className="text-xs text-muted-foreground text-center mt-6">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline" data-testid="link-login">
                  Sign in
                </Link>
              </p>
            )}
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
