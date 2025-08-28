import { Routes, Route, Navigate } from 'react-router-dom';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { AuthProvider } from '@/contexts/optimized/AuthContextNew';
import { UserProvider } from '@/contexts/UserContext';
import { VeiloDataProvider } from '@/contexts/VeiloDataContext';
import { UnifiedStateProvider } from '@/contexts/UnifiedStateContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';
import { PWAProvider } from '@/contexts/PWAContext';
import { PerformanceProvider } from '@/contexts/PerformanceContext';
import { SmartInsightsProvider } from '@/contexts/SmartInsightsContext';

// Components
import Index from '@/pages/Index';
import LandingPageNew from '@/pages/LandingPageNew';
import ExpertRegistration from '@/pages/ExpertRegistration';
import BeaconsList from '@/pages/BeaconsList';
import BookSession from '@/pages/BookSession';
import ExpertProfile from '@/pages/ExpertProfile';
import Chat from '@/pages/Chat';
import SanctuaryInbox from '@/pages/SanctuaryInbox';
import MySanctuaries from '@/pages/MySanctuaries';
import Sanctuary from '@/pages/Sanctuary';
import EnhancedSanctuary from '@/pages/EnhancedSanctuary';
import EnhancedLiveSanctuary from '@/pages/EnhancedLiveSanctuary';
import Feed from '@/pages/Feed';
import Profile from '@/pages/Profile';
import Settings from '@/pages/Settings';
import SessionHub from '@/pages/SessionHub';
import ExpertDashboard from '@/pages/ExpertDashboard';
import AdminPanel from '@/pages/AdminPanel';
import SanctuarySubmit from '@/pages/SanctuarySubmit';
import SanctuaryRecover from '@/pages/SanctuaryRecover';
import Phase4Test from '@/pages/Phase4Test';
import FollowedExperts from '@/pages/FollowedExperts';
import NotFound from '@/pages/NotFound';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <PWAProvider>
          <PerformanceProvider>
            <SmartInsightsProvider>
              <AuthProvider>
                <UserProvider>
                  <ErrorBoundary>
                    <VeiloDataProvider>
                      <ErrorBoundary>
                        <UnifiedStateProvider>
                          <Routes>
                            {/* Public Routes */}
                            <Route path="/landing" element={<LandingPageNew />} />
                            
                            {/* Protected Routes */}
                            <Route path="/" element={<Index />} />
                            <Route path="/expert-registration" element={<ExpertRegistration />} />
                            <Route path="/beacons" element={<BeaconsList />} />
                            <Route path="/book-session" element={<BookSession />} />
                            <Route path="/expert/:id" element={<ExpertProfile />} />
                            <Route path="/chat" element={<Chat />} />
                            <Route path="/sanctuary-inbox" element={<SanctuaryInbox />} />
                            <Route path="/my-sanctuaries" element={<MySanctuaries />} />
                            <Route path="/sanctuary" element={<Sanctuary />} />
                            <Route path="/sanctuary/:id" element={<EnhancedSanctuary />} />
                            <Route path="/live-sanctuary/:id" element={<EnhancedLiveSanctuary />} />
                            <Route path="/feed" element={<Feed />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/sessions" element={<SessionHub />} />
                            <Route path="/dashboard" element={<ExpertDashboard />} />
                            <Route path="/admin" element={<AdminPanel />} />
                            <Route path="/sanctuary-submit" element={<SanctuarySubmit />} />
                            <Route path="/sanctuary-recover" element={<SanctuaryRecover />} />
                            <Route path="/phase4-test" element={<Phase4Test />} />
                            <Route path="/following" element={<FollowedExperts />} />
                            
                            {/* Fallback */}
                            <Route path="*" element={<NotFound />} />
                          </Routes>
                        </UnifiedStateProvider>
                      </ErrorBoundary>
                    </VeiloDataProvider>
                  </ErrorBoundary>
                </UserProvider>
              </AuthProvider>
            </SmartInsightsProvider>
          </PerformanceProvider>
        </PWAProvider>
      </ErrorBoundary>
      
      <Toaster />
      <SonnerToaster />
    </ThemeProvider>
  );
}