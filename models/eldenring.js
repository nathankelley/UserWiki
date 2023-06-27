const { string, array } = require("joi")

module.exports = (mongoose) => {
    const eldenSchema = mongoose.Schema({
        bosses: {   
            boss_name: {
                type: string
            },
            hp: {
                type: string
            },
            defense: {
                type: string
            },
            stance: {
                type: string
            },
            parryable: {
                type: string
            },
            required: {
                type: string
            },
            weaknesses: {
                type: array
            },
            strengths: {
                type: array
            }
        }
    })
}