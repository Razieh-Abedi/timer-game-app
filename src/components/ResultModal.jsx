import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ref, result, targetTime }) {
  const dialogRef = useRef();

useImperativeHandle(ref, ()=>{
 return {
    open() {
        dialogRef.current.showModal();
    }
 }
})

  return (
    // <>
    //   {createPortal(
    <dialog ref={dialogRef} className="result-modal">
      <h2>You {result}</h2>
      <p>
        Your target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
    //     element
    //   )}
    // </>
  );
}
