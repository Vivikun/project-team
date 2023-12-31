(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-him]'),
    closeModalBtn: document.querySelector('[data-modal-close-him]'),
    modal: document.querySelector('[data-modal-him]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
