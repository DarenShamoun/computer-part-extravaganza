const isProd = process.env.NODE_ENV === 'production'; // if true, we are in production mode, which is GitHub Pages

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: isProd ? '/computer-part-extravaganza' : '', // this is the base path of the app to be deployed on GitHub Pages
    assetPrefix: isProd ? '/computer-part-extravaganza/' : '', // this is to prefix the assets with the base path for GitHub Pages
    output: 'export' // this is to export the app as static files
};

export default nextConfig;
