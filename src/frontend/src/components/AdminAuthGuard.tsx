import React, { ReactNode } from 'react';
import { Navigate } from '@tanstack/react-router';
import { useAdminAuthContext } from '../contexts/AdminAuthContext';

interface AdminAuthGuardProps {
  children: ReactNode;
}

export function AdminAuthGuard({ children }: AdminAuthGuardProps) {
  const { isAuthenticated } = useAdminAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return <>{children}</>;
}
