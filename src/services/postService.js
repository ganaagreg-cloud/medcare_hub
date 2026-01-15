import { supabase, isSupabaseConfigured } from '../lib/supabase';

export const postService = {
  // Get all posts
  async getAll() {
    if (!isSupabaseConfigured) {
      console.warn('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env file.');
      return [];
    }
    
    const { data, error } = await supabase?.from('posts')?.select('*')?.order('created_at', { ascending: false });
    
    if (error) throw error;
    
    // Convert snake_case to camelCase
    return data?.map(row => ({
      id: row?.id,
      title: row?.title,
      category: row?.category,
      status: row?.status,
      author: row?.author,
      excerpt: row?.excerpt,
      content: row?.content,
      imagePath: row?.image_path,
      isFeatured: row?.is_featured,
      views: row?.views,
      date: row?.created_at?.split('T')?.[0],
      createdAt: row?.created_at,
      updatedAt: row?.updated_at
    })) || [];
  },

  // Get published posts only
  async getPublished() {
    if (!isSupabaseConfigured) {
      console.warn('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env file.');
      return [];
    }
    
    const { data, error } = await supabase?.from('posts')?.select('*')?.eq('status', 'Нийтлэгдсэн')?.order('is_featured', { ascending: false })?.order('created_at', { ascending: false });
    
    if (error) throw error;
    
    return data?.map(row => ({
      id: row?.id,
      title: row?.title,
      category: row?.category,
      status: row?.status,
      author: row?.author,
      excerpt: row?.excerpt,
      content: row?.content,
      imagePath: row?.image_path,
      isFeatured: row?.is_featured,
      views: row?.views,
      date: row?.created_at?.split('T')?.[0],
      createdAt: row?.created_at,
      updatedAt: row?.updated_at
    })) || [];
  },

  // Create new post
  async create(postData) {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env file.');
    }
    
    const { data, error } = await supabase?.from('posts')?.insert({
        title: postData?.title,
        category: postData?.category,
        status: postData?.status,
        author: postData?.author,
        excerpt: postData?.excerpt,
        content: postData?.content,
        image_path: postData?.imagePath,
        is_featured: postData?.isFeatured || false
      })?.select()?.single();
    
    if (error) throw error;
    
    return {
      id: data?.id,
      title: data?.title,
      category: data?.category,
      status: data?.status,
      author: data?.author,
      excerpt: data?.excerpt,
      content: data?.content,
      imagePath: data?.image_path,
      isFeatured: data?.is_featured,
      views: data?.views,
      date: data?.created_at?.split('T')?.[0],
      createdAt: data?.created_at,
      updatedAt: data?.updated_at
    };
  },

  // Update existing post
  async update(id, postData) {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env file.');
    }
    
    const { data, error } = await supabase?.from('posts')?.update({
        title: postData?.title,
        category: postData?.category,
        status: postData?.status,
        author: postData?.author,
        excerpt: postData?.excerpt,
        content: postData?.content,
        image_path: postData?.imagePath,
        is_featured: postData?.isFeatured
      })?.eq('id', id)?.select()?.single();
    
    if (error) throw error;
    
    return {
      id: data?.id,
      title: data?.title,
      category: data?.category,
      status: data?.status,
      author: data?.author,
      excerpt: data?.excerpt,
      content: data?.content,
      imagePath: data?.image_path,
      isFeatured: data?.is_featured,
      views: data?.views,
      date: data?.created_at?.split('T')?.[0],
      createdAt: data?.created_at,
      updatedAt: data?.updated_at
    };
  },

  // Delete post
  async delete(id) {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env file.');
    }
    
    const { error } = await supabase?.from('posts')?.delete()?.eq('id', id);
    
    if (error) throw error;
  },

  // Upload image to storage
  async uploadImage(file) {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env file.');
    }
    
    const fileExt = file?.name?.split('.')?.pop();
    const fileName = `${Date.now()}-${Math.random()?.toString(36)?.substring(7)}.${fileExt}`;
    const filePath = `posts/${fileName}`;

    const { error: uploadError } = await supabase?.storage?.from('post-images')?.upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) throw uploadError;

    // Get public URL
    const { data } = supabase?.storage?.from('post-images')?.getPublicUrl(filePath);

    return {
      filePath,
      publicUrl: data?.publicUrl
    };
  },

  // Delete image from storage
  async deleteImage(filePath) {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env file.');
    }
    
    if (!filePath) return;
    
    // Extract path from full URL if needed
    const path = filePath?.includes('post-images/') 
      ? filePath?.split('post-images/')?.[1] 
      : filePath;

    const { error } = await supabase?.storage?.from('post-images')?.remove([path]);

    if (error) throw error;
  }
};