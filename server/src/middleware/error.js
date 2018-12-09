// export const errorHandler = (err, req, res) => {
//   let status = 500;
//   let message = 'Server error';

//   console.log('ERROR', err)

//   if(err instanceof HttpError) {
//     status = err.code;
//     message = err.message;
//   }

//   res.status(status).json({ error: message });
// };

// export class HttpError extends Error {
//   constructor({ code, message }) {
//     super(message);
//     this.code = code;
//     this.message = message;
//   }
// }

/* eslint-disable no-console */
//eslint-disable-next-line
const handler = (err, req, res, next) => {
  let code = 500;
  let error = 'Internal Server Error';

  if(err instanceof HttpError) {
    code = err.code;
    error = err.message;
  } else if(err.name === 'CastError' || err.name === 'ValidationError') {
    code = 400;
    error = err.message;
  } else if(process.env.NODE_ENV !== 'production') {
    error = err.message;
    console.log(err);
  } else {
    console.log(err);
  }

  res.status(code).send({ error });
};

class HttpError extends Error {
  constructor({ code, message }) {
    super(message);
    this.code = code;
    this.name = 'HttpError';
  }
}

module.exports = {
  handler,
  HttpError
};
