var commonMarkup = ''
    + '<g class="pane-scalable">'
    + '  <foreignObject width="180" height="30">'
    + '    <body xmlns="http://www.w3.org/1999/xhtml">'
    + '      <div class="pane-node-content">'
    + '        <span class="icon"></span>'
    + '        <span class="name">${name}</span>'
    + '        <div class="pane-port-list in"></div>'
    + '        <div class="pane-port-list out"></div>'
    + '      </div>'
    + '    </body>'
    + '  </foreignObject>'
    + '</g>';

var portMarkup = ''
    + '<div class="pane-port-wrap">'
    + '  <div class="pane-port" data-id="${id}">'
    + '    <span class="port-magnet"></span>'
    + '  </div>'
    + '</div>';

var startMarkup = ''
    + '<g class="pane-scalable">'
    + '  <foreignObject width="80" height="30">'
    + '    <body xmlns="http://www.w3.org/1999/xhtml">'
    + '      <div class="pane-node-content end-node">'
    + '        <span class="name">${name}</span>'
    + '        <div class="pane-port-list in"></div>'
    + '        <div class="pane-port-list out"></div>'
    + '      </div>'
    + '    </body>'
    + '  </foreignObject>'
    + '</g>';

var endMarkup = startMarkup;

var judgeMarkup = ''
    + '<g class="pane-scalable">'
    + '  <path fill="#ffffff" stroke="#289DE9" d="M 40 0 L 80 20 40 40 0 20 z"></path>'
    + '  <foreignObject width="80" height="40">'
    + '    <body xmlns="http://www.w3.org/1999/xhtml">'
    + '      <div class="pane-node-content judge-node">'
    + '        <span class="name">${name}</span>'
    + '        <div class="pane-port-list in"></div>'
    + '        <div class="pane-port-list out"></div>'
    + '      </div>'
    + '    </body>'
    + '  </foreignObject>'
    + '</g>';

var subFlowMarkup = ''
    + '<g class="pane-scalable">'
    + '  <foreignObject width="80" height="30">'
    + '    <body xmlns="http://www.w3.org/1999/xhtml">'
    + '      <div class="pane-node-content sub-flow-node">'
    + '        <span class="name">${name}</span>'
    + '        <div class="pane-port-list in"></div>'
    + '        <div class="pane-port-list out"></div>'
    + '      </div>'
    + '    </body>'
    + '  </foreignObject>'
    + '</g>';

var nodesMapping = {

    common: {
        markup: commonMarkup,
        portMarkup: portMarkup,
        size: {
            width: 180,
            height: 30
        }
    },

    start: {
        markup: startMarkup,
        portMarkup: portMarkup,
        size: {
            width: 80,
            height: 30
        }
    },

    end: {
        markup: endMarkup,
        portMarkup: portMarkup,
        size: {
            width: 80,
            height: 30
        }
    },

    judge: {
        markup: judgeMarkup,
        portMarkup: portMarkup,
        size: {
            width: 80,
            height: 40
        }
    },

    subFlow: {
        markup: subFlowMarkup,
        portMarkup: portMarkup,
        size: {
            width: 80,
            height: 30
        }
    }
};
