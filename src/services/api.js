const loadData = async (users, setUsers, paramsData) => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?nat=us&inc=email,name,phone,location,picture,id&results=${paramsData.per}&page=${paramsData.page}`
    );
    const json = await response.json();
    setUsers([...users, ...json.results]);
  } catch (error) {
    console.error("error", error);
  }
};

export default loadData;
