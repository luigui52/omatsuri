import cssTriangle from './assets/css-triangle.svg';
import gradient from './assets/gradient.svg';
import svgCompression from './assets/svg-compression.svg';
import svg2jsx from './assets/svg-to-jsx.svg';
import symbols from './assets/symbols.svg';
import pageDividers from './assets/page-dividers.svg';

export default [
  {
    link: '/triangle-generator',
    name: 'Triangle generator',
    description: 'Generate css triangles styles for elements and pseudo-elements',
    icon: cssTriangle,
  },

  {
    link: '/css-gradient',
    name: 'Gradients generator',
    description: 'Generate linear and radial gradients, includes ready to use gradients library',
    icon: gradient,
  },

  {
    link: '/svg-compressor',
    name: 'SVG compressor',
    description:
      'Compress svg images with svgo tool, convert to react component immediately after if needed',
    icon: svgCompression,
  },

  {
    link: '/svg-to-jsx',
    name: 'SVG → JSX',
    description:
      'Convert svg icons and illustrations to react components (or components for other libraries with jsx support)',
    icon: svg2jsx,
  },

  {
    link: '/html-symbols',
    name: 'Symbols collection',
    description:
      'Collection of commonly used html symbols: arrows, marks, currency signs and many others',
    icon: symbols,
  },

  {
    link: '/pages-dividers',
    name: 'Curved page dividers',
    description: 'Tool to generate curved page dividers with css and svg images',
    icon: pageDividers,
  },
];
