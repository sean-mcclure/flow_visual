var data = [{
    layer: 1,
    name: "hello",
    id: "d9s8f7a"
}, {
    layer: 2,
    name: "second layer1",
    id: "35jnk354",
    connected_to: "d9s8f7a"
}, {
    layer: 2,
    name: "second layer2",
    id: "fs0d9f9f",
    connected_to: "d9s8f7a"
}, {
    layer: 2,
    name: "second layer3",
    id: "n78gn686n",
    connected_to: "d9s8f7a"
}, {
    layer: 2,
    name: "second layer4",
    id: "g8f9gfg08f",
    connected_to: "d9s8f7a"
},
{
    layer: 3,
    name: "third layer1",
    id: "ds08d90fds",
    connected_to: "g8f9gfg08f"
},
{
    layer: 3,
    name: "third layer2",
    id: "v8d09s9f8a",
    connected_to: "g8f9gfg08f"
}]

function grap_by_layer(data, layer) {
    var res = [];
    data.forEach(function(obj, i) {
        if (obj.layer === layer) {
            res.push(obj)
        }
    })
    return (res)
}
az.hold_value.html_string = "";

function obj_to_html(data) {
    data.forEach(function(obj, i) {
        var inner = []
        var connected_tos = []
        grap_by_layer(data, obj.layer).forEach(function(obj) {
            connected_tos.push(obj.connected_to)
            inner.push("<li><a>" + obj.name + "</a>***" + obj.id + "***" + "</li>")
        })
        var inject = "<ul>" + inner.join("") + "</ul>";
        if (obj.layer !== 1) {
            az.hold_value.html_string = az.hold_value.html_string.split("***" + obj.connected_to + "***").join(inject)
        } else {
            var outer_top = "<ul>"
            var list_item = "<li><a>" + obj.name + "</a>***" + obj.id + "***</li>"
            var outer_bottom = "</ul>"
            layer_1 = outer_top + list_item + outer_bottom
            az.hold_value.html_string = layer_1.split("***" + obj.id + "***").join(inject)
        }
    })

    var fin = az.hold_value.html_string


    fin = fin.replace(az.get_everything_before(az.hold_value.html_string.split("<a>")[1], "</a>"), "BOOK")


    return (fin)
}