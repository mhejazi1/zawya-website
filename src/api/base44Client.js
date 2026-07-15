// Mock base44 client - no Base44 dependencies
export const base44 = {
  auth: {
    me: async () => {
      // Return mock user data from localStorage
      const savedUser = localStorage.getItem('zawya-user');
      if (savedUser) {
        return JSON.parse(savedUser);
      }
      throw new Error('Not authenticated');
    },
    logout: (redirectUrl) => {
      localStorage.removeItem('zawya-user');
      if (redirectUrl && redirectUrl !== 'undefined') {
        window.location.href = '/';
      }
    },
    redirectToLogin: (returnUrl) => {
      window.location.href = '/login';
    }
  }
};