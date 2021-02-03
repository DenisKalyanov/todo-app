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
                state.tasks = state.tasks.filter(task => !task.checked )
                state.emptyBlock.status = true;
                return state.statusButton = "completedTasks";
            }
            let completed = state.tasks.filter(task => task.checked );
            if(targetName==="completedTasks" && completed.length ===0){
                state.emptyBlock.status = true
            }else{ state.emptyBlock.status = false}
            
            state.statusButton = targetName;
        },
    },
    state:{
        tasks: [
            {message: "New task COMPLETED", checked: true, id: 1111},
            {message: "New task IN WORK", checked: false, id: 2222},
        ],
        statusButton: "allTasks",
        emptyBlock :{
            status:false,
        },
    },
    getters:{
        showEmptyBlock(state){
            return state.emptyBlock.status;
        },
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
            if(state.statusButton==="allTasks"){
                return getters.allTasks
            }else if (state.statusButton==="activeTasks"){
                return getters.activeTasks
            }else  if (state.statusButton==="completedTasks"){
                return getters.completedTasks
            }
        }
},
}