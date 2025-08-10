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
        tranding: path.resolve(__dirname, 'pages/tranding.html'),
        contact: path.resolve(__dirname, 'pages/contact.html'),
      },
    },
    outDir: 'dist',
  },
});

