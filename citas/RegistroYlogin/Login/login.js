let botonTraer = document.getElementById('boton1');

let username = JSON.parse(localStorage.getItem('Usuarios'))

username.map(usuario => {
    const {Correo,Contraseña} = usuario;

    const Correo1 = document.getElementById('campos'); 
    const Contraseña1 = document.getElementById('campos1');

    let correo = Correo
    let contraseña = Contraseña

    let usua ={

        correo,
        contraseña

    }
console.log(usua.contraseña)
    const validar = () =>{

        if(Correo1.value === usua.correo){

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenid@',
                showConfirmButton: false,
                timer: 30000
              })

            location.href = "./citasVanilla/index.html"
        }else{

            Swal.fire(
                'Opps',
                'Creo que has olvidado tu correo ¿Cierto?',
                'question'
              )
        }
    }

    botonTraer.addEventListener('click', validar)
})



