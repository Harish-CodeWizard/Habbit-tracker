import React from 'react';

export default function ProtectedRoute({ children }) {
  // Add auth logic here
  return <>{children}</>;
}
