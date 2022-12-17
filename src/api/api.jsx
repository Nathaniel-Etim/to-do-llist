export async function getPosts() {
  try {
    const response = await fetch(
      "https://react-http-f3ac8-default-rtdb.firebaseio.com/wish.json"
    );

    if (!response.ok) {
      console.log("url is not valid");
    }
    const data = await response.json();

    const userPost = [];

    for (const key in data) {
      userPost.push({
        id: key,
        userName: data[key].userName,
        post: data[key].post,
      });
    }

    return userPost;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getPost(id) {
  const response = await fetch(
    "https://react-http-f3ac8-default-rtdb.firebaseio.com/wish/" + id + ".json"
  );

  if (!response.ok) {
    console.log("id not found ");
  }

  const data = await response.json();

  console.log(data);

  return data;
}

export async function savePost(post) {
  const response = await fetch(
    "https://react-http-f3ac8-default-rtdb.firebaseio.com/wish.json",
    {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    console.log("item can not be sent");
  }
}
