const API_URL = "https://resume.redberryinternship.ge/api";

const apiSubmitResume = async (data) => {
  const formData = new FormData();

  for (let key in data) {
    formData.append(key, data[key]);
  }

  const response = await fetch(`${API_URL}/cvs`, {
    method: "POST",
    body: formData,
  });

  return response.status;
};

const apiFetchDegrees = async () => {
  const response = await fetch(`${API_URL}/degrees`);
  return response.json();
};

export { apiSubmitResume, apiFetchDegrees };
