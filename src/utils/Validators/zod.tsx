import * as z from "zod";

const usernameRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
const mobileRegex = /^\+\d{1,3}[ ]?\d{7,15}$/;

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
});

const signupSchema = z.strictObject({
    name: z.string().trim().regex(/^[a-zA-Z]+$/, {
        error: "Name should only contain Alphabets"
    }),
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
    }),
    confirm: z.string(),
    email: z.email(),
    mobile: z.string().trim().regex(mobileRegex, {
        error: "Phone number must include country code and be digits only."
    })
}).refine(data => data.password === data.confirm, {
    error: "Password does not match",
    path: ["confirm"],
    
}).refine(data => data.password !== data.username, {
    path: ["username"],
    error: "Password and username should not be same",
    abort: true,
    when(payload){
        return signupSchema.pick({
            password: true, username: true
        }).safeParse(payload.value).success
    }
})

type SignUpSchemaType = z.infer<typeof signupSchema>;


type LoginSchemaType = z.infer<typeof loginSchema>;


export {
    loginSchema,
    signupSchema,
    type LoginSchemaType,
    type SignUpSchemaType
}