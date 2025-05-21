
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const navigate = useNavigate();
  const [authType, setAuthType] = useState<"login" | "register">("login");

  return (
    <div className="flex flex-col min-h-screen bg-university-light">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - University info */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold text-university-primary mb-6 animate-fade-in">
              Welcome to Academica University
            </h1>
            <p className="text-lg mb-6 text-slate-700 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Where knowledge meets opportunity. Discover a world-class education that prepares you 
              for the challenges of tomorrow in a supportive and innovative environment.
            </p>
            <div className="space-y-4">
              <div className="flex items-center animate-slide-in" style={{ animationDelay: "200ms" }}>
                <div className="bg-university-primary rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-university-primary">Excellence in Education</h3>
                  <p className="text-slate-600">Internationally recognized faculty and programs</p>
                </div>
              </div>
              
              <div className="flex items-center animate-slide-in" style={{ animationDelay: "300ms" }}>
                <div className="bg-university-secondary rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-university-primary">Vibrant Community</h3>
                  <p className="text-slate-600">Join a diverse and supportive student body</p>
                </div>
              </div>
              
              <div className="flex items-center animate-slide-in" style={{ animationDelay: "400ms" }}>
                <div className="bg-university-accent rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-university-primary">Career Success</h3>
                  <p className="text-slate-600">Outstanding job placement and alumni network</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 animate-scale-in" style={{ animationDelay: "500ms" }}>
              <Button 
                onClick={() => navigate("/courses")} 
                className="bg-university-primary hover:bg-university-primary/90 text-white transition-all duration-300 hover:scale-105"
              >
                Explore Our Programs
              </Button>
            </div>
          </div>
          
          {/* Right side - Auth form */}
          <div className="order-1 lg:order-2 bg-white p-6 rounded-lg shadow-lg animate-scale-in">
            <Tabs defaultValue="login" className="w-full" onValueChange={(value) => setAuthType(value as "login" | "register")}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger 
                  value="login"
                  className="transition-all duration-300 hover:bg-university-primary/20"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger 
                  value="register"
                  className="transition-all duration-300 hover:bg-university-primary/20"
                >
                  Register
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="animate-fade-in">
                <AuthForm type="login" />
              </TabsContent>
              <TabsContent value="register" className="animate-fade-in">
                <AuthForm type="register" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
