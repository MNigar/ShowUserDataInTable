
    btn=document.querySelector(".btn");

    ad=document.querySelector('.UserName');
	soyad=document.querySelector('.UserSurname');
	email=document.querySelector('.Email');
	tarix=document.querySelector('.Date');
	data=[]
	table=document.querySelector('.tb');
	class UserData{
	constructor(_name,_surname,_email,_date){
		this.name=_name;
		this.Surname=_surname;
		this.Email=_email;
		this.tarix=_date;	
	}
}
btn.addEventListener('click',function(){
	user= new UserData(ad.value,soyad.value,email.value,tarix.value);
	
	tablerow=`<tr>
	<td>${user.name}</td>
	<td>${user.Surname}</td>
	<td>${user.Email}</td>
	<td>${user.tarix}</td>
	
	</tr>`
	table.innerHTML+=tablerow;
		ad.value=' ';
		soyad.value=' ';
		email.value=' ';
	
	
})

	



