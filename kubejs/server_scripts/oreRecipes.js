onEvent("recipes", (event) => {
    // Netherrack
    event.custom({
        type: "create:compacting",
        ingredients: [
            Item.of("minecraft:cobblestone"),
            Item.of("minecraft:netherrack"),
            {
                fluid: "minecraft:lava",
                amount: 100
            }
        ],
        results: [
            Item.of("minecraft:netherrack")
        ]
    })

    // Blaze Rod
    event.custom({
        type: "create_dd:superheating",
        ingredients: [
            Item.of("minecraft:stick")
        ],
        results: [
            Item.of("minecraft:blaze_rod")
        ]
    })

    // Melten Copper
    event.custom({
        type: "create:mixing",
        ingredients: [
            Item.of("minecraft:copper_ingot")
        ],
        results: [
            {
                fluid: "kubejs:molten_copper",
                amount: 100
            }
        ]
    })

    // Copper Ingot
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                fluid: "kubejs:molten_copper",
                amount: 100
            }
        ],
        results: [
            Item.of("minecraft:copper_ingot")
        ]
    })
    event.custom({
        type: "create:mixing",
        ingredients: [
            Item.of("minecraft:brick"),
            {
                fluid: "kubejs:molten_copper",
                amount: 75
            }
        ],
        results: [
            Item.of("minecraft:copper_ingot")
        ]
    })
})
