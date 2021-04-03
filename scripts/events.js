az.hold_value.events = {
    add_node : function() {
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
    pop_modal : function() {
        az.add_modal({
            "this_class" : "modal",
            "content_class" : "modal_content"
        })
    },
    get_clicked_node_data : function() {
        return(az.hold_value.clicked_node_data)
    }
}