onEvent("recipes", (event) => {
    event.remove({ output: "createcasing:creative_casing" })
    event.remove({ input: "createcasing:creative_casing" })
    event.remove({ input: "createcasing:creative_*" })
})