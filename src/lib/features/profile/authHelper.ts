import { supabase } from '@/lib/supabase';
import type { AuthResponse, AuthTokenResponsePassword } from '@supabase/supabase-js';

export const supabaseSignUp = async (email: string, password: string): Promise<AuthResponse['data'] | null> => {
  const { error, data } = await supabase.auth.signUp({ email, password });

  if (error) {
    throw error;
  }

  return data;
};

export const supabaseSignIn = async (email: string, password: string): Promise<AuthTokenResponsePassword['data'] | null> => {
  const { error, data } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    throw error;
  }

  return data;
};

export const supabaseSignOut = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }
};
