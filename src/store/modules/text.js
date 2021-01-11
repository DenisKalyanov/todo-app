export default{
    actions:{
        // addTask(ctx, newTask){

        // }
    },
    mutations:{
        updateTasks(state, tasks){
            state.tasks = tasks;
        }
    },
    state:{
        tasks: [
            {message: "New task 1", checked: false},
            {message: "New task 2", checked: true}, 
            {message:"New task 3", checked: false},
            {message:  "New task 4", checked: false},
        ],
    },
    getters:{
        allTasks(state){
            return state.tasks;
        }
    },
}