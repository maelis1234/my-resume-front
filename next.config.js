const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/welcome',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig;
