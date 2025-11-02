// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bzooqvkuqnxzzlgjkpqe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6b29xdmt1cW54enpsZ2prcHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NTYzMTEsImV4cCI6MjA3NzUzMjMxMX0.m-fi4GPZHO-z96AHP1AGJpBgmr69tGAX5UFomqNwsTs';
export const supabase = createClient(supabaseUrl, supabaseKey);