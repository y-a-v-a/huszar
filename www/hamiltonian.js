var Hamilton = function(graph) {
    "use strict";
    this.graph = graph;
    this.graphLength = graph.length;
};

Hamilton.prototype = {
    path : [],
    pathCount : 0,
    lib : [],

    isCycle : function (path) {
        "use strict";
        var first, last;
        first = path[0] - 1;
        last = path[path.length - 1] - 1;
        if (this.graph[first][last] === 1
                && this.graph[first][last] === this.graph[last][first]) {
            return true;
        } else {
            return false;
        }
    },

    isOnPath : function (target, foundPath) {
        "use strict";
        var i;
        for (i = 0; i < foundPath.length; i += 1) {
            if (foundPath[i] === target) {
                return true;
            }
        }
        return false;
    },

    findHamiltonPath : function (graph, y, l) {
        "use strict";
        var x, next;
        for (x = 0; x < this.graphLength; x += 1) {
            next = x + 1;
            if (graph[x][y] !== 0 && !this.isOnPath(next, this.path)) {
                l += 1;
                this.path[l] = next;
                if (l === this.graphLength - 1) {
                    if (this.isCycle(this.path, graph)) {
                        this.pathCount += 1;
                        // console.log(this.pathCount + " : " + this.path);
                         this.lib.push(this.path.toString());
                    }
                    l -= 1;
                    continue;
                }

                graph[x][y] = graph[y][x] = 0;
                this.findHamiltonPath(graph, x, l);
                l -= 1;
                graph[x][y] = graph[y][x] = 1;
            }
        }
        this.path[l + 1] = 0;
    },

    allHamiltonPath : function () {
        "use strict";
        var i;
        for (i = 0; i < this.graphLength; i += 1) {
            this.path[0] = i + 1;
            this.findHamiltonPath(this.graph, i, 0);
        }
    },

    HamiltonPath : function (startNode) {
        "use strict";
        this.path[0] = startNode;
        this.findHamiltonPath(this.graph, startNode - 1, 0);
    }
};