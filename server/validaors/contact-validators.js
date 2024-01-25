const { z } = require("zod");
const contactSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be atleast of 3 char." })
        .max(255, { message: "Name must not be more than 255 characters" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be atleast 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    message: z
        .string({ required_error: "message is required" })
        .trim()
        .min(3, { message: "message must be atleast of 5 char." })
});

module.exports = contactSchema;