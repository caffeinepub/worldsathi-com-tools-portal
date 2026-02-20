import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile, useSaveCallerUserProfile } from '../hooks/useQueries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calculator, Zap, FileText, Clock, Award, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const { identity, login, clear, loginStatus } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();
  const saveProfile = useSaveCallerUserProfile();
  
  const [displayName, setDisplayName] = useState('');
  const [showProfileSetup, setShowProfileSetup] = useState(false);

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  // Show profile setup modal only when authenticated, profile is fetched, and no profile exists
  useEffect(() => {
    if (isAuthenticated && !profileLoading && isFetched && userProfile === null) {
      setShowProfileSetup(true);
    }
  }, [isAuthenticated, profileLoading, isFetched, userProfile]);

  const handleSaveProfile = async () => {
    if (displayName.trim()) {
      await saveProfile.mutateAsync({
        displayName: displayName.trim(),
        bio: '',
        favoriteTools: [],
        memberships: [],
        badges: [],
      });
      setShowProfileSetup(false);
    }
  };

  const handleLogout = async () => {
    await clear();
    // Clear any cached data if needed
  };

  if (!isAuthenticated) {
    return (
      <div className="container py-16">
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>Welcome to Your Dashboard</CardTitle>
            <CardDescription>
              Sign in with Internet Identity to access your personalized dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="primary" 
              onClick={login} 
              disabled={isLoggingIn}
              className="w-full"
            >
              {isLoggingIn ? 'Signing in...' : 'Sign In with Internet Identity'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="container py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back, {userProfile?.displayName || 'User'}!
            </h1>
            <p className="text-muted-foreground">
              Your productivity dashboard
            </p>
          </div>
          <Button variant="secondary" onClick={handleLogout}>
            Sign Out
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Saved Tools</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userProfile?.favoriteTools.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                Tools in your collection
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Usage This Week</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                Tools used this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userProfile?.badges.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                Achievement badges
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Jump to your most-used tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Link to="/tools/calculators/percentage-calculator">
                <Button variant="secondary" className="w-full justify-start">
                  <Calculator className="mr-2 h-4 w-4" />
                  Percentage Calculator
                </Button>
              </Link>
              <Link to="/tools/generators/password-generator">
                <Button variant="secondary" className="w-full justify-start">
                  <Zap className="mr-2 h-4 w-4" />
                  Password Generator
                </Button>
              </Link>
              <Link to="/tools/analyzers/text-analyzer">
                <Button variant="secondary" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Text Analyzer
                </Button>
              </Link>
              <Link to="/tools/productivity/pomodoro-timer">
                <Button variant="secondary" className="w-full justify-start">
                  <Clock className="mr-2 h-4 w-4" />
                  Pomodoro Timer
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Setup Dialog */}
      <Dialog open={showProfileSetup} onOpenChange={setShowProfileSetup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Profile</DialogTitle>
            <DialogDescription>
              Let's personalize your experience. What should we call you?
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                placeholder="Enter your name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
            <Button 
              variant="primary" 
              onClick={handleSaveProfile}
              disabled={!displayName.trim() || saveProfile.isPending}
              className="w-full"
            >
              {saveProfile.isPending ? 'Saving...' : 'Save Profile'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
