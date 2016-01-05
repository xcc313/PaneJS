import vector from '../../common/vector';
import Point  from '../../geometry/Point';


function ovalMarker(vMarker, options) {

    // Note: vMarker should be a `g` element

    if (vMarker) {

        let rx = options.rx || 5;
        let ry = options.ry || rx;

        let vEllipse = vector('ellipse');

        vEllipse.attr({
            cx: rx,
            cy: ry,
            rx: rx,
            ry: ry
        });

        vMarker.append(vEllipse);

        // return the connection point on the marker
        return new Point(rx * 2, ry);
    }
}

export default ovalMarker;

