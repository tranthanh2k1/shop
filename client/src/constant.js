export const API = "http://localhost:4000/api";

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};

export const convertStatusString = (status) => {
  if (status === "Wait for confirmation") {
    return {
      content: "Chờ xác nhận",
      bgr: "#fcaf17",
    };
  } else if (status === "Confirm") {
    return {
      content: "Xác nhận",
      bgr: "#45aaf2",
    };
  } else if (status === "Fixing") {
    return {
      content: "Đang sửa",
      bgr: "#27ae60",
    };
  } else if (status === "Successful fix") {
    return {
      content: "Sửa thành công",
      bgr: "#27ae60",
    };
  } else {
    return {
      content: "Đã hủy lịch",
      bgr: "#ee4d2d",
    };
  }
};

export const convertNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
