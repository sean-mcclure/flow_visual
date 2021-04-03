az.hold_value.events = {
    add_node: function() {
        var new_node = {
            layer: 3,
            name: az.grab_value("node_text", 1),
            id: az.makeid(),
            connected_to: "",
        }
        az.hold_value.map_data.push(new_node)
        az.reload_iframe("map_frame", 1)
        az.clear_input("node_text", 1)
    },
    pop_modal: function() {
        az.add_modal({
            "this_class": "modal",
            "content_class": "modal_content"
        })
    },
    get_clicked_node_data: function() {
        const node_data = az.hold_value.clicked_node_data;
        var res = {
            name: node_data.name,
            id: node_data.el.id,
            parent: az.hold_value.events.prepare_parent_data(node_data.parent),
            children: az.hold_value.events.prepare_child_data(node_data.children),
            x: node_data.x,
            y: node_data.y,
            options: node_data.options
        }
        return (res)
    },
    prepare_parent_data: function(node_data) {
        var res = {
            name: node_data.name,
            id: node_data.el.id,
            x: node_data.x,
            y: node_data.y,
            options: node_data.options
        }
        return (res)
    },
    prepare_child_data: function(node_data_arr) {
        var res = []
        node_data_arr.forEach(function(node_data) {
            var inner = {
                name: node_data.name,
                id: node_data.el.id,
                x: node_data.x,
                y: node_data.y,
                options: node_data.options
            }
            res.push(inner)
        })
        return (res)
    },
    color_node_on_click: function(options) {
        az.hold_value.click_options = options;
        az.post_message_to_frame("map_frame", 1, {
            "function": function() {
                $("a").each(function() {
                    $(this).css("background", "")
                    $(this).click(function() {
                        $(this).css("background", parent.az.hold_value.click_options.color)
                    })
                })
            }
        })
    }
}