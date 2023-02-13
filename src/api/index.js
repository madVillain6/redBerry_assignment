const API_URL = "https://resume.redberryinternship.ge/api";

const apiSubmitResume = async (data) => {
  const response = await fetch(`${API_URL}/cvs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log("before result");

  const result = await response.json();
  console.log("result", result);

  return result;
};

const apiFetchDegrees = async () => {
  const response = await fetch(`${API_URL}/degrees`);
  return response.json();
};

export { apiSubmitResume, apiFetchDegrees };
