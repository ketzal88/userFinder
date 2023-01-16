const parserData = (user, param) => {
  let editedUser;
  if (param) {
    editedUser = {
      fName: user.name.first,
      last: user.name.last,
      city: user.location.city,
      state: user.location.state,
      email: user.email,
      phone: user.phone,
      id: user.id.value,
    };
  } else {
    editedUser = {
      name: {
        first: user.fName,
        last: user.last,
      },
      location: {
        city: user.city,
        state: user.state,
      },
      email: user.email,
      phone: user.phone,
      id: user.id,
    };
  }
  return editedUser;
};

export default parserData;
