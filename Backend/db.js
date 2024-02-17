const moongoose = require("moongoose");

moongoose.connect("mongodb+srv://dbBank:<password>@bankingsystem.z9ijijp.mongodb.net/?retryWrites=true&w=majority");


const todoSchema = moongoose.schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = moongoose.model('todos',todoSchema);

module.exports = {
    todo
}