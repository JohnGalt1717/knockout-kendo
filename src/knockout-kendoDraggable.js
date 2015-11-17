createBinding({
    name: "kendoDraggable",
    events: {
        hint: {
            call: HINT
        },
        drag: {
            call: DRAG
        },
        dragcancel: {
            call: DRAGCANCEL
        },
        dragend: {
            call: DRAGEND
        },
        dragstart: {
            call: DRAGSTART
        },
        hold: {
            call: HOLD
        }
    }
});
