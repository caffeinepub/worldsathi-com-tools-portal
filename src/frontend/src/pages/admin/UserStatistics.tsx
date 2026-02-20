import React from 'react';
import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/Button';
import { BarChart3, Home } from 'lucide-react';

export default function UserStatistics() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">User Statistics</h1>
            <p className="text-muted-foreground">
              View analytics and user metrics
            </p>
          </div>
          <Button variant="secondary" asChild>
            <Link to="/admin/dashboard">
              <Home className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
              <BarChart3 className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle className="text-2xl">User Statistics</CardTitle>
              <CardDescription>Analytics and insights</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              This feature is coming soon!
            </p>
            <p className="text-sm text-muted-foreground">
              User statistics and analytics will be available in a future update.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
