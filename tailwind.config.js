/** @type {import('tailwindcss').Config} */
import gradeColor from './src/theme/grade-color'
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: gradeColor,
      backgroundImage: {
        trending: 'url("/images/trending-bg.svg")'
      },
      backgroundPosition: {
        trendingPosition: '50% 200px',
        '50/50': '50% 50%'
      },
      backgroundSize: {
        trandingSize: 'var(--maxPrimaryPageWidth)'
      },
      borderColor: gradeColor,
      color: {
        ...gradeColor,
        tmdbTextGd: 'linear-gradient(to right,#c0fecf 0,#1ed5a9 100%)'
      },
      height: {
        'calc-100-2.5': 'calc(100vh/2.5)'
      },
      maxWidth: {
        maxPrimaryPageWidth: '1400px',
        37: '9.5rem' /* */
      },
      maxHeight: {
        82.5: '22.5rem'
      },
      minHeight: {
        85: '355px'
      },
      padding: {
        '30-40': '30px 40px'
      },
      transition: {
        'height-linear': 'height .5s linear'
      },
      transitionProperty: {
        height: 'height'
      },
      transitionDuration: {
        5: '5s'
      }
    }
  },
  plugins: []
}
