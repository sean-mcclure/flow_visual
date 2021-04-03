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
    "this_class" : "buttons_layout",
    "row_class" : "buttons_layout_rows",
    "cell_class" : "buttons_layout_cells",
    "number_of_rows" : 1,
    "number_of_columns" : 3
})

az.style_layout("buttons_layout", 1, {
    "width" : "100vw",
    "height" : "50px",
    "border" : 1
})

az.add_iframe("main_section", 1, {
    "this_class" : "frame",
    "source" : "mindmap/index.html"
})

az.style_iframe("frame", 1, {
    "height" : "100vh",
    "width" : "100vw"
})

az.add_button("buttons_layout_cells", 1, {
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


