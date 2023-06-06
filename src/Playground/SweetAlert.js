import Swal from "sweetalert2";

const SweetAlert = ({title,text,icon})=>{
  Swal.fire({
    title,
    text,
    icon,
  })
}
export default SweetAlert;