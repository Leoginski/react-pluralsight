import { addNewTask, updateTask } from './server';

(async function myFunc(){
    addNewTask({
        name:"My task",
        id:"12346"
    });

    updateTask({
        id:"12346",
        name:"My task - UPDATED!!!"
    })
})();