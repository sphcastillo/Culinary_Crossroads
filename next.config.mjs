/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'links.papareact.com',
            },
            {
                protocol: 'https',
                hostname: 'image.clerk.com',
            },
            {
                protocol: 'https',
                hostname: 'edamam-product-images.s3.amazonaws.com',
            }
            // need to change this later
            // {
            //     protocol: 'https',
            //     hostname: 'linkedinupgrade.blob.core.windows.net',
            // },
        ]
    }
};

export default nextConfig;
