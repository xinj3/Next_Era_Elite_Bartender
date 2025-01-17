import _extends from "@babel/runtime/helpers/esm/extends";
import { generate } from '@ant-design/colors';
import genControlHeight from '../shared/genControlHeight';
import genSizeMapToken from '../shared/genSizeMapToken';
import { defaultPresetColors } from '../seed';
import genColorMapToken from '../shared/genColorMapToken';
import genCommonMapToken from '../shared/genCommonMapToken';
import { generateColorPalettes, generateNeutralColorPalettes } from './colors';
export default function derivative(token) {
  var colorPalettes = Object.keys(defaultPresetColors).map(function (colorKey) {
    var colors = generate(token[colorKey]);
    return new Array(10).fill(1).reduce(function (prev, _, i) {
      prev[colorKey + "-" + (i + 1)] = colors[i];
      return prev;
    }, {});
  }).reduce(function (prev, cur) {
    prev = _extends(_extends({}, prev), cur);
    return prev;
  }, {});
  return _extends(_extends(_extends(_extends(_extends(_extends({}, token), colorPalettes), genColorMapToken(token, {
    generateColorPalettes: generateColorPalettes,
    generateNeutralColorPalettes: generateNeutralColorPalettes
  })), genSizeMapToken(token)), genControlHeight(token)), genCommonMapToken(token));
}