import React from 'react';
import { Shield, MapPin, BarChart3, Bell, Lock, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className="border-b sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <Shield size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              SAFESTREET <span className="text-primary">NG</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/map" className="hover:text-primary transition-colors">Threat Map</Link>
            <Link to="/dashboard" className="hover:text-primary transition-colors">Intelligence</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/report">
              <Button size="sm" className="font-semibold">
                Report Incident
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield size={20} className="text-primary" />
              <span className="font-bold tracking-tight">SAFESTREET NG</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Nigeria's leading anonymous crime and cyber-threat reporting platform. Empowering citizens to build safer communities through technology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/report" className="hover:text-primary transition-colors">Report Incident</Link></li>
              <li><Link to="/map" className="hover:text-primary transition-colors">Incident Map</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Statistics</Link></li>
              <li><Link to="/admin" className="hover:text-primary transition-colors">Admin Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Security</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Emergency Contacts</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} SAFESTREET NG. Designed for a safer Nigeria.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
