var Node = /** @class */ (function () {
    function Node(data) {
        this.head = {
            val: data,
            next: null
        };
    }
    return Node;
}());
var node = new Node(10);
console.log(node);
