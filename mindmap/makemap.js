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