export default{
    actions:{},
    mutations:{
        createTask(state, newTask){
            newTask ?  state.tasks.push({message: newTask, checked: false, id: Date.now()}) : false;
           
        },
        changeStatus(state, targetId){
            state.tasks.map(task => {
                if(parseInt(task.id) === parseInt(targetId)){
                task.checked= !task.checked}
                else {return task}
            });
        },
        changeTypeTasks(state, targetName){
            
            if(targetName==="deleteCompleted"){
                state.tasks.map((task, index)=> {
                    console.log(task); 
                    task.checked ?  state.tasks.splice(index,1) : task
                }
                )
                state.statusButton.type = "allTasks";
            }
            state.statusButton.type = targetName;
        },
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
            return state.tasks.filter(task=>task.checked === false);
        },
        completedTasks(state){
            return state.tasks.filter(task=>task.checked === true);
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