onEvent("recipes", (event) => {
    event.remove({ id: "create:crushing/diorite_recycling" })
    event.remove({ id: "create:crushing/diorite" })

    event.custom({
        type: "create:crushing",
        ingredients: [
            Item.of("minecraft:diorite")
        ],
        results: [
            Item.of("biomesoplenty:white_sand")
        ]
    })
    event.custom({
        type: "create:crushing",
        ingredients: [
            Item.of("minecraft:blackstone")
        ],
        results: [
            Item.of("biomesoplenty:black_sand")
        ]
    })
    event.custom({
        type: "create:crushing",
        ingredients: [
            Item.of("create_dd:gabbro")
        ],
        results: [
            Item.of("biomesoplenty:orange_sand")
        ]
    })
})
