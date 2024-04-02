import { useEffect } from "react";

const useEffectExample = () => {
  useEffect(() => {
    document.title = "hello useEfect";
  });

  return (
    <>
      <div>hello</div>
    </>
  );
};

export default useEffectExample;
