export default{
    actions:{},
    mutations:{
        createTask(state, newTask){
            newTask ?  state.tasks.push({message: newTask, checked: false, id: Date.now()}) : false;
           
        },
        changeStatus(state, targetId){

            state.tasks.map(task => {
                if(parseInt(task.id) === parseInt(targetId)){
                    console.log(task.checked);
                    console.log(state.tasks);
                    task.checked= !task.checked}
                else {return task}
            });
        },
        changeTypeTasks(state, targetName){
            state.statusButton.type = targetName;
            console.log(state.statusButton.type)
        }
    },
    state:{
        tasks: [
            {message: "New task FALSE", checked: false, id: 1111},
            {message: "New task TRUE", checked: true, id: 2222},
        ],
        statusButton: {
            type: "allTasks",
        }
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
        choisenTasks(state, getters ){
            if(state.statusButton.type==="allTasks"){
                return getters.allTasks
            }else if (state.statusButton.type==="activeTasks"){
                return getters.activeTasks
            }else  if (state.statusButton.type==="completedTasks"){
                return getters.completedTasks
            }
        }
},
}