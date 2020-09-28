const app = Vue.createApp({
    data(){
        return {
            tasks: [],
            entredTask: "",
            listStatus: true
        };
    },
    methods: {
        addTask(){
            this.tasks.push(this.entredTask);
        },
        hideList(){
            this.listStatus = !this.listStatus;
        },
        removeTask(idx){
            this.tasks.splice(idx, 1);
        }
    },
    computed: {
        buttonCaption(){
            return this.listStatus ? "Hide List" : "Show List";
        }
    }
   

});
 
app.mount("#assignment");