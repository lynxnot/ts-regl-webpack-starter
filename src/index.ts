import Regl from 'regl';

import vertShader = require('./shaders/triangle.vs.glsl');
import fragShader = require('./shaders/triangle.fs.glsl');

const regl = Regl('.app');

const drawTriangle = regl({
  vert: vertShader.default,
  frag: fragShader.default,
  attributes: {
    position: [-0.5, -0.5, 0, 0.5, 0.5, -0.5],
  },
  uniforms: {
    color: [0, 0.55, 0.75, 1],
  },
  // vertex count
  count: 3,
});

regl.clear({ color: [0.8, 0.82, 0.74, 1] });
drawTriangle();
