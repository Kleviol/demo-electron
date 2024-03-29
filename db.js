// Import Supabase client
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
// Function to authenticate user against the admin table

async function authenticate(username, password) {
  try {
    // Query the admin table to check if the provided username and password match
    const { data, error } = await supabase
      .from(admin)
      .select(id)
      .eq('username', username)
      .eq('password', password)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    // If data is returned, authentication is successful
    // If data is null, authentication failed
    return data !== null;
  } catch (error) {
    throw new Error('An error occurred during authentication: ' + error.message);
  }
}

// Export the authenticate function
module.exports = {
  authenticate
};
