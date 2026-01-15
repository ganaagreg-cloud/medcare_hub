-- News Posts Management with Image Storage
-- Location: supabase/migrations/20260113062000_news_posts_storage.sql

-- Create posts table
CREATE TABLE public.posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'Ноорог',
    author TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    image_path TEXT,
    is_featured BOOLEAN DEFAULT false,
    views INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Create index for featured posts query optimization
CREATE INDEX idx_posts_featured_status ON public.posts(is_featured, status, created_at DESC);
CREATE INDEX idx_posts_status_created ON public.posts(status, created_at DESC);

-- Create storage bucket for post images (public bucket)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'post-images',
    'post-images',
    true,  -- PUBLIC bucket for post images
    5242880, -- 5MB limit
    ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/jpg']
);

-- Enable RLS on posts table
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Public can read published posts
CREATE POLICY "public_read_published_posts"
ON public.posts
FOR SELECT
TO public
USING (status = 'Нийтлэгдсэн');

-- RLS Policy: Allow all operations for management (no auth required for demo)
CREATE POLICY "manage_all_posts"
ON public.posts
FOR ALL
TO public
USING (true)
WITH CHECK (true);

-- Storage RLS: Public can view images
CREATE POLICY "public_read_post_images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'post-images');

-- Storage RLS: Anyone can upload images (for demo)
CREATE POLICY "public_upload_post_images"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'post-images');

-- Storage RLS: Anyone can delete images (for demo)
CREATE POLICY "public_delete_post_images"
ON storage.objects
FOR DELETE
TO public
USING (bucket_id = 'post-images');

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_posts_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;

-- Trigger to auto-update updated_at
CREATE TRIGGER posts_updated_at_trigger
    BEFORE UPDATE ON public.posts
    FOR EACH ROW
    EXECUTE FUNCTION public.update_posts_updated_at();

-- Insert sample posts
DO $$
DECLARE
    post1_id UUID := gen_random_uuid();
    post2_id UUID := gen_random_uuid();
    post3_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.posts (id, title, category, status, author, excerpt, content, image_path, is_featured, views, created_at)
    VALUES
        (
            post1_id,
            'Тайхар эмнэлэг шинэ тоног төхөөрөмж нэвтрүүллээ',
            'Мэдээ',
            'Нийтлэгдсэн',
            'Админ',
            'Манай эмнэлэг орчин үеийн зүрхний ЭХО болон 12 сувгийн холтер бичлэгийн тоног төхөөрөмжөөр тоноглогдлоо. Энэ нь өвчтөнүүдэд илүү сайн үйлчилгээ үзүүлэх боломжийг олгоно.',
            'Тайхар эмнэлэг 2026 оны эхээр Америкийн зүрхний ЭХО-ны хамгийн сүүлийн үеийн дэвшилтэт технологи болох өнгөт допплер 2D, 4D ЭХО-г нэвтрүүлж эхэллээ. Мөн 12 сувгийн зүрхний холтер бичлэгийн тоног төхөөрөмж нь 24 цаг, 48 цаг, 72 цаг, 7 хоногийн турш зүрхний үйл ажиллагааг тасралтгүй хянах боломжийг олгож байна.\n\nЭнэхүү шинэ технологи нь зүрх судасны өвчлөлийг эрт илрүүлж, оношлогоог илүү нарийвчлалтай тавих боломжийг бүрдүүлж байна. Манай мэргэжилтэн эмч нар энэхүү тоног төхөөрөмжийг ашиглан өвчтөнүүдэд илүү чанартай үйлчилгээ үзүүлэх болно.\n\nЦаг захиалга: 77072455, 99022455',
            'https://img.rocket.new/generatedImages/rocket_gen_img_15e68271f-1766513916990.png',
            true,
            1250,
            '2026-01-08 10:00:00'
        ),
        (
            post2_id,
            'Өвлийн улиралд эрүүл байх нь',
            'Эрүүл мэндийн зөвлөгөө',
            'Нийтлэгдсэн',
            'Др. Батаа',
            'Өвлийн улиралд ханиад томуу, халдварт өвчнөөс урьдчилан сэргийлэх, дархлаа дэмжих чухал зөвлөмжүүд.',
            'Өвлийн улиралд бидний биед халдварт өвчин туслах эрсдэл нэмэгддэг. Энэ үед эрүүл мэндээ хамгаалахын тулд дараах зүйлсийг анхаарах хэрэгтэй:\n\n1. Дархлаа дэмжих: Витамин C, D ихтэй хүнс хэрэглэх, жимс жимсгэнэ идэх\n2. Бие махбодоо халаах: Дулаан хувцаслах, гадаа удаан байхгүй байх\n3. Гар угаах: Өдөрт олон удаа гараа сайтар угаах\n4. Ус уух: Өдөрт 8-10 аяга ус уух\n5. Амрах: Хангалттай нойр авах, стрессээс зайлсхийх\n\nХэрэв халуурах, ханиах, хоолой өвдөх зэрэг шинж тэмдэг илэрвэл эмчид үзүүлэх хэрэгтэй. Манай эмнэлэгт мэргэжлийн эмч нар таныг хүлээж байна.\n\nЦаг захиалга: 77072455, 99022455',
            'https://img.rocket.new/generatedImages/rocket_gen_img_14206a166-1768282875277.png',
            true,
            890,
            '2026-01-05 14:30:00'
        ),
        (
            post3_id,
            'Үнэгүй эрүүл мэндийн үзлэг энэ долоо хоногт',
            'Олон нийт',
            'Нийтлэгдсэн',
            'Олон нийттэй харилцах баг',
            'Манай эмнэлэг энэ долоо хоногт үнэгүй цусны даралт, сахарын шинжилгээ, эмчийн зөвлөгөө өгөх арга хэмжээ зохион байгуулна.',
            'Тайхар эмнэлэг олон нийтийн эрүүл мэндийг дэмжих зорилгоор дараах долоо хоногт үнэгүй эрүүл мэндийн үзлэгийн арга хэмжээ зохион байгуулна:\n\nҮзлэгийн төрлүүд:\n- Цусны даралт хэмжих\n- Цусны сахарын шинжилгээ\n- Жин, өндөр хэмжих\n- Эмчийн зөвлөгөө\n\nХугацаа: 2026 оны 1 сарын 15-17\nЦаг: 09:00 - 17:00\nГазар: Тайхар эмнэлэг, Эрдэнэт хот\n\nБүх насны иргэд үнэ төлбөргүй оролцох боломжтой. Урьдчилан бүртгүүлэх шаардлагагүй.\n\nДэлгэрэнгүй мэдээлэл: 77072455, 99022455',
            'https://img.rocket.new/generatedImages/rocket_gen_img_18e9d8416-1764661115359.png',
            false,
            456,
            '2026-01-03 09:15:00'
        );
END $$;