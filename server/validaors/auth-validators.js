const { z } = require("zod");

const signupSchema = z.object({
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

    phone: z
        .string({ required_error: "Phone is required" })
        .min(3, { message: "Phone must be atleast of 6 characters" })
        .max(11, "Phone can't be greater than 1024"),

    password: z
        .string({ required_error: "password is required" })
        .min(3, { message: "Password must be atleast of 6 characters" })
        .max(1024, "Password can't be greater than 1024"),
});

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be atleast 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),

    password: z
        .string({ required_error: "password is required" })
        .min(3, { message: "Password must be atleast of 6 characters" })
        .max(1024, "Password can't be greater than 1024"),
});
module.exports = { signupSchema, loginSchema };