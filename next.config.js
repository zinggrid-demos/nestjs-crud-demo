module.exports = {
  async headers() {
    return [
      { 
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Access-Control-Allow-Origi',
            value: 'http://localhost:8082',
          },
        ],
      },
    ]
  },
}