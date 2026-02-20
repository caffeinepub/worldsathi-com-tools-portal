import React from 'react';
import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/Button';
import { MessageSquare, Home } from 'lucide-react';

export default function ForumModeration() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Forum Moderation</h1>
            <p className="text-muted-foreground">
              Moderate forum posts and discussions
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
            <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
              <MessageSquare className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle className="text-2xl">Forum Moderation</CardTitle>
              <CardDescription>Moderate community discussions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              This feature is coming soon!
            </p>
            <p className="text-sm text-muted-foreground">
              Forum moderation functionality will be available in a future update.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
