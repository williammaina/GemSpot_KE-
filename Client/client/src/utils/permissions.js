export const ROLES = {
  USER: 'user',
  BUSINESS_OWNER: 'business_owner',
  ADMIN: 'admin',
};

/**
 * Checks if a user object possesses a specific administrative or owner role.
 */
export const hasPermission = (user, requiredRole) => {
  if (!user || !user.role) return false;

  if (user.role === ROLES.ADMIN) return true; // Admins override everything

  if (requiredRole === ROLES.BUSINESS_OWNER) {
    return user.role === ROLES.BUSINESS_OWNER || user.role === ROLES.ADMIN;
  }

  return user.role === requiredRole;
};