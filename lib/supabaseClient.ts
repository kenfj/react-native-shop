import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const apiUrl = process.env.EXPO_PUBLIC_API_URL!;
const apiKey = process.env.EXPO_PUBLIC_API_KEY!;

const supabaseUrl = apiUrl;
const supabaseAnonKey = apiKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
