import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="background-modal">
      <section className='modalWindow'>
        {children}
      </section>
    </div>,
    document.getElementById('modal')
  )
}

export { Modal };