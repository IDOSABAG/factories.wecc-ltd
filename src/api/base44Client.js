// Stub client - BASE44 dependency removed
// This file is kept for compatibility but functionality has been removed

export const base44 = {
  auth: {
    me: async () => null,
    logout: () => {},
    redirectToLogin: () => {}
  },
  functions: {
    invoke: async () => {
      console.warn('base44.functions.invoke is deprecated - use direct API calls instead');
      return null;
    }
  },
  entities: {},
  integrations: {
    Core: {}
  }
};
