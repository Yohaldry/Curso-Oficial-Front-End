
let botonListo = document.getElementById('Rect_ngulo_8');
const usuario = []

   const capturaDatos = () => {

    const Nombre = document.getElementById('campos').value;
    const Apellido = document.getElementById('campos1').value;
    const Correo = document.getElementById('campos2').value;
    const Contraseña = document.getElementById('campos3').value;
  
    if( Nombre === ""){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes escribir tu Nombre',
          })


    }else{ if( Apellido === ""){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes escribir tu Apellido',
          })

    }else{ if( Correo === ""){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes escribir tu Correo Electronico',
          })
        }else{if( Contraseña === ""){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes escribir tu Contraseña',
              })
            }else{

    const registro ={

        Nombre,
        Apellido,
        Correo,
        Contraseña
    }

    usuario.unshift(registro);
    localStorage.setItem('Usuarios',JSON.stringify(usuario));

   

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro Completado',
        showConfirmButton: false,
        timer: 1500
      })
      location.href = "../Login/login.html"
    }
}
   }
}
   }
botonListo.addEventListener('click', capturaDatos)
  
