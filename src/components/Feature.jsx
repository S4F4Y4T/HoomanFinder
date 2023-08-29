import '../App.css'

function Feature({count , title}) {
  return (
    <div className="card">
        <h2 className='rounded-full border-orange-700 w-1/5 mx-auto border-2 text-xl font-bold text-orange-700 text-center'>{count}</h2>
        
        <h3 className='text-2xl font-bold p-3'>{title}</h3>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit doloribus aut sed ut cupiditate, recusandae perspiciatis placeat soluta, ipsa incidunt qui ratione fugiat accusamus nostrum numquam, laborum nemo adipisci ducimus!</p>
    </div>
  )
}

export default Feature