import vector from '../../common/vector';
import Point  from '../../geometry/Point';


export default function ovalMarker(vMarker, options) {

  // Note: vMarker should be a `g` element

  if (vMarker) {

    let rx = options.rx || 3.5;
    let ry = options.ry || rx;

    let vEllipse = vector('ellipse');

    vEllipse.attr({
      cx: rx,
      cy: ry,
      rx,
      ry
    });

    // return the connection point on the marker
    return {
      vel: vEllipse,
      rad: 0,
      point: new Point(rx * 2, ry)
    };
  }

  return null;
}
