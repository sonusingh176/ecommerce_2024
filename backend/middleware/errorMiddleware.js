export const errorMiddleware=(err, req, res, next) => {
    let error = { ...err };
  
    error.message = err.message;
  
    //Handling Mongoose Validation Error
    if (err.name === "validationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new Error(message);
    }
  
    //Handling Mongoose Duplication Key Error
    if (err.code === 11000) {
      // console.log(err)
      const message = `Duplicated ${Object.keys(err.keyValue)} entered`;
      error = new Error(message);
    }
  
    //Handling Wrong Object ID Error
    if (err.name === "castError") {
      const message = `Resource not found. Invalid :${err.path}`;
      error = new Error(message);
    }
  
    res.json({
      error: error.message,
    });

  };