/** @type {import('next').NextConfig} */
const nextConfig = {// Configuración general
    reactStrictMode: true,
    swcMinify: true,

    // Configuración de imágenes
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'flowbite.com',
        },
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
        },
      ],
    },
  };

export default nextConfig;
