class EnrollController {
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
