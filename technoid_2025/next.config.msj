/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Force Vercel to ignore code style errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 2. Force Vercel to ignore TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // 3. Image Optimization settings
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
  },
};

export default nextConfig;
