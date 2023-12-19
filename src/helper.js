export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

export const convertToDateTime = (standardTime) => {
  const dateTime = new Date(standardTime);

  const day = dateTime.getDate();
  const month = dateTime.toLocaleString("default", { month: "short" });
  const year = dateTime.getFullYear();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedDateTime = `${day} ${month} ${year} ${
    hours % 12
  }:${minutes} ${ampm}`;

  return formattedDateTime;
};


export const removeBaseUrlFromPath = (originalString) => {
  var modifiedString = originalString.replace(
    "https://api.bansalsale.com/",
    ""
  );
  return modifiedString;
};