function validasiForm(form){
    if (form.nama.value == ""){
        alert("Username belum terisi");
        form.nama.focus(); 
        return (false); 
    }else if (form.email.value == ""){
        alert("Anda belum mengisikan Email");
        form.email.focus();
        return (false);
    }else if (form.message.value == ""){
        alert("Silahkan isi pesan");
        form.message.focus();
        return (false);
    }
    return (true);
}
