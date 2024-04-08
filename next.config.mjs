/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // this is to export the app as static files
    reactStrictMode: true,
    basePath: '/computer-part-extravaganza', // this is the base path of the app to be deployed on GitHub Pages
    assetPrefix: '/computer-part-extravaganza/', // this is to prefix the assets with the base path for GitHub Pages
};

export default nextConfig;
