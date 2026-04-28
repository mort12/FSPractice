const indians = [
    { name: "Angry Cloud", tribe: "Cherokee", weapon: "Bow", animal: "Wolf" },
    { name: "Infected Mushroom", tribe: "Navajo", weapon: "Spear", animal: "Eagle" },
    { name: "Dancing River", tribe: "Sioux", weapon: "Tomahawk", animal: "Bear" },
    { name: "Silent Thunder", tribe: "Apache", weapon: "Knife", animal: "Buffalo" },
    { name: "Burning Leaf", tribe: "Mohawk", weapon: "Club", animal: "Horse" },
    { name: "Running Deer", tribe: "Cherokee", weapon: "Bow", animal: "Eagle" },
    { name: "Broken Arrow", tribe: "Navajo", weapon: "Spear", animal: "Bear" },
    { name: "Red Hawk", tribe: "Sioux", weapon: "Tomahawk", animal: "Buffalo" },
    { name: "Brave Otter", tribe: "Apache", weapon: "Knife", animal: "Horse" },
    { name: "Fast Fox", tribe: "Mohawk", weapon: "Club", animal: "Wolf" },
    { name: "Blue Feather", tribe: "Cherokee", weapon: "Bow", animal: "Bear" },
    { name: "White Eagle", tribe: "Navajo", weapon: "Spear", animal: "Buffalo" },
    { name: "Golden Sun", tribe: "Sioux", weapon: "Tomahawk", animal: "Horse" },
    { name: "Shadow Moon", tribe: "Apache", weapon: "Knife", animal: "Wolf" },
    { name: "Wild Horse", tribe: "Mohawk", weapon: "Club", animal: "Eagle" },
    { name: "Thunder Bird", tribe: "Cherokee", weapon: "Bow", animal: "Buffalo" },
    { name: "Iron Bear", tribe: "Navajo", weapon: "Spear", animal: "Horse" },
    { name: "Crying Wind", tribe: "Sioux", weapon: "Tomahawk", animal: "Wolf" },
    { name: "Painted Turtle", tribe: "Apache", weapon: "Knife", animal: "Eagle" },
    { name: "Laughing Brook", tribe: "Mohawk", weapon: "Club", animal: "Bear" }
];
const tribeValues = { "Cherokee": 3, "Navajo": 4, "Sioux": 5, "Apache": 2, "Mohawk": 1 }
const weaponValues = { "Bow": 5, "Spear": 3, "Tomahawk": 3, "Knife": 4, "Club": 2 }
const animalValues = { "Wolf": 2, "Eagle": 3, "Bear": 4, "Buffalo": 3, "Horse": 5 }

function calculateScore(indian) {
    return tribeValues[indian.tribe] + weaponValues[indian.weapon] + animalValues[indian.animal];
}