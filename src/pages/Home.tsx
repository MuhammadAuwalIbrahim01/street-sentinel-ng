import React, { useEffect, useState } from 'react';
import { Shield, Lock, EyeOff, Send, ArrowRight, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { reportApi } from '../lib/api';
import { Badge } from '@/components/ui/badge';

const Home: React.FC = () => {
  const [healthStatus, setHealthStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const data = await reportApi.getHealth();
        if (data.status === 'ok') {
          setHealthStatus('online');
        } else {
          setHealthStatus('offline');
        }
      } catch (error) {
        setHealthStatus('offline');
      }
    };
    checkHealth();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-primary/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="outline" className="px-3 py-1 bg-background">
                {healthStatus === 'online' ? (
                  <span className="flex items-center gap-1.5 text-green-600">
                    <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                    System Active
                  </span>
                ) : healthStatus === 'checking' ? (
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Activity size={14} className="animate-spin" />
                    Initializing...
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-destructive">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Local Server Offline
                  </span>
                )}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              A Safer Nigeria Starts with <span className="text-primary italic">Anonymous</span> Reporting
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Report physical crimes, cyber-threats, and community issues securely. 
              No identity required. AI-powered classification ensures your report reaches the right hands fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/report">
                <Button size="lg" className="h-14 px-8 text-lg font-bold gap-2 w-full sm:w-auto shadow-lg shadow-primary/20">
                  <Send size={20} />
                  Report Anonymously
                </Button>
              </Link>
              <Link to="/map">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold gap-2 w-full sm:w-auto bg-background">
                  View Threat Map
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Image / Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-background to-transparent z-10" />
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7db7bbdf-e804-439e-b015-81751df2c75e/safestreet-ng-hero-image-fceebe97-1782242748665.webp" 
            alt="Secure Platform"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Why Use SAFESTREET NG?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform is built on three core pillars: Anonymity, Intelligence, and Action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none bg-muted/50">
            <CardContent className="pt-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <EyeOff size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Total Anonymity</h3>
              <p className="text-muted-foreground">
                We never ask for your name, phone number, or email. Your IP address is never stored. Your safety is our priority.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-muted/50">
            <CardContent className="pt-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Driven</h3>
              <p className="text-muted-foreground">
                Advanced NLP automatically classifies reports and detects priority levels to alert the relevant authorities instantly.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-muted/50">
            <CardContent className="pt-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <Lock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Encrypted</h3>
              <p className="text-muted-foreground">
                All submissions are end-to-end encrypted. We use military-grade security to protect the integrity of every report.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
