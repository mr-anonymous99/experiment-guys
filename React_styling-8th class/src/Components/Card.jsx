const Card = (props) => {
    return (
        <>
            <div className="bg-white rounded-8 shadow-2xl shadow-black overflow-hidden w-[25%] p-5 rounded-xl hover:scale-120">
                <img src={props.img} alt="" className='w-[100%]' />
                <div className="card-body">
                    <h2 className='text-blue-400 text-shadow-lg text-center font-semibold'>{props.title}</h2>
                    <p className="text-center">{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default Card