class EnrollController {
  servicesList = JSON.parse(sessionStorage.getItem("ServicesList")) || [];

  saveServicesListSession(list) {
    console.log(list.length, " list length");
    list.length
      ? sessionStorage.setItem("ServicesList", JSON.stringify(list))
      : sessionStorage.removeItem("ServicesList");
  }

  async saveServicesListDB(list) {
    const res = await fetch("http://localhost:8000/test", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(list),
    });
    const test = await res.json();
    console.log(test);
  }
}

export const enrollController = new EnrollController();
