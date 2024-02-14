import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#d01111',
      },
      boxShadow: {
        cards:
          '0 0.6021873017743928px 0.6021873017743928px -1.25px #0000002e, 0 2.288533303243457px 2.288533303243457px -2.5px #00000029, 0 10px 10px -3.75px #00000010, 0 1px 2px #0000001f, 0 0 2px #00000014;',
        buttonShadow:
          '1px -2px 1px 0px #00000040 inset, 1px 2px 1px 0px #ffffff40 inset, 1px 2px 6px 0px #0000001F;',
        inputShadow: ' 0 0 2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
