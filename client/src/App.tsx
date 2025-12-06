import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Home from "@/pages/home";
import Explore from "@/pages/explore";
import Marketplace from "@/pages/marketplace";
import Shipping from "@/pages/shipping";
import Welfare from "@/pages/welfare";
import Coverage from "@/pages/coverage";
import Institutional from "@/pages/institutional";
import HowItWorks from "@/pages/how-it-works";
import Login from "@/pages/login";
import Verify from "@/pages/verify";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/explore" component={Explore} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/shipping" component={Shipping} />
      <Route path="/welfare" component={Welfare} />
      <Route path="/coverage" component={Coverage} />
      <Route path="/institutional" component={Institutional} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/login" component={Login} />
      <Route path="/verify" component={Verify} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
