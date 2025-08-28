import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/optimized/AuthContextNew';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { 
  Eye, EyeOff, Shield, Users, Sparkles, Mail, Lock, 
  UserPlus, LogIn, Chrome, Heart, MessageCircle, 
  Calendar, UserCheck, Globe
} from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';

export default function LandingPageNew() {
  const { login, register, isLoading, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('signup');
  
  // Form states
  const [signupForm, setSignupForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    realName: '',
    preferredAlias: ''
  });
  
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  // Redirect authenticated users
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupForm.password !== signupForm.confirmPassword) {
      toast({
        title: 'Password Mismatch',
        description: 'Please ensure both passwords match.',
        variant: 'destructive'
      });
      return;
    }

    if (signupForm.password.length < 8) {
      toast({
        title: 'Password Too Short',
        description: 'Password must be at least 8 characters long with uppercase, lowercase, and number.',
        variant: 'destructive'
      });
      return;
    }

    const success = await register({
      email: signupForm.email,
      password: signupForm.password,
      realName: signupForm.realName,
      preferredAlias: signupForm.preferredAlias
    });

    if (success) {
      navigate('/');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await login({
      email: loginForm.email,
      password: loginForm.password
    });

    if (success) {
      navigate('/');
    }
  };

  const handleGoogleAuth = () => {
    window.location.href = '/api/auth/google';
  };

  return (
    <>
      <SEOHead 
        title="Veilo - Anonymous Mental Health Sanctuary"
        description="Join Veilo's secure, anonymous mental health community. Connect with experts, join sanctuaries, and maintain your privacy with shadow identities."
        keywords="mental health, anonymous therapy, online sanctuary, mental wellness, private counseling"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
        {/* Navigation */}
        <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Veilo
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <Globe className="h-4 w-4" />
                <span>Available Worldwide</span>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Shield className="h-4 w-4" />
                  <span>100% Anonymous & Secure</span>
                </motion.div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Veilo
                  </span>
                  <br />
                  <span className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 font-normal">
                    Your Mental Health Sanctuary
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  A safe, anonymous space where you can connect with others, share your thoughts, 
                  and find professional support when you need it most. Your privacy is our priority.
                </p>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: 'Anonymous Identity', desc: 'Your real identity stays private' },
                  { icon: Users, title: 'Safe Community', desc: 'Connect with supportive peers' },
                  { icon: MessageCircle, title: 'Expert Access', desc: 'Professional guidance available' },
                  { icon: Calendar, title: 'Your Dashboard', desc: 'Track your journey securely' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-2 rounded-lg">
                      <feature.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>End-to-End Encrypted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserCheck className="h-4 w-4 text-green-500" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-green-500" />
                  <span>24/7 Available</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Auth Forms */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-2xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                    Join Your Sanctuary
                  </CardTitle>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Create your secure account with anonymous platform identity
                  </p>
                </CardHeader>
                
                <CardContent className="p-6">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="signup" className="text-sm">Sign Up</TabsTrigger>
                      <TabsTrigger value="login" className="text-sm">Sign In</TabsTrigger>
                    </TabsList>

                    <TabsContent value="signup" className="space-y-4">
                      <form onSubmit={handleSignup} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="realName">Your Name</Label>
                          <Input
                            id="realName"
                            type="text"
                            placeholder="Enter your real name"
                            value={signupForm.realName}
                            onChange={(e) => setSignupForm(prev => ({ ...prev, realName: e.target.value }))}
                            required
                            className="h-11"
                          />
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Only you will know your real name - stays completely private
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              value={signupForm.email}
                              onChange={(e) => setSignupForm(prev => ({ ...prev, email: e.target.value }))}
                              required
                              className="pl-10 h-11"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="preferredAlias">Preferred Anonymous Name (Optional)</Label>
                          <Input
                            id="preferredAlias"
                            type="text"
                            placeholder="Leave empty for random name"
                            value={signupForm.preferredAlias}
                            onChange={(e) => setSignupForm(prev => ({ ...prev, preferredAlias: e.target.value }))}
                            className="h-11"
                          />
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            This is how others will see you on the platform
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input
                              id="password"
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Create a strong password"
                              value={signupForm.password}
                              onChange={(e) => setSignupForm(prev => ({ ...prev, password: e.target.value }))}
                              required
                              className="pl-10 pr-10 h-11"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4 text-slate-400" /> : <Eye className="h-4 w-4 text-slate-400" />}
                            </button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input
                              id="confirmPassword"
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Confirm your password"
                              value={signupForm.confirmPassword}
                              onChange={(e) => setSignupForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                              required
                              className="pl-10 h-11"
                            />
                          </div>
                        </div>

                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              <UserPlus className="mr-2 h-4 w-4" />
                              Create Sanctuary Account
                            </>
                          )}
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="login" className="space-y-4">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="loginEmail">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input
                              id="loginEmail"
                              type="email"
                              placeholder="your@email.com"
                              value={loginForm.email}
                              onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                              required
                              className="pl-10 h-11"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="loginPassword">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input
                              id="loginPassword"
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Enter your password"
                              value={loginForm.password}
                              onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                              required
                              className="pl-10 pr-10 h-11"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4 text-slate-400" /> : <Eye className="h-4 w-4 text-slate-400" />}
                            </button>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              <LogIn className="mr-2 h-4 w-4" />
                              Enter Your Sanctuary
                            </>
                          )}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-slate-200 dark:border-slate-700" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white dark:bg-slate-800 px-2 text-slate-500 dark:text-slate-400">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  {/* Google OAuth */}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleGoogleAuth}
                    disabled={isLoading}
                    className="w-full h-12 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    <Chrome className="mr-2 h-5 w-5 text-blue-600" />
                    <span className="text-slate-700 dark:text-slate-300">Continue with Google</span>
                  </Button>

                  {/* Privacy Notice */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
                  >
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Shield className="h-3 w-3 text-green-500" />
                      <span className="font-medium text-green-600 dark:text-green-400">Your Privacy Promise</span>
                    </div>
                    <p>
                      Your real identity stays completely private. On the platform, you'll have an anonymous 
                      identity that others see, while your personal data remains secure and encrypted.
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose Veilo?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Experience mental health support like never before - completely anonymous, 
              yet deeply personal and secure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Complete Anonymity',
                description: 'Your shadow identity keeps you anonymous while allowing you to build meaningful connections and track your progress.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Users,
                title: 'Expert Network',
                description: 'Connect with verified mental health professionals who understand your journey and can provide professional guidance.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: MessageCircle,
                title: 'Safe Sanctuaries',
                description: 'Join or create anonymous group spaces for support, discussion, and healing with others who understand.',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}