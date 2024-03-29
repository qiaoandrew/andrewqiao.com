const MillionLint = require('@million/lint');

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = MillionLint.next({
  rsc: true,
})(nextConfig);
