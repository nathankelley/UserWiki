const { string, array } = require("joi")

module.exports = (mongoose) => {
    const haloSchema = mongoose.Schema({
        species_name: {
            type: String
        },
        sub_species: {
            type: Array
        },
        avg_height: {
            type: String
        },
        avg_weight: {
            type: String
        },
        avg_lifespan: {
            type: String
        },
        homeworld: {
            type: String
        },
        characteristics: {
            type: String
        },
        description: {
            type: String
        },
        image: {
            type: String
        }
    });
    return mongoose.model('halo', haloSchema, 'halo');
};