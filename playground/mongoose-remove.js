const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '59638d19aa30baf9dea87a05'}).then((todo) => {
    
})


// Todo.findByIdAndRemove
Todo.findByIdAndRemove('59638d19aa30baf9dea87a05').then((todo) => {
    console.log(todo);
});