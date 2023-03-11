const capitalizeText = (input) => {
  if (typeof input !== "string"){
    throw new TypeError("Plz enter only string")
  };
  return input.toUpperCase();
};


module.exports={
  capitalizeText
}ng 