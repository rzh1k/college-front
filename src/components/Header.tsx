
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Don't show header on dashboard pages
  if (location.pathname.startsWith('/dashboard') || 
      location.pathname.startsWith('/courses') ||
      location.pathname.startsWith('/register') ||
      location.pathname.startsWith('/profile')) {
    return null;
  }
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#0A3161" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
              </svg>
              <span className="text-2xl font-bold text-university-primary">Academica</span>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-university-primary" />
          </button>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-university-primary hover:text-university-accent font-medium transition-colors duration-200">Home</a>
            <a href="/courses" className="text-university-primary hover:text-university-accent font-medium transition-colors duration-200">Courses</a>
            <a href="/about" className="text-university-primary hover:text-university-accent font-medium transition-colors duration-200">About</a>
            <a href="/contact" className="text-university-primary hover:text-university-accent font-medium transition-colors duration-200">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => navigate("/dashboard")}
              variant="outline" 
              className="border-university-primary text-university-primary hover:bg-university-primary hover:text-white transition-all duration-300"
            >
              Student Portal
            </Button>
            <Button 
              onClick={() => navigate("/courses")}
              className="bg-university-primary text-white hover:bg-university-primary/90 transition-all duration-300"
            >
              Browse Courses
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="text-university-primary hover:text-university-accent font-medium p-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/courses" 
                className="text-university-primary hover:text-university-accent font-medium p-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </a>
              <a 
                href="/about" 
                className="text-university-primary hover:text-university-accent font-medium p-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/contact" 
                className="text-university-primary hover:text-university-accent font-medium p-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button 
                  onClick={() => {
                    navigate("/dashboard");
                    setMobileMenuOpen(false);
                  }}
                  variant="outline" 
                  className="border-university-primary text-university-primary hover:bg-university-primary hover:text-white w-full transition-all duration-300"
                >
                  Student Portal
                </Button>
                <Button 
                  onClick={() => {
                    navigate("/courses");
                    setMobileMenuOpen(false);
                  }}
                  className="bg-university-primary text-white hover:bg-university-primary/90 w-full transition-all duration-300"
                >
                  Browse Courses
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
