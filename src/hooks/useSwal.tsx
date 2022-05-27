import Swal from 'sweetalert2'


export const Modal = () =>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Succesful Login',
        showConfirmButton: false,
        timer: 1500
      })
}