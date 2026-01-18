import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client only if credentials are available
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabase !== null;
};

// Factory leads table operations
export const factoryLeads = {
  async create(data) {
    if (!supabase) {
      console.warn('Supabase not configured - skipping database save');
      return null;
    }

    const { data: result, error } = await supabase
      .from('factory_leads')
      .insert([{
        full_name: data.full_name,
        phone: data.phone,
        email: data.email,
        product_description: data.product_description,
        stage: data.stage,
        consent: data.consent,
        created_at: new Date().toISOString()
      }])
      .select();

    if (error) {
      console.error('Error saving to Supabase:', error);
      throw error;
    }

    return result;
  },

  async getAll() {
    if (!supabase) {
      console.warn('Supabase not configured');
      return [];
    }

    const { data, error } = await supabase
      .from('factory_leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching from Supabase:', error);
      throw error;
    }

    return data;
  }
};
