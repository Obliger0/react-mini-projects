export async function signUpApi(name, email, password) {
  try {
    const res = await fetch("/user/sign-up", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function signInApi(email, password) {
  try {
    const res = await fetch("/user/sign-in", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function getUserDataFromDatabase() {
  try {
    const res = await fetch("/user/get-users");
    const data = await res.json();
    const userData = data.user;
    return userData;
  } catch (err) {
    console.log(err);
  }
}



export async function uploadImageApi(image, size, name) {
  try {
    const response = await fetch("/image/upload-image", {
      method: "POST",
      body: JSON.stringify({
        image,
        size,
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const getImagesApi = async () => {
  try {
    const response = await fetch("/image/get-image");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteImageApi = async () => {
  try {
    const response = await fetch("/image/delete-image");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

