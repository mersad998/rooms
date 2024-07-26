/* eslint-disable @typescript-eslint/explicit-function-return-type */

/** @type {import('next').NextConfig} */

import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from 'next/constants.js';

const nextConfig = async (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = (await import('@ducanh2912/next-pwa')).default({
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
    });
    return withPWA(nextConfig);
  }
  return nextConfig;
};

export default nextConfig;
