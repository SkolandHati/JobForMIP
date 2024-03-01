import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        invictus: [
            {
                id: 1,
                text: { part_one: "Out of the night that covers me,\n" + "Black as the Pit from pole to pole,\n",
                        part_two: "I thank whatever gods may be\n" + "For my unconquerable soul."},
                show: true
            },
            {
                id: 2,
                text: { part_one: "In the fell clutch of circumstance\n" + "I have not winced nor cried aloud.\n",
                        part_two: "Under the bludgeonings of chance\n" + "My head is bloody, but unbowed."},
                show: true
            },
            {
                id: 3,
                text: { part_one: "Beyond this place of wrath and tears\n" + "Looms but the Horror of the shade,\n",
                        part_two: "And yet the menace of the years\n" + "Finds, and shall find, me unafraid."},
                show: true
            },
            {
                id: 4,
                text: { part_one: "It matters not how strait the gate,\n" + "How charged with punishments the scroll.\n",
                        part_two: "I am the master of my fate:\n" + "I am the captain of my soul."},
                show: true
            }
        ]
    }),

    actions: {
        getText(){
            return this.invictus
        }
    }
})