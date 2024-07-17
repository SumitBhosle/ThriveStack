import axios from "axios";
import { useForm } from "react-hook-form";

const Register = () => {

   const {register, handleSubmit, reset} = useForm()

   function savedata(data){
    axios.post("http://localhost:8086/events",data);
    reset();

   }
    return (
        <div className="">
            <h1>Book Event</h1>
            <br></br>
            <form className="row g-3 bg-dark" onSubmit={handleSubmit(savedata)}>
                <div className="col-md-6">
                    <label for="id" className="form-label text-white">ID</label>
                    <input type="number" className="form-control" id="id" {...register('id')}/>
                </div>
                <div className="col-md-6">
                    <label for="ename" className="form-label text-white">Event Name</label>
                    <input type="text" className="form-control" id="ename" {...register('ename')}/>
                </div>
                <div className="col-6">
                    <label for="date" className="form-label text-white">Date</label>
                    <input type="date" className="form-control" id="date" {...register('date')}/>
                </div>
                <div className="col-6">
                    <label for="location" className="form-label text-white">Location</label>
                    <input type="text" className="form-control" id="location" {...register('location')}/>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}
export default Register; 