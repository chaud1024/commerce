/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'picsum.photos',
      'raw.githubusercontent.com',
      'img.mytheresa.com',
    ],
  },
  compiler: {
    emotion: true,
  },
}

module.exports = nextConfig

// Next.js 에서 dotenv 사용하려면 dotenv-webpack 설치와 더불어 next.config.js 파일에 아래 내용이 있어야 한다.
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: (config) => {
    // 기존의 웹팩 플러그인에 새로운 Dotenv플러그인을 연결시켜준다.
    // silent는 옵션은 .env파일을 찾지 못했을 때 에러를 일으키지 않도록 설정해주는 옵션이다.
    config.plugins.push(new Dotenv({ silent: true }))

    return config
  },
}
