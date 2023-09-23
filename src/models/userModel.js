const { Schema, model } = require("mongoose");

const tasksSchema = new Schema ( {
    id: { type : Number, required: true},
    title: { type: String, required: true},
    description: {type: String, required: false},
    completed: {type: Boolean, required: false}
},{
    versionKey: false // Para quitar las versiones en el documento
});

const UserModel = model("tasks", tasksSchema);

module.exports = UserModel;