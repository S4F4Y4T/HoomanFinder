import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {db, storage} from './../../conf/Firebase'
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { auth } from './../../conf/Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {ref, uploadBytes} from 'firebase/storage'

const Form = () => {

    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const schema = yup.object().shape({
        name: yup.string().required(),
        breed: yup.string().required(),
        age: yup.number('Must be a number').required().typeError('Age must be a number'),
        poty_trained: yup.boolean("Must be selected").required(),
      });


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });

      const adoptionRef = collection(db, 'adoption')
    
      const onSubmitHandler = async (data) => {
        // Add a new document in collection "adoption"

        let image = ''

        if(data.image[0]){
          
          image = data.image[0].name + Math.random();
          const imageRef = ref(storage, image)
          uploadBytes(imageRef, data.image[0])
        }

        let docData = {
          ...data,
          username : user?.displayName,
          uid: user?.uid,
          image: data.image[0] ? image : "",
        }

        await addDoc(adoptionRef,  docData);

        reset();
        navigate('/dashboard/adoption-list')
      };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className='m-5 flex flex-col gap-5 justify-center items-center text-white form p-20'>


            <input {...register("image")} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" />

            <input {...register("name")} className='py-2 px-5 rounded-md text-gray-900' type='text' placeholder='Place your cats name' name="name" />
            <p className="text-red-800">{errors.name?.message}</p>

            <input {...register("breed")} className='py-2 px-5 rounded-md text-gray-900' type='text' placeholder='Place your cats breed' name="breed" />
            <p className="text-red-800">{errors.breed?.message}</p>

            <input {...register("age")} className='py-2 px-5 rounded-md text-gray-900' type='number' placeholder='Place your cats age' name="age" />
            <p className="text-red-800">{errors.age?.message}</p>

            <input {...register("contact")} className='py-2 px-5 rounded-md text-gray-900' type='number' placeholder='Place your contact number' name="contact" />
            <p className="text-red-800">{errors.age?.contact}</p>
            
            <div className='flex justify-start items-center gap-5'>
              <label className='font-bold'>Poty Trained?</label>
              <label htmlFor="yes">Yes</label>
              <input {...register("poty_trained")} id="yes" type='radio' value="true" name='poty_trained' />
              <label htmlFor="no">No</label>
              <input {...register("poty_trained")} id="no" type='radio' value="false" name='poty_trained' />
            </div>

            <p className="text-red-800">{errors.poty_trained?.message}</p>

            <button type="submit" className='cta-btn'>Make Adoption</button>
        </form>
    )
}

export default Form