var data = [
    {
        layer : 1,
        name : "hello",
        id : "d9s8f7a"
    },
    {
        layer : 2,
        name : "second layer",
        id : "d9dfff7a"
    },
    {
        layer : 2,
        name : "second layer2",
        id : "d9dfff7a"
    },
    {
        layer : 2,
        name : "second layer3",
        id : "d9dfff7a"
    },
    {
        layer : 3,
        name : "hello",
        id : "aa9f9gff",
        connected_to : "d94645f7a"
    }
]

function grap_by_layer(data, layer) {
    var res = [];
    data.forEach(function(obj, i) {
        if(obj.layer === layer) {
            res.push(obj)
        }
    })
    return(res)
}

function obj_to_html(data) {
    var res;
    data.forEach(function(obj, i) {
    if(obj.layer === 1) {
        var outer_top = "<ul>"
        var list_item = "<li><a>" + obj.name + "</a></li>"
        var outer_bottom = "</ul>"
        res = outer_top + list_item + outer_bottom
    }
    if(obj.layer === 2) {
        var arr_of_obj = grap_by_layer(data, 2)
        var inner = []
        arr_of_obj.forEach(function() {
             inner.push("<li><a>" + obj.name + "</a></li>")
        })
        var inject = "<ul>" + inner.join("") + "</ul>";
        az.hold_value.split = res.split("</a>");
        az.hold_value.split.splice(1, 0, "</a>" + inject);
    }
    })
    res = az.hold_value.split.join("")

    console.log(res)
    
/*

    <ul>
        <li>
            <a>Main Topic</a>
            <ul>
                <li><a>Sub 2</a></li>
                <li><a>Sub 3</a></li>
                <li><a>Sub 4</a></li>
                <li><a>Sub 5</a></li>
            </ul>
        </li>
    </ul>
    */

return(res)
}