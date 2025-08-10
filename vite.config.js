// import { defineConfig } from 'vite';
// import path from 'path';

// export default defineConfig({
//   // base: '/pages/index.html',
//   root: '',
//   resolve: {
//     alias: {
//        '@styles': path.resolve(__dirname, 'src/styles'),
//        '@fontawesome': path.resolve(__dirname, 'src/styles/vendors/fontawesome'),
//         '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
//         '@assets': path.resolve(__dirname, 'src/assets'),
//         '@images': path.resolve(__dirname, 'src/assets/images'),
//         '@scripts': path.resolve(__dirname, 'src/scripts'),
//     },
//   },

//     build: {
//     rollupOptions: {
//       input: {
//         main: path.resolve(__dirname, 'index.html'),
//         contact: path.resolve(__dirname, 'contact.html'),
//         home: path.resolve(__dirname, 'home.html'),
//       },
//     },
//   },

// });


import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: './',

  resolve: {
    alias: {
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@fontawesome': path.resolve(__dirname, 'src/styles/vendors/fontawesome'),
        '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@images': path.resolve(__dirname, 'src/assets/images'),
        '@scripts': path.resolve(__dirname, 'src/scripts'),
    },
  },

  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        topic: path.resolve(__dirname, 'pages/topic.html'),
        subscribers: path.resolve(__dirname, 'pages/subscribers.html'),
        religion_rpirituality: path.resolve(__dirname, 'pages/religion_rpirituality.html'),
        playlist: path.resolve(__dirname, 'pages/playlist.html'),
        playlist_page1: path.resolve(__dirname, 'pages/playlist_page1.html'),
        leaderboard: path.resolve(__dirname, 'pages/leaderboard.html'),
        angel: path.resolve(__dirname, 'pages/angel.html'),
      },
    },
    outDir: 'dist',
  },
});

