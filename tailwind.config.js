/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ['Lexend', 'sans-serif'],
        Orbitron: ['Orbitron', 'sans-serif'],
        Oxanium: ['Oxanium', 'sans-serif'],
        Marvel: ['Marvel', 'sans-serif']
      },
      colors: {
        launchpadDarkLight:'#202020',
        launchpadDarkMedium:'#19191A',
        lightGray:'#C1C1C1',
        darkGray: '#838B92',
        dark: '#181823',
        lightDark: '#1F202E',
        lightBg: '#F4F7F9',
        sea: '#58F6F7',
        darkGreen: '#2B7E21',
        yellowOverlay: '#F4F1E7',
        lightYellow:'#F9F0B1',
        yellow:'#FDFAE5',
        yellowButton:'#E2BF00',
        green:'#AFED64',
        greenHover:'#215B1A',
        yellowHover:'#B69C0F',
        grayBorder:'#D4D6D3',
        grayInput:'#F4F7F9',
        lightWood:'#806E2F',
        darkWood:'#372F1F',
        lightestWood:"#D6C99E",
        button:"#ffad0aff",
        buttonHover:"#cd890aff",
        darkBlue:'#0E242C',
        blue:"#ffad0aff",
        darkCard:'#252525',
        darkCardHover:'#2B2B2B',
        darkOverlay:'#252525',
        arenaLight:'#9EB6D6',
        arenaMedium:'#242527',
        arenaDark:'#191B1F',
        arenaBg:'#0B0A26'
      },
      backgroundImage: {
        'orange': 'linear-gradient(to bottom, #00843F, #CAA201)',
        'linear': 'linear-gradient(to bottom,rgb(230, 240, 255),rgb(204, 201, 222))',
        'linearRed': 'linear-gradient(to right, #F61616, #900D0D)',

      }
    },
  },
  plugins: [],
}

