const { Schema, model } = require("mongoose");

const CourseSchema = new Schema({
  courses: [
    {
      id: Number,
      name: String,
      description: String,
      imageUrl: String,
    },
  ],
  subjectNames: [
    {
      name: String,
      id: Number,
      subjects: [
        {
          name: String,
          id: Number,
          imageUrl: String,
          description: String,
          videoContent: [
            {
              id: Number,
              title: String,
              url: String,
              description: String,
            },
          ],
        },
      ],
    },
  ],
});

const Course = model("Course", CourseSchema);
module.exports = Course;
