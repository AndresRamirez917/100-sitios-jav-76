const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault();
    const namesArr = [
        {id:"nombre", name:"Nombre"},
        {id:"email", name:"Email"},
        {id:"fecha", name:"Fecha"},
        {id:"hora", name:"Hora"},
        {id:"mensaje", name:"Mensaje"},
    ]
    for(let {id, name} of namesArr){
        const element = document.getElementById(id);
        if(element.value.trim() === "" ){
            return swal({
                title: `El campo ${name} no puede estar vacío`,
                icon: "error",
                 })
        }
        if(id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(element.value)){
            return swal({
                title: `El campo ${name} no tiene el formato correcto`,
                icon: "error",
                 })
        }
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
    namesArr.forEach(({id}) => document.getElementById(id).value = "")
}