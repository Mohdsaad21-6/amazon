import axios from "axios";
export const getProducts = () => async (dispatch) => {
  try {
    // const data = await fetch("http://localhost:8005/getproducts",
    //   { withCredentials: true } ,
    //   {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // const res = await data.json();
    // console.log(res);

    const data = await axios.get("http://localhost:8005/getproducts", {
      withCredentials: true,
    });

    const res = data.data;

    dispatch({
      type: "SUCCESS_GET_PRODUCTS",
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: "FAIL_GET_PRODUCTS",
      payload: error.response,
    });
  }
};
