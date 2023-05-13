const useRedirect = () => {
    const redirect = (url) => {
      window.location.href = url;
    };
  
    return redirect;
  };
  
  export default useRedirect;
  