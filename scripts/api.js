export class Github{
    constructor(){
        this.client_id = "";
        this.client_secret = "";
        this.per_page = 10;
        this.sort = "asc";
    }

    //* api den kullanıcı bilgilerini alma  //asenkrona çevirme async
    async fetchUserData(username){
        //parametre olarak gelen kullanıcı adına göre istek attık
     const profileRes = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`); 
   
     //kullanıcı repolarını almak için istek attık
     const repoRes = await fetch(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.sort}`);
  

    //api den aldığımız cevabı json yapısına çevirdik
   const data = await profileRes.json();
   const repos = await repoRes.json();
   // fonksiyonun çağirildiği yere bilgileri gönderme
   return {data, repos};  
  }
}