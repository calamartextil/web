'use server';

import { permanentRedirect } from 'next/navigation';
import { revalidateTag } from 'next/cache';

export async function updateUsername(username: string, formData: FormData) {
  try {
    // Call database
    console.log('server')
  } catch (error) {
    // Handle errors
  }

  revalidateTag('username'); // Update all references to the username
  permanentRedirect(`/profile/${username}`); // Navigate to the new user profile
}
