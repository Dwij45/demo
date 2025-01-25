// %% these fill will initialize the schema 

const mongoose =require("mongoose")
const schema=  mongoose.Schema;
const ObjectId = schema.ObjectId;
// mongoose exporsts class called schema

const user=new schema({
    email:String,
    name:String,
    password:String
})

const todo = new schema({
    userId: ObjectId,
    title: String,
    done: Boolean
});

const UserModel = mongoose.model('users', user);    
// so data will be inserted in 'users' collection in db from user schem 
const TodoModel = mongoose.model('todos', todo);
// so data will be inserted in 'todos' in db from todo

// $$ exporting these models in index.js so there we will get data from FE and then will be inserded in db by usning these modals

module.exports = {
    UserModel:UserModel,
    TodoModel:TodoModel
}
