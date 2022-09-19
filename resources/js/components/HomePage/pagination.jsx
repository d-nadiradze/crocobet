import React from 'react';

const Pagination = ({setUsersPerPage,usersPerPage,totalUsers,setCurrentPage, currentPage}) => {
    const pages = []

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage) ; i++) {
        pages.push(i)
    }

    const changeUsersPerPage = (e) =>{
        setUsersPerPage(e.target.value)
    }

    return (
        <div className={'max-w-[1160px] mx-auto px-[20px] py-4'}>
            <div className={'flex items-center justify-between'}>
                <div className="">
                    Records on page
                    <select onChange={(e) => changeUsersPerPage(e)} >
                        <option value={5} className="">5</option>
                        <option value={10} className="">10</option>
                        <option value={15} className="">15</option>
                        <option value={20} className="">20</option>
                    </select>
                </div>
                <div className="flex space-x-4">
                    <div onClick={() => setCurrentPage(currentPage - ( currentPage > 1 ?  1 : 0 ))}  className={`w-[40px] h-[40px] rounded-full flex justify-center items-center border ${currentPage === 1 ? 'border-gray-200 cursor-default' : 'border-gray-400 cursor-pointer '} pl-1`}>
                        <div className={`border-t-2 border-l-2 ${currentPage === 1 ? 'border-gray-200' : 'border-gray-400'} w-2 h-2 -rotate-45 `}></div>
                    </div>
                    {
                        pages.map((page, index) =>
                            <div onClick={() => setCurrentPage(page)} key={index} className={`${currentPage === page ? "bg-blue-100 text-customBlue" :""} w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer`}>
                                {page}
                            </div>
                        )
                    }
                    <div onClick={() => setCurrentPage(currentPage + ( currentPage < totalUsers / usersPerPage ?  1 : 0 ))}  className={`w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer border ${currentPage >= totalUsers / usersPerPage ? 'border-gray-200' : 'border-gray-400'} pr-1`}>
                        <div className={`border-t-2 border-r-2 ${currentPage >= totalUsers / usersPerPage ? 'border-gray-200' : 'border-gray-400'} w-2 h-2 rotate-45`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
