import { createApp } from 'vue';
import App from './App.vue';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as colors from 'vuetify/lib/util/colors';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark', // Force dark mode
    themes: {
      dark: {
        dark: true, // Enable dark mode
        colors: {
          primary: colors.blue.darken2, // Darkened blue for primary
          secondary: colors.amber.darken3, // Darkened amber for secondary
          accent: colors.shades.black, // Black for accents
          error: colors.red.accent3, // Red for error messages
          info: colors.blue.lighten1, // Light blue for info messages
          success: colors.green.accent3, // Green for success states
          warning: colors.amber.base, // Amber for warnings
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')