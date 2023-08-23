import { FcCheckmark } from "react-icons/fc";
import SectionTitle from "../../../Components/SectionTittle/SectionTitle";
import { useForm } from 'react-hook-form';

const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import Swal from "sweetalert2";


const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token
        }`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, cetegory, recipe } = data;
                    // console.log(data)
                    const newItem = { name, price: parseFloat(price), cetegory, recipe, image: imgURL };
                    console.log(newItem);

                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Menu Item Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };
    // console.log(image_hosting_token);
    // console.log(errors);
    return (
        <div className="w-full">
            <SectionTitle heading="what's new?" subHeading='Add an Items'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-slate-300 p-4">
                <div className="px-4">
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe Name" className="input input-bordered w-full" {...register("name", { required: true, maxLength: 120 })} />

                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Cetegory*</span>
                            </label>
                            <select defaultValue="Cetegory" className="select select-bordered" {...register("cetegory", { required: true })}>
                                <option>Cetegory*</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soups</option>
                                <option>Desserts</option>
                                <option>Drinks</option>
                            </select>

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price*</span>

                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered w-full"{...register("price", { required: true, maxLength: 10 })} />

                        </div>
                    </div>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>

                        </label>
                        <textarea {...register("recipe", { required: true, maxLength: 540 })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </div>
                    <div className="form-control w-full max-w-xs py-4">

                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />

                    </div>
                    <button className="btn btn-outline btn-success">Add Item <FcCheckmark></FcCheckmark></button>

                </div>
            </form>

        </div>
    );
};

export default AddItem;