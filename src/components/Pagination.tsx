import { IPaginationProps } from "../types";

export default function Pagination(props: IPaginationProps) {
    const {
        productsPerPage,
        totalProductCount,
        setCurrentPage,
        currentPage,
    } = props;
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalProductCount / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="text-center w-full flex items-center justify-center my-5">
            <>
                <button
                    type="button"
                    disabled={currentPage === 1}
                    className="btn py-1 px-2  rounded-sm text-gray-500"
                    onClick={() => setCurrentPage(currentPage - 1)}>
                    {"«"}
                </button>


                {pageNumbers.map((number, index) => (
                    <button
                        type="button"
                        key={index}
                        onClick={() => setCurrentPage(number)}
                        className={currentPage && currentPage === number ? "btn  py-1 px-2 bg-white text-primary-blue rounded-sm shadow-sm" : "btn  py-1 px-2  rounded-sm text-gray-500"}
                    >
                        {number}
                    </button>
                ))}


                <button
                    type="button"
                    className="btn  py-1 px-2 rounded-sm text-gray-500"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={pageNumbers.length === currentPage}
                >
                    {"»"}
                </button>
            </>
        </div>
    );
}
