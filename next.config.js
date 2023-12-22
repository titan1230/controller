/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: "/your-model.obj",
        headers: [
          {
            key: "Content-Type",
            value: "model/obj", // Adjust the content type
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
