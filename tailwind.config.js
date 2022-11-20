module.exports = {
    purge: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
    ],
    darkMode: false,
    theme: {
      extend: {
        fontFamily: {
          'body': ['Georgia','serif'],
        },
      },
    },
    variants: {},
    plugins: [
    ],
  }