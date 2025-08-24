import * as z from "zod";

const usernameRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

const loginSchema = z.strictObject({
    username: z.string({
        error: "Enter a valid username"
    }).trim().regex(usernameRegex, {
        error: "Username should combination of alphanumeric values with special characters are allowed",
    }),
    password: z.string().min(8, {
        error: "Password should contain atleast 8 characters",
        abort: true
    }).regex(passwordRegex, {
        error: "Password should contain atleast 1 uppercase letter, atleast 1 lowercase letter, atleast 1 digit, atleast 1 special character"
    })
}).refine(data => {
    return data.username === data.password ? false : true
}, {
    error: "Password and username should not be same",
    when(payload) {
        return loginSchema.pick({
            username: true, password: true
        }).safeParse(payload.value).success
    }
})


type LoginSchemaType = z.infer<typeof loginSchema>;

export {
    loginSchema,
    type LoginSchemaType
}