import TodoLists from '../models/todo_list.js';

// function for redirecting to main home page
export const home_Controller = async (req,res)=>{
    try {
        const todo = await TodoLists.find();
        return res.render('../views/home.ejs',{
            title : 'Home Page',
            todoList : todo
        })
    } catch (error) {
        console.log('error')
    }
}

//function for new Data
function DateValue(dueDate){
    let months = ['jan','feb','mar','Apr','May','june','july','aug','sept','oct','nov','dec'] // static value for implementing month value


    let new_date = '';
    let mon_app = '';
    // checking months 
    if(dueDate[1] == '01'){
        mon_app=months[0];
    }
    else if(dueDate[1] == '02'){
        mon_app=months[1];
    }else if(dueDate[1] == '03'){
        mon_app=months[2];
    }else if(dueDate[1] == '04'){
        mon_app=months[3];
    }else if(dueDate[1] == '04'){
        mon_app=months[3];
    }else if(dueDate[1] == '05'){
        mon_app=months[4];
    }else if(dueDate[1] == '06'){
        mon_app=months[5];
    }else if(dueDate[1] == '07'){
        mon_app=months[6];
    }else if(dueDate[1] == '08'){
        mon_app=months[7];
    }else if(dueDate[1] == '09'){
        mon_app=months[8];
    }else if(dueDate[1] == '10'){
        mon_app=months[9];
    }else if(dueDate[1] == '11'){
        mon_app=months[10];
    }else if(dueDate[1] == '12'){
        mon_app=months[11];
    }
    new_date =dueDate[2]+'-'+mon_app+'-'+dueDate[0] // displaying date in dd-mm-yyyy formate
    return new_date;
}

//function for creating toto list
export const createTodo = async (req,res)=>{
    let dueDate = await req.body.dateValue.split('-'); 
    // splitting date and taking month value
    //let new_date = '';
    let new_date = await DateValue(dueDate); 
    try {
        const newArr = await TodoLists.create({desc:req.body.desc, category:req.body.category, dueDate: new_date}); 
        return res.redirect('back');
    } catch (error) {
        console.log(error);
    }  
    
}
// function for deleting todo list
export const deleteTodo = async (req,res)=>{ 
    let sp = req.query.id; // getting the id from ui
    let new_sp = sp.split(','); 

    for(let i=0;i<new_sp.length;i++){ //looping over new_sp  to delete all the checked  value       
        try {
            const del = await TodoLists.findByIdAndDelete(new_sp[i]);
        } catch (error) {
            console.log(error)
        }
    }
    return res.redirect('back');
}
// function for fetching data for edit page
export const EditPage = async (req,res)=>{ // here we are fetching the data which need to be edited
    try {
        const todoLists = await TodoLists.findById(req.query.id);
        return res.render('../views/edit.ejs',{
            title:'Edit Page',
            todolist:todoLists
        })
    } catch (error) {
        console.log(error)
    }
}
// function for update data after the todo is being edited
export const editDetails = async (req,res)=>{
    let dueDate =await req.body.dateValue.split('-'); // splitting date and taking month value
    let new_date='';
    new_date= DateValue(dueDate);
    try {
        const todoData = await TodoLists.updateOne({_id:req.query.id},{$set:{desc:req.body.desc,category:req.body.category,dueDate:new_date}});
        return res.redirect('/');
    } catch (error) {
        
    }  
}