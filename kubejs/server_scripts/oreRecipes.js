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

    // Copper Ingot
    event.custom({
        type: "create:splashing",
        ingredients: [
            Item.of("minecraft:iron_ingot")
        ],
        results: [
            Item.of("create_attack_6:rusty_iron_light")
        ]
    })
    event.custom({
        type: "create:splashing",
        ingredients: [
            Item.of("create_attack_6:rusty_iron_light")
        ],
        results: [
            Item.of("create_attack_6:rusty_iron_middle")
        ]
    })
    event.custom({
        type: "create:splashing",
        ingredients: [
            Item.of("create_attack_6:rusty_iron_middle")
        ],
        results: [
            Item.of("create_attack_6:rusty_iron_strong")
        ]
    })
    event.custom({
        type: "create:sandpaper_polishing",
        ingredients: [
            Item.of("create_attack_6:rusty_iron_strong")
        ],
        results: [
            Item.of("minecraft:copper_ingot")
        ]
    })
})
