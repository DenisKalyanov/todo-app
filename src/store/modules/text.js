export default{
    actions:{
        changeTasks(ctx, newTask){
            ctx.commit("createTask",newTask)
        }
        
    },
    mutations:{
        createTask(state, newTask){
            state.tasks.push(newTask);
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
        },

        activeTasks(state){
            return state.tasks.filter(task=>task.checked === true);
        },
        completedTasks(state){
            return state.tasks.filter(task=>task.checked === false);
        },
},
}