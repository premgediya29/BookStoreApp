import React from 'react'

function Cards({ item }) {

    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card bg-base-100 w-80 shadow-sm hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="cursor-pointer p-3 border-[5px] badge badge-outline hover:text-white hover:bg-pink-500 duration-200">${item.price}</div>
                            <div className="cursor-pointer p-3 border-[5px] badge badge-outline hover:text-white hover:bg-pink-500 duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards