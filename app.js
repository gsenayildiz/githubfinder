import { Github } from "./scripts/api.js";
import { elements } from "./scripts/helpers.js";
import { UI } from "./scripts/ui.js";


//Github classın örneğini oluşturma(miras alma)
const github = new Github();
const ui = new UI();
github.fetchUserData();
const getInput = (e)=>{
    e.preventDefault();
    const value = elements.searchInput.value;
    if (value ===""){
        ui.showAlert("Lütfen Form Alanını Doldurunuz.", "alert alert-warning");
    }
    if (value){
        github.fetchUserData(value).then((res) => {
            //eğer kullanıcı bulunamadıysa
            if(res.message ==="Not Found"){
                ui.showAlert("Aradığınız Kullanıcı Bulunamadı.", "alert alert-danger");
            }else{
                //kullanıcı bulunduysa
                ui.showAlert("Kullanıcı Bulundu.", "alert alert-success");
                ui.renderProfile(res.data);
                ui.renderProjects(res.repos);
            }
        })
        .catch((err) => console.log(err));
        return;
    }
};

//!olay izleyicileri 
elements.searchBtn.addEventListener("click",getInput);



