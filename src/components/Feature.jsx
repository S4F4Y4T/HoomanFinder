import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Feature({count , title, icon}) {
  return (
    <div className="card">
      
        <Icon iconName={icon} />
        <h3 className='text-2xl font-bold p-3 text-white'>{title}</h3>
        <p className='text-justify text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit doloribus aut sed ut cupiditate, recusandae perspiciatis placeat soluta, ipsa incidunt qui ratione fugiat accusamus nostrum numquam, laborum nemo adipisci ducimus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit doloribus aut sed ut cupiditate, recusandae perspiciatis placeat soluta, ipsa incidunt qui ratione fugiat accusamus nostrum numquam, laborum nemo adipisci ducimus!</p>
    </div>
  )
}

const Icon = ({ iconName }) => {
  // You can add more logic here to handle different icon libraries if needed
  return <FontAwesomeIcon className="text-6xl text-white" icon={iconName} />;
};

export default Feature