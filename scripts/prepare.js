az.style_page({
    "background" : "#227093",
    "margin" : "0px",
    "padding" : "0px"
})

az.style_body({
    "background" : "transparent",
    "margin" : "0px",
    "padding" : "0px"
})

az.add_sections({
    "this_class" : "main_section",
    "sections" : 1
})

az.style_sections("main_section", 1, {
    "background" : "transparent",
    "height" : "100vh",
    "width" : "100vw"
})

az.add_layout("main_section", 1, {
    "this_class" : "top_layout",
    "row_class" : "top_layout_rows",
    "cell_class" : "top_layout_cells",
    "number_of_rows" : 1,
    "number_of_columns" : 3
})

az.style_layout("top_layout", 1, {
    "width" : "100vw",
    "height" : "50px",
    "position" : "fixed",
    "top" : 0,
    "left" : 0,
    "right" : 0,
    "border" : 1
})

az.add_layout("top_layout_cells", 1, {
    "this_class" : "add_node_layout",
    "row_class" : "add_node_layout_rows",
    "cell_class" : "add_node_layout_cells",
    "number_of_rows" : 1,
    "number_of_columns" : 2
})

az.style_layout("add_node_layout", 1, {
    "width" : "100%",
    "height" : "auto",
    "column_widths" : ["80%", "20%"],
    "border" : 0
})

az.add_input("add_node_layout_cells", 1, {
    "this_class" : "node_text"
})

az.style_input("node_text", 1, {
    "width" : "95%"
})

az.add_button("add_node_layout_cells", 2, {
    "this_class" : "add_node", 
    "text" : "ADD NODE"
})

az.style_button("add_node", 1, {
    "background" : "#ffda79",
    "color" : "#141414"
})

az.add_event("add_node", 1, {
    "type" : "click",
    "function" : function() {
        az.hold_value.events.add_node()
    }
})

az.add_event("node_text", 1, {
    "type" : "enter_key",
    "function" : function() {
        az.hold_value.events.add_node()
    }
})

az.add_iframe("main_section", 1, {
    "this_class" : "map_frame",
    "source" : "mindmap/index.html"
})

az.style_iframe("map_frame", 1, {
    "height" : "100vh",
    "width" : "100vw",
    "margin-top" : "40px"
})