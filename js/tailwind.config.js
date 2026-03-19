tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#1bde7a",
        "background-light": "#f6f8f7",
        "background-dark": "#112119",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      transitionTimingFunction: {
        'smooth-ease': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    },
  },
}
