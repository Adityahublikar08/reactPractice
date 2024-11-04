import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Fast and furious",
    content: "1st part fast and furious movie",
  },
  {
    id: 2,
    title: "Fast and furious 2",
    content: "2nd part fast and furious movie",
  },
  { id: 3, title: "Tokyo drift", content: "3nd part fast and furious movie" },
  { id: 4, title: "Fast 4", content: "4th part fast and furious movie" },
];
function Component1() {
  const [post, setPost] = useState(data);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
    // setNewPost((param)=>({...param,[name]:value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //stopdefault form submission when we click n button form get auto submiteed tostop that behaviour
    if (!newPost.title || !newPost.content) return;
    if (isEditing) {
      const updatePost = [...post];
      updatePost[currentIndex] = newPost;
      setPost(updatePost);
      setIsEditing(false);
    } else {
      setPost([...post, newPost]); //adding dat in array
    }
    setNewPost({ title: "", content: "" }); // to make empty input after adding data
  };

  const handleDelete = (index) => {
    // const newData = post.filter((item) => !(item.id == index));
    const newData = post.filter((item) => item.id !== index);
    setPost(newData);
  };
  const handleClearButton = () => {
    setPost([]);
  };

  const editHandler = (param) => {
    setCurrentIndex(param);
    setIsEditing(true);
    setNewPost(post[param]);
  };
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <label>Title :</label>
        <input
          type="text"
          name="title"
          onChange={handleInput}
          value={newPost.title}
          style={{ padding: "10px", fontSize: "20px" }}
        />
        <label>Content</label>
        <input
          type="text"
          name="content"
          onChange={handleInput}
          value={newPost.content}
          style={{ padding: "10px", fontSize: "20px" }}
        />
        <div style={{ display: "flex", gap: "20px" }}>
          <button style={{ backgroundColor: "greenyellow", fontWeight: "700" }}>
            Add
          </button>
          <button
            style={{ backgroundColor: "orange", fontWeight: "700" }}
            onClick={handleClearButton}
          >
            Clear
          </button>
        </div>
        <hr />
      </form>

      {post.map((item, index) => {
        return (
          <div key={item.id}>
            <h1>Title :{item.title}</h1>
            <h2>Content: {item.content}</h2>
            <div
              style={{ display: "flex", gap: "20px", justifyContent: "center" }}
            >
              <button
                style={{ backgroundColor: "red", fontWeight: "700" }}
                onClick={() => handleDelete(item.id)}
              >
                Remove
              </button>
              <button
                style={{ backgroundColor: "red", fontWeight: "700" }}
                onClick={() => editHandler(index)}
              >
                Edit
              </button>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Component1;
