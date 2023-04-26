import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import image from "@astrojs/image";

export default defineConfig({
  site: 'https://southsideclimbing.co.uk',
  integrations: [mdx(), sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});