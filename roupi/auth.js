export const useSignupWithProvider = (provider) => {
  //const { handleToken, handleNotification, trackID } = useStateContext();

  const signup = (token) => {
    usePOST("sign-up/" + provider, {
      data: { token: token.access },
      headers: { "X-Comercify-Visitor": trackID },
    }).then((res) => {
      console.log(res)
        //if (res.type == "error") handleNotification(res);
      //if (res.type == "success") handleToken(res.data);
    });
  };
  return { signup };
};