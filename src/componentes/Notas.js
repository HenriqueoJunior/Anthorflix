import React from "react";

const Notas = (props) => {
  return (
    <div className="col p-2 ">
      <form id="form-comentario">
        <div class="mb-3 bg-light">
          <label class="form-label">Notas</label>
          <input type="text" class="form-control" placeholder="Ex: 8,7" />
        </div>
        <div class="mb-3 bg-light">
          <label class="form-label">Opinião</label>
          <input type="text" class="form-control" placeholder="Ex: Divertido" />
        </div>
        <div class="mb-3 bg-light">
          <label class="form-label">Comentar sobre</label>
          <textarea class="form-control" rows="4"></textarea>
        </div>
        <button
          type="button"
          class="btn btn-outline-light"
          for="form-comentario"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Notas;
