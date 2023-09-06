import { db, auth, storage } from './../../../conf/Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { deleteDoc ,getDocs, collection, doc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import {ref, getDownloadURL, deleteObject} from 'firebase/storage'

const List  = () => {
  const [user] = useAuthState(auth)
  const [post, setPost] = useState(null)
  const [updated, setUpdated] = useState(true)

  const adoptionRef = collection(db, 'adoption')

  useEffect(() => {
    getPost()
  }, [updated])

  const handleAdopted = async (id, image) => {
    // Create a reference to the file to delete
    const deleteRef = ref(storage, image);

    // Delete the file
    if(image){
      await deleteObject(deleteRef)
    }
    
    await deleteDoc(doc(db, "adoption", id))
    setUpdated((val) => { !val })
  }

  const getPost = async () => {
    const adoptionPost = await getDocs(adoptionRef);
    // console.log(adoptionPost.data)
    setPost(adoptionPost.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

    return (<>
      <section className='flex flex-col items-center p-8 col-span-3 md:w-4/5 mx-auto min-h-screen md:order-first xs:order-last xs:w-full'>
          <h2 className='font-bold md:text-4xl xs:text-2xl'>Browse Adoption Post</h2>
          <div className="text-justify grid grid-cols-2 gap-5">
            {post?.map((post) => (
              <div key={post.id} className='mt-5 py-5 pl-3 pr-8 border-2 border-white flex justify-center items-center flex-col rounded-lg form cursor-pointer'>
                { (user?.uid === post.uid) && <button onClick={() => {handleAdopted(post.id, post.image)}} className='cta-btn'>Adopted</button>}
                {post.image && <ImageDisplay image={post.image} />}
                <h2 className='text-3xl'>{post.name}</h2>
                <h2 className='text-lg'>Age: {post.age}</h2>
                <h2 className='text-lg'>Breed: {post.breed}</h2>
                <h2 className='text-lg'>Poty Tained: {post.poty_trained ? "Yes" : "No"}</h2>
                <h2 className='text-lg'>Contact Here: {post.contact}</h2>
              </div>
            ))}

            {post !== null && post.length === 0 ? <div className="text-3xl mt-8 font-bold form py-3 px-20 text-red-500 w-full">No adoption available yet</div> : ""}

          </div>
      </section>  
    </>)
};

function ImageDisplay({ image }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const retrieveImage = async () => {
      try {
        const imageRef = ref(storage, image); // Create a reference to the specific image
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    retrieveImage();
  }, [image]);

  return <img className='w-80 h-40 object-cover hover:scale-75 transition delay-75 ease-in' src={imageUrl} alt={image} />;
}

export default List