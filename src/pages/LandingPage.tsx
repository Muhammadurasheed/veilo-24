import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Shield, Users, MessageCircle, Video, BookOpen, ArrowRight, Sparkles, Star, CheckCircle, Mail, Lock, Eye, EyeOff, User, Chrome } from 'lucide-react';
import { useAuth } from '@/contexts/optimized/AuthContextRefactored';
import { toast } from '@/hooks/use-toast';

const LandingPage = () => {
  const { user, login, register, isLoading } = useAuth();
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    realName: '',
    preferredAlias: ''
  });

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Anonymous & Secure",
      description: "Complete privacy protection with encrypted conversations",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Live Sanctuary Sessions",
      description: "Join group discussions in real-time supportive environments",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Expert Consultations",
      description: "Connect with verified mental health professionals",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "AI-Moderated Safety",
      description: "Advanced content moderation ensures respectful interactions",
      gradient: "from-red-500 to-red-600"
    }
  ];

  const stats = [
    { label: "Active Users", value: "10K+", icon: <Users className="h-5 w-5" /> },
    { label: "Verified Experts", value: "500+", icon: <Star className="h-5 w-5" /> },
    { label: "Safe Sessions", value: "50K+", icon: <Shield className="h-5 w-5" /> },
    { label: "Success Rate", value: "95%", icon: <CheckCircle className="h-5 w-5" /> }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (authMode === 'login') {
      const success = await login({
        email: formData.email,
        password: formData.password
      });
      
      if (success) {
        setShowAuthDialog(false);
        setFormData({ email: '', password: '', realName: '', preferredAlias: '' });
      }
    } else {
      if (!formData.realName.trim()) {
        toast({
          title: "Name Required",
          description: "Please enter your real name. This is kept private and secure.",
          variant: "destructive"
        });
        return;
      }

      const success = await register({
        email: formData.email,
        password: formData.password,
        realName: formData.realName,
        preferredAlias: formData.preferredAlias || undefined
      });
      
      if (success) {
        setShowAuthDialog(false);
        setFormData({ email: '', password: '', realName: '', preferredAlias: '' });
      }
    }
  };

  const handleGoogleAuth = () => {
    // TODO: Implement Google OAuth
    toast({
      title: "Coming Soon",
      description: "Google authentication will be available soon!",
    });
  };

  // If user is authenticated, redirect them or show dashboard
  if (user) {
    window.location.href = '/';
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8 mb-20"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full"
            >
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Anonymous Mental Health Platform</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Your Safe Space
              <br />
              <span className="text-primary">Awaits</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect anonymously with mental health experts and supportive communities. 
              Your privacy is protected, your voice is heard, your healing matters.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              onClick={() => {
                setAuthMode('register');
                setShowAuthDialog(true);
              }}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-veilo-lg hover:shadow-veilo-xl px-8 py-6 text-lg transition-all animate-pulse-glow"
            >
              <Heart className="mr-2 h-5 w-5" />
              Start Your Healing Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => {
                setAuthMode('login');
                setShowAuthDialog(true);
              }}
              className="px-8 py-6 text-lg border-primary/30 hover:bg-primary/5"
            >
              <User className="mr-2 h-5 w-5" />
              Sign In
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2 text-primary">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-veilo-xl transition-all duration-300 border border-primary/20 bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground mb-6 group-hover:scale-110 transition-transform shadow-veilo-md">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands who have found support, healing, and community while maintaining complete anonymity.
              </p>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  onClick={() => {
                    setAuthMode('register');
                    setShowAuthDialog(true);
                  }}
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-xl px-12 py-6 text-lg mr-4"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Create Your Sanctuary Account
                </Button>
                <div className="text-sm text-muted-foreground">
                  Your real identity stays private • Your healing journey is anonymous
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Authentication Dialog */}
      <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {authMode === 'login' ? 'Welcome Back' : 'Join Veilo'}
            </DialogTitle>
            <DialogDescription className="text-center">
              {authMode === 'login' 
                ? 'Sign in to continue your healing journey'
                : 'Create your secure account to get started'
              }
            </DialogDescription>
          </DialogHeader>

          <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as 'login' | 'register')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="register">Sign Up</TabsTrigger>
              <TabsTrigger value="login">Sign In</TabsTrigger>
            </TabsList>

            <TabsContent value="register" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="realName">Your Real Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="realName"
                      type="text"
                      placeholder="This stays completely private"
                      value={formData.realName}
                      onChange={(e) => handleInputChange('realName', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Only you can see this. Used for account security.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredAlias">Preferred Anonymous Alias (Optional)</Label>
                  <Input
                    id="preferredAlias"
                    type="text"
                    placeholder="Leave blank for random alias"
                    value={formData.preferredAlias}
                    onChange={(e) => handleInputChange('preferredAlias', e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    This will be your public identity on the platform.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Minimum 8 characters"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Create My Sanctuary Account'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loginEmail">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="loginEmail"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loginPassword">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="loginPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In to Sanctuary'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button 
            variant="outline" 
            onClick={handleGoogleAuth}
            className="w-full"
            disabled={isLoading}
          >
            <Chrome className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>

          <div className="text-center text-xs text-muted-foreground space-y-2">
            <p>
              🔒 Your real identity remains completely private and anonymous on the platform
            </p>
            <p>
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandingPage;