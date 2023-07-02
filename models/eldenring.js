const { string, array } = require("joi")

module.exports = (mongoose) => {
    const eldenSchema = mongoose.Schema({
        boss_name: {
            type: String
        },
        hp: {
            type: String
        },
        defense: {
            type: String
        },
        stance: {
            type: String
        },
        parryable: {
            type: String
        },
        required: {
            type: String
        },
        weaknesses: {
            type: Array
        },
        strengths: {
            type: Array
        },
        image: {
            type: String
        }
    });
    return mongoose.model('eldenring', eldenSchema, 'eldenring');
};