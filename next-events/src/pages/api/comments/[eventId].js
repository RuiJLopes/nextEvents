export default function handler(req, res) {
  const eventID = req.query.eventId;
  if (req.method === "POST") {
    // add server side validation
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
    res.status(201).json({ message: "Added Comment", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Rui",
        text: "Awesome comment",
      },
      {
        id: "c2",
        name: "Rui",
        text: "Middle comment",
      },
      {
        id: "c1",
        name: "Fernando",
        text: "Comment",
      },
    ];

    res.status(200).json({ comments: dummyList });
  }
}
