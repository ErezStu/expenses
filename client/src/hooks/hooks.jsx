export const useGetUserID = () => {
  return window.localStorage.getItem("userID");
};

export const useGetToken = () => {
  return window.localStorage.getItem("token");
};
