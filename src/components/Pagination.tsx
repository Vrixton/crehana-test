import { PaginationProps } from '../types';
  
const Pagination = ({ page, totalPages, setPage }: PaginationProps) => (
    <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
      <button
        className="btn btn-secondary"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}>
        Anterior
      </button>
      <span className="fw-bold">Página {page} de {totalPages}</span>
      <button
        className="btn btn-secondary"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}>
        Siguiente
      </button>
    </div>
);
  
export default Pagination;
